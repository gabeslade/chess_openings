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

// Flattened opening for display in lists (legacy)
export interface Opening {
  name: string
  eco: string
  moves: string[]           // Array of moves to reach this opening
  fen: string               // Final position FEN
  explanation?: string
  family?: string           // Parent opening family name
}

// Opening family - groups related variations together
export interface OpeningFamily {
  name: string              // "London System", "Sicilian Defense", etc.
  eco: string               // Primary ECO code
  description: string       // General description of the opening
  defaultColor: 'white' | 'black'  // Which color typically plays this opening
  variations: OpeningVariation[]
}

// A specific variation within a family
export interface OpeningVariation {
  name: string              // "Main Line", "Anti-London with ...Bf5", etc.
  moves: string[]           // Full move sequence
  explanation?: string
}

// Tree node for practice mode - built from variations
export interface PracticeTreeNode {
  fen: string
  moves: Map<string, PracticeTreeNode>  // move -> child node
  isEndOfLine?: boolean
  explanation?: string
  variationName?: string    // Which variation this belongs to
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
