import { useState, useEffect, useCallback } from 'react'
import type { Square } from 'chess.js'
import ChessBoard from './components/Board/ChessBoard'
import OpeningExplorer from './components/OpeningExplorer/OpeningExplorer'
import PracticeMode from './components/PracticeMode/PracticeMode'
import { useChessGame } from './hooks/useChessGame'
import type { OpeningFamily } from './types'

type Mode = 'explore' | 'practice'
type PlayerColor = 'white' | 'black'

function App() {
  const [mode, setMode] = useState<Mode>('explore')
  const [selectedFamily, setSelectedFamily] = useState<OpeningFamily | null>(null)
  const [playerColor, setPlayerColor] = useState<PlayerColor>('white')
  const [hintSquares, setHintSquares] = useState<Square[]>([])
  const game = useChessGame()

  // Update player color when opening family changes (auto-select based on opening type)
  useEffect(() => {
    if (selectedFamily) {
      setPlayerColor(selectedFamily.defaultColor)
    }
  }, [selectedFamily])

  const handleFamilySelect = (family: OpeningFamily) => {
    setSelectedFamily(family)
    game.reset()
    // Play through the first variation to show a sample position
    if (family.variations.length > 0) {
      family.variations[0].moves.forEach(move => game.makeMove(move))
    }
  }

  const handleStartPractice = (family: OpeningFamily) => {
    setSelectedFamily(family)
    setPlayerColor(family.defaultColor)
    setMode('practice')
    game.reset()
  }

  const handleColorChange = (color: PlayerColor) => {
    setPlayerColor(color)
  }

  const handleHintSquaresChange = useCallback((squares: Square[]) => {
    setHintSquares(squares)
  }, [])

  // Clear hint squares when switching modes
  useEffect(() => {
    setHintSquares([])
  }, [mode])

  // Board orientation: in practice mode, show player's color on bottom
  const boardOrientation = mode === 'practice' ? playerColor : 'white'

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Chess Openings Trainer</h1>
          <nav className="flex gap-2">
            <button
              onClick={() => setMode('explore')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                mode === 'explore'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Explore
            </button>
            <button
              onClick={() => setMode('practice')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                mode === 'practice'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Practice
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChessBoard
              position={game.fen}
              onMove={game.makeMove}
              orientation={boardOrientation}
              highlightedSquares={mode === 'practice' ? hintSquares : []}
            />
            {selectedFamily && mode === 'explore' && (
              <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-400">
                  {selectedFamily.eco}: {selectedFamily.name}
                </h2>
                <p className="mt-2 text-slate-300">{selectedFamily.description}</p>
                <p className="mt-2 text-sm text-slate-400">
                  {selectedFamily.variations.length} variations available
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            {mode === 'explore' ? (
              <OpeningExplorer
                onSelectFamily={handleFamilySelect}
                onStartPractice={handleStartPractice}
                selectedFamily={selectedFamily}
              />
            ) : (
              <PracticeMode
                openingFamily={selectedFamily}
                game={game}
                playerColor={playerColor}
                onColorChange={handleColorChange}
                onSelectOpening={() => setMode('explore')}
                onHintSquaresChange={handleHintSquaresChange}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
