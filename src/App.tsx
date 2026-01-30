import { useState } from 'react'
import ChessBoard from './components/Board/ChessBoard'
import OpeningExplorer from './components/OpeningExplorer/OpeningExplorer'
import PracticeMode from './components/PracticeMode/PracticeMode'
import { useChessGame } from './hooks/useChessGame'
import type { Opening } from './types'

type Mode = 'explore' | 'practice'

function App() {
  const [mode, setMode] = useState<Mode>('explore')
  const [selectedOpening, setSelectedOpening] = useState<Opening | null>(null)
  const game = useChessGame()

  const handleOpeningSelect = (opening: Opening) => {
    setSelectedOpening(opening)
    game.reset()
    // Play through the opening moves to show the position
    opening.moves.forEach(move => game.makeMove(move))
  }

  const handleStartPractice = (opening: Opening) => {
    setSelectedOpening(opening)
    setMode('practice')
    game.reset()
  }

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
              orientation="white"
            />
            {selectedOpening && (
              <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-400">
                  {selectedOpening.eco}: {selectedOpening.name}
                </h2>
                {selectedOpening.explanation && (
                  <p className="mt-2 text-slate-300">{selectedOpening.explanation}</p>
                )}
                <p className="mt-2 text-sm text-slate-400">
                  Moves: {selectedOpening.moves.join(' ')}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            {mode === 'explore' ? (
              <OpeningExplorer
                onSelect={handleOpeningSelect}
                onStartPractice={handleStartPractice}
                selectedOpening={selectedOpening}
              />
            ) : (
              <PracticeMode
                opening={selectedOpening}
                game={game}
                onSelectOpening={() => setMode('explore')}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
