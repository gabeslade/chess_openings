import type { Square, Color } from 'chess.js'

// Opening tree node - represents a position in an opening
export interface OpeningNode {
  move: string              // SAN notation: "e4", "Nf3", etc.
  fen: string               // FEN string for the position after this move
  name?: string             // Opening name if this is a named position
  eco?: string              // ECO code: "B20", "C65", etc.
  explanation?: string      // Why this move is played
  children: OpeningNode[]   // Continuations/variations
}

// Root of the opening tree (starting position)
export interface OpeningRoot {
  fen: string               // Starting position FEN
  children: OpeningNode[]   // First moves (1.e4, 1.d4, etc.)
}

// Flattened opening for display in lists
export interface Opening {
  name: string
  eco: string
  moves: string[]           // Array of moves to reach this opening
  fen: string               // Final position FEN
  explanation?: string
}

// User progress tracking
export interface PracticeRecord {
  attempts: number
  correct: number
  lastAttempt: string       // ISO date string
}

export interface UserProgress {
  practiced: Record<string, PracticeRecord>  // keyed by opening name
  favorites: string[]
  lastPracticed: string     // ISO date
}

// Game state for the chess board
export interface GameState {
  fen: string
  turn: Color
  moveHistory: string[]
  isCheck: boolean
  isCheckmate: boolean
  isStalemate: boolean
}

// Practice mode state
export interface PracticeState {
  opening: Opening | null
  currentMoveIndex: number
  playerColor: Color
  isComplete: boolean
  mistakeCount: number
  showingHint: boolean
}

// Move made by user or computer
export interface MoveInfo {
  from: Square
  to: Square
  promotion?: string
  san: string
}
