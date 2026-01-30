import { useState, useEffect, useCallback, useMemo } from 'react'
import type { Square } from 'chess.js'
import type { OpeningFamily } from '../../types'
import type { UseChessGameReturn } from '../../hooks/useChessGame'
import {
  buildPracticeTree,
  getValidMoves,
  pickRandomMove,
  isValidBookMove,
  isEndOfBook,
  getPositionInfo,
} from '../../data/openings/openingFamilies'

type PlayerColor = 'white' | 'black'

interface PracticeModeProps {
  openingFamily: OpeningFamily | null
  game: UseChessGameReturn
  playerColor: PlayerColor
  onColorChange: (color: PlayerColor) => void
  onSelectOpening: () => void
  onHintSquaresChange?: (squares: Square[]) => void
}

export default function PracticeMode({
  openingFamily,
  game,
  playerColor,
  onColorChange,
  onSelectOpening,
  onHintSquaresChange,
}: PracticeModeProps) {
  const [isComplete, setIsComplete] = useState(false)
  const [lastMoveCorrect, setLastMoveCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [stats, setStats] = useState({ correct: 0, mistakes: 0 })
  const [currentVariation, setCurrentVariation] = useState<string | null>(null)

  // Track moves in the opening tree (might differ from game if player makes wrong move)
  const [treeMoves, setTreeMoves] = useState<string[]>([])
  // Flag to trigger computer move
  const [computerShouldMove, setComputerShouldMove] = useState(false)

  // Build the practice tree when opening family changes
  const practiceTree = useMemo(() => {
    if (!openingFamily) return null
    return buildPracticeTree(openingFamily)
  }, [openingFamily])

  // Determine if it's the player's turn
  const isPlayerTurn = useCallback((moveIndex: number) => {
    const isWhiteToMove = moveIndex % 2 === 0
    return (playerColor === 'white') === isWhiteToMove
  }, [playerColor])

  // Reset when opening changes
  useEffect(() => {
    if (openingFamily) {
      resetPractice()
    }
  }, [openingFamily?.name])

  // Reset when player color changes
  useEffect(() => {
    resetPractice()
  }, [playerColor])

  const resetPractice = useCallback(() => {
    game.reset()
    setTreeMoves([])
    setIsComplete(false)
    setLastMoveCorrect(null)
    setShowHint(false)
    setStats({ correct: 0, mistakes: 0 })
    setCurrentVariation(null)
    setComputerShouldMove(true) // Check if computer should move first
  }, [game])

  // Check if computer should make a move
  useEffect(() => {
    if (!computerShouldMove) return
    if (!openingFamily || !practiceTree || isComplete) {
      setComputerShouldMove(false)
      return
    }

    // Check if we've reached end of book
    if (isEndOfBook(practiceTree, treeMoves)) {
      setIsComplete(true)
      setComputerShouldMove(false)
      return
    }

    const currentMoveIndex = treeMoves.length

    // If it's the player's turn, don't make a computer move
    if (isPlayerTurn(currentMoveIndex)) {
      setComputerShouldMove(false)
      return
    }

    // It's the computer's turn - pick a random book move after a delay
    const timer = setTimeout(() => {
      const randomMove = pickRandomMove(practiceTree, treeMoves)
      if (randomMove) {
        game.makeMove(randomMove)
        const newTreeMoves = [...treeMoves, randomMove]
        setTreeMoves(newTreeMoves)

        // Check for variation info
        const info = getPositionInfo(practiceTree, newTreeMoves)
        if (info?.variationName) {
          setCurrentVariation(info.variationName)
        }

        // Check if we've reached end of book
        if (isEndOfBook(practiceTree, newTreeMoves)) {
          setIsComplete(true)
          setComputerShouldMove(false)
        } else {
          // Trigger another check (in case computer has multiple moves in a row)
          setComputerShouldMove(true)
        }
      } else {
        setIsComplete(true)
        setComputerShouldMove(false)
      }
    }, 500)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerShouldMove, openingFamily, practiceTree, treeMoves, isComplete, isPlayerTurn])

  // Watch for player moves on the board
  useEffect(() => {
    if (!openingFamily || !practiceTree || isComplete) return

    const gameMoveCount = game.moveHistory.length
    const treeMoveCount = treeMoves.length

    // If game has more moves than our tree, player made a move
    if (gameMoveCount > treeMoveCount) {
      const playerMove = game.moveHistory[gameMoveCount - 1]
      const moveIndex = treeMoveCount

      // Verify it's supposed to be the player's turn
      if (!isPlayerTurn(moveIndex)) {
        // Not player's turn - this shouldn't happen, but undo just in case
        game.undo()
        return
      }

      // Check if the move is valid
      if (isValidBookMove(practiceTree, treeMoves, playerMove)) {
        // Correct move!
        const newTreeMoves = [...treeMoves, playerMove]
        setTreeMoves(newTreeMoves)
        setLastMoveCorrect(true)
        setShowHint(false)
        setStats(prev => ({ ...prev, correct: prev.correct + 1 }))

        // Check for variation info
        const info = getPositionInfo(practiceTree, newTreeMoves)
        if (info?.variationName) {
          setCurrentVariation(info.variationName)
        }

        // Check if we've reached end of book
        if (isEndOfBook(practiceTree, newTreeMoves)) {
          setIsComplete(true)
        } else {
          // Trigger computer to move
          setComputerShouldMove(true)
        }
      } else {
        // Wrong move - undo it
        game.undo()
        setLastMoveCorrect(false)
        setStats(prev => ({ ...prev, mistakes: prev.mistakes + 1 }))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.moveHistory.length, openingFamily, practiceTree, treeMoves, isComplete, isPlayerTurn])

  // Get valid moves for hints
  const hintMoves = useMemo(() => {
    if (!practiceTree) return []
    return getValidMoves(practiceTree, treeMoves)
  }, [practiceTree, treeMoves])

  // Compute and report hint squares when showHint changes
  useEffect(() => {
    if (!onHintSquaresChange) return

    if (showHint && !isComplete && hintMoves.length > 0) {
      // Get verbose moves to find source squares
      const verboseMoves = game.getVerboseMoves()
      // Filter to only the valid book moves
      const validVerboseMoves = verboseMoves.filter(m => hintMoves.includes(m.san))
      // Extract unique source squares
      const sourceSquares = [...new Set(validVerboseMoves.map(m => m.from))]
      onHintSquaresChange(sourceSquares)
    } else {
      onHintSquaresChange([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showHint, isComplete, hintMoves, onHintSquaresChange])

  // Current turn info
  const currentMoveIndex = treeMoves.length
  const isPlayersTurn = isPlayerTurn(currentMoveIndex) && !isComplete

  if (!openingFamily) {
    return (
      <div className="bg-slate-800 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Practice Mode</h2>
        <div className="text-center py-8">
          <p className="text-slate-400 mb-4">No opening selected</p>
          <button
            onClick={onSelectOpening}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Select an Opening
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-800 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">Practice Mode</h2>
      <p className="text-blue-400 font-medium">{openingFamily.name}</p>
      <p className="text-xs text-slate-400 mb-4">
        {openingFamily.variations.length} variations
        {openingFamily.defaultColor === 'black' && (
          <span className="ml-2 text-yellow-400">(Defense - typically Black)</span>
        )}
      </p>

      {/* Current variation being played */}
      {currentVariation && (
        <div className="mb-4 p-2 bg-slate-700 rounded text-sm">
          <span className="text-slate-400">Line: </span>
          <span className="text-green-400">{currentVariation}</span>
        </div>
      )}

      {/* Color selection */}
      <div className="mb-4">
        <label className="text-sm text-slate-400 block mb-2">Play as:</label>
        <div className="flex gap-2">
          <button
            onClick={() => onColorChange('white')}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              playerColor === 'white'
                ? 'bg-white text-black font-medium'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            White
            {openingFamily.defaultColor === 'white' && (
              <span className="ml-1 text-xs opacity-70">(rec)</span>
            )}
          </button>
          <button
            onClick={() => onColorChange('black')}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              playerColor === 'black'
                ? 'bg-slate-900 text-white font-medium border border-slate-600'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Black
            {openingFamily.defaultColor === 'black' && (
              <span className="ml-1 text-xs opacity-70">(rec)</span>
            )}
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-slate-400 mb-1">
          <span>Moves played</span>
          <span>{treeMoves.length}</span>
        </div>
      </div>

      {/* Feedback */}
      {isComplete ? (
        <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg mb-4">
          <p className="text-green-400 font-medium">Line Complete!</p>
          <p className="text-sm text-slate-300 mt-1">
            You made {stats.mistakes} mistake{stats.mistakes !== 1 ? 's' : ''} and got {stats.correct} correct.
          </p>
          {currentVariation && (
            <p className="text-sm text-slate-400 mt-1">
              Variation: {currentVariation}
            </p>
          )}
        </div>
      ) : lastMoveCorrect === false ? (
        <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg mb-4">
          <p className="text-red-400 font-medium">Not a book move</p>
          <p className="text-sm text-slate-300 mt-1">
            Try again or click "Show Hint" to see valid moves.
          </p>
        </div>
      ) : lastMoveCorrect === true ? (
        <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg mb-4">
          <p className="text-green-400 font-medium">Correct!</p>
        </div>
      ) : isPlayersTurn ? (
        <div className="p-4 bg-blue-900/50 border border-blue-700 rounded-lg mb-4">
          <p className="text-blue-400 font-medium">Your turn</p>
          <p className="text-sm text-slate-300 mt-1">
            Play a book move for {playerColor}.
            {hintMoves.length > 1 && (
              <span className="text-slate-400"> ({hintMoves.length} options)</span>
            )}
          </p>
        </div>
      ) : (
        <div className="p-4 bg-slate-700 rounded-lg mb-4">
          <p className="text-slate-300">Waiting for opponent...</p>
        </div>
      )}

      {/* Hint */}
      {showHint && !isComplete && (
        <div className="p-4 bg-yellow-900/50 border border-yellow-700 rounded-lg mb-4">
          <p className="text-yellow-400 font-medium">Hint active</p>
          <p className="text-sm text-slate-300 mt-1">
            The piece{hintMoves.length > 1 ? 's' : ''} to move {hintMoves.length > 1 ? 'are' : 'is'} highlighted on the board.
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => setShowHint(true)}
          disabled={isComplete || showHint || !isPlayersTurn}
          className="flex-1 py-2 bg-yellow-600 hover:bg-yellow-500 disabled:bg-slate-700 disabled:text-slate-500 rounded-lg transition-colors"
        >
          Show Hint
        </button>
        <button
          onClick={resetPractice}
          className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
        >
          New Line
        </button>
      </div>

      {/* Stats */}
      <div className="mt-4 pt-4 border-t border-slate-700 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-green-400">{stats.correct}</p>
          <p className="text-sm text-slate-400">Correct</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-red-400">{stats.mistakes}</p>
          <p className="text-sm text-slate-400">Mistakes</p>
        </div>
      </div>

      {/* Opening description */}
      <div className="mt-4 pt-4 border-t border-slate-700">
        <p className="text-sm text-slate-400">{openingFamily.description}</p>
      </div>

      {/* Change opening */}
      <button
        onClick={onSelectOpening}
        className="w-full mt-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-slate-300"
      >
        Choose Different Opening
      </button>
    </div>
  )
}
