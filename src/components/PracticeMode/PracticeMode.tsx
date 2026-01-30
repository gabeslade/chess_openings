import { useState, useEffect, useCallback } from 'react'
import type { Opening } from '../../types'
import type { UseChessGameReturn } from '../../hooks/useChessGame'

interface PracticeModeProps {
  opening: Opening | null
  game: UseChessGameReturn
  onSelectOpening: () => void
}

type PlayerColor = 'white' | 'black'

export default function PracticeMode({
  opening,
  game,
  onSelectOpening,
}: PracticeModeProps) {
  const [playerColor, setPlayerColor] = useState<PlayerColor>('white')
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [lastMoveCorrect, setLastMoveCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [stats, setStats] = useState({ correct: 0, mistakes: 0 })

  // Reset when opening changes
  useEffect(() => {
    if (opening) {
      resetPractice()
    }
  }, [opening?.name])

  const resetPractice = useCallback(() => {
    game.reset()
    setCurrentMoveIndex(0)
    setIsComplete(false)
    setLastMoveCorrect(null)
    setShowHint(false)
    setStats({ correct: 0, mistakes: 0 })
  }, [game])

  // Determine if it's the player's turn
  const isPlayerTurn = useCallback(() => {
    if (!opening) return false
    const moveNumber = currentMoveIndex
    const isWhiteMove = moveNumber % 2 === 0
    return (playerColor === 'white') === isWhiteMove
  }, [opening, currentMoveIndex, playerColor])

  // Make computer move if it's not player's turn
  useEffect(() => {
    if (!opening || isComplete) return
    if (currentMoveIndex >= opening.moves.length) {
      setIsComplete(true)
      return
    }

    if (!isPlayerTurn()) {
      // It's the computer's turn
      const timer = setTimeout(() => {
        const move = opening.moves[currentMoveIndex]
        game.makeMove(move)
        setCurrentMoveIndex(prev => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [opening, currentMoveIndex, isPlayerTurn, isComplete, game])

  // Handle player move
  const handlePlayerMove = useCallback((move: string) => {
    if (!opening || !isPlayerTurn() || isComplete) return

    const expectedMove = opening.moves[currentMoveIndex]

    // Normalize moves for comparison (handle different notation styles)
    const normalizeMove = (m: string) => m.replace(/[+#]/g, '').toLowerCase()

    if (normalizeMove(move) === normalizeMove(expectedMove)) {
      // Correct move
      setLastMoveCorrect(true)
      setShowHint(false)
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }))
      setCurrentMoveIndex(prev => prev + 1)
    } else {
      // Wrong move - undo it
      game.undo()
      setLastMoveCorrect(false)
      setStats(prev => ({ ...prev, mistakes: prev.mistakes + 1 }))
    }
  }, [opening, currentMoveIndex, isPlayerTurn, isComplete, game])

  // Watch for player moves
  useEffect(() => {
    const history = game.moveHistory
    if (history.length > 0 && isPlayerTurn()) {
      const lastMove = history[history.length - 1]
      handlePlayerMove(lastMove)
    }
  }, [game.moveHistory.length])

  if (!opening) {
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
      <p className="text-blue-400 font-medium mb-4">
        {opening.eco}: {opening.name}
      </p>

      {/* Color selection */}
      <div className="mb-4">
        <label className="text-sm text-slate-400 block mb-2">Play as:</label>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setPlayerColor('white')
              resetPractice()
            }}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              playerColor === 'white'
                ? 'bg-white text-black font-medium'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            White
          </button>
          <button
            onClick={() => {
              setPlayerColor('black')
              resetPractice()
            }}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              playerColor === 'black'
                ? 'bg-slate-900 text-white font-medium border border-slate-600'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Black
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-slate-400 mb-1">
          <span>Progress</span>
          <span>{currentMoveIndex} / {opening.moves.length}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${(currentMoveIndex / opening.moves.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Feedback */}
      {isComplete ? (
        <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg mb-4">
          <p className="text-green-400 font-medium">Opening Complete!</p>
          <p className="text-sm text-slate-300 mt-1">
            You made {stats.mistakes} mistake{stats.mistakes !== 1 ? 's' : ''}.
          </p>
        </div>
      ) : lastMoveCorrect === false ? (
        <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg mb-4">
          <p className="text-red-400 font-medium">Incorrect move</p>
          <p className="text-sm text-slate-300 mt-1">
            Try again or click "Show Hint" to see the correct move.
          </p>
        </div>
      ) : lastMoveCorrect === true ? (
        <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg mb-4">
          <p className="text-green-400 font-medium">Correct!</p>
        </div>
      ) : isPlayerTurn() ? (
        <div className="p-4 bg-blue-900/50 border border-blue-700 rounded-lg mb-4">
          <p className="text-blue-400 font-medium">Your turn</p>
          <p className="text-sm text-slate-300 mt-1">
            Make the correct move for {playerColor}.
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
          <p className="text-yellow-400 font-medium">Hint</p>
          <p className="text-lg font-mono mt-1">
            {opening.moves[currentMoveIndex]}
          </p>
          {opening.explanation && (
            <p className="text-sm text-slate-300 mt-2">{opening.explanation}</p>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => setShowHint(true)}
          disabled={isComplete || showHint}
          className="flex-1 py-2 bg-yellow-600 hover:bg-yellow-500 disabled:bg-slate-700 disabled:text-slate-500 rounded-lg transition-colors"
        >
          Show Hint
        </button>
        <button
          onClick={resetPractice}
          className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
        >
          Restart
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
