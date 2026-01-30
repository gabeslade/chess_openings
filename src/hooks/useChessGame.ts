import { useState, useCallback } from 'react'
import { Chess } from 'chess.js'
import type { Square } from 'chess.js'

const STARTING_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

export interface ChessGameState {
  fen: string
  turn: 'w' | 'b'
  moveHistory: string[]
  isCheck: boolean
  isCheckmate: boolean
  isStalemate: boolean
  isDraw: boolean
}

export interface VerboseMove {
  san: string
  from: Square
  to: Square
}

export interface ChessGameActions {
  makeMove: (move: string | { from: Square; to: Square; promotion?: string }) => boolean
  reset: () => void
  loadFen: (fen: string) => boolean
  undo: () => boolean
  getMoves: () => string[]
  getVerboseMoves: () => VerboseMove[]
}

export type UseChessGameReturn = ChessGameState & ChessGameActions

export function useChessGame(initialFen: string = STARTING_FEN): UseChessGameReturn {
  const [game] = useState(() => new Chess(initialFen))
  const [state, setState] = useState<ChessGameState>(() => getGameState(game))

  const updateState = useCallback(() => {
    setState(getGameState(game))
  }, [game])

  const makeMove = useCallback((move: string | { from: Square; to: Square; promotion?: string }) => {
    try {
      const result = game.move(move)
      if (result) {
        updateState()
        return true
      }
      return false
    } catch {
      return false
    }
  }, [game, updateState])

  const reset = useCallback(() => {
    game.reset()
    updateState()
  }, [game, updateState])

  const loadFen = useCallback((fen: string) => {
    try {
      game.load(fen)
      updateState()
      return true
    } catch {
      return false
    }
  }, [game, updateState])

  const undo = useCallback(() => {
    const result = game.undo()
    if (result) {
      updateState()
      return true
    }
    return false
  }, [game, updateState])

  const getMoves = useCallback(() => {
    return game.moves()
  }, [game])

  const getVerboseMoves = useCallback((): VerboseMove[] => {
    return game.moves({ verbose: true }).map(m => ({
      san: m.san,
      from: m.from,
      to: m.to,
    }))
  }, [game])

  return {
    ...state,
    makeMove,
    reset,
    loadFen,
    undo,
    getMoves,
    getVerboseMoves,
  }
}

function getGameState(game: Chess): ChessGameState {
  return {
    fen: game.fen(),
    turn: game.turn(),
    moveHistory: game.history(),
    isCheck: game.isCheck(),
    isCheckmate: game.isCheckmate(),
    isStalemate: game.isStalemate(),
    isDraw: game.isDraw(),
  }
}
