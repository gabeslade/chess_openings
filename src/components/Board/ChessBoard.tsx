import { Chessboard } from 'react-chessboard'
import type { Square } from 'chess.js'

interface ChessBoardProps {
  position: string
  onMove?: (move: string | { from: Square; to: Square; promotion?: string }) => boolean
  orientation?: 'white' | 'black'
  interactive?: boolean
  highlightedSquares?: Square[]
}

export default function ChessBoard({
  position,
  onMove,
  orientation = 'white',
  interactive = true,
  highlightedSquares = [],
}: ChessBoardProps) {
  // Build custom styles for highlighted squares (hints)
  const customSquareStyles: Record<string, React.CSSProperties> = {}
  for (const square of highlightedSquares) {
    customSquareStyles[square] = {
      backgroundColor: 'rgba(255, 215, 0, 0.6)',
      boxShadow: 'inset 0 0 8px 4px rgba(255, 180, 0, 0.8)',
    }
  }

  const handlePieceDrop = (sourceSquare: Square, targetSquare: Square) => {
    if (!onMove || !interactive) return false

    // Try the move, with queen promotion as default
    const success = onMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    })

    return success
  }

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <Chessboard
        position={position}
        onPieceDrop={handlePieceDrop}
        boardOrientation={orientation}
        arePiecesDraggable={interactive}
        customSquareStyles={customSquareStyles}
        customBoardStyle={{
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
        customDarkSquareStyle={{
          backgroundColor: '#779952',
        }}
        customLightSquareStyle={{
          backgroundColor: '#edeed1',
        }}
      />
    </div>
  )
}
