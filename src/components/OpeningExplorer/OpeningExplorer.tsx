import { useState, useMemo } from 'react'
import { openingFamilies } from '../../data/openings/openingFamilies'
import type { OpeningFamily } from '../../types'

interface OpeningExplorerProps {
  onSelectFamily: (family: OpeningFamily) => void
  onStartPractice: (family: OpeningFamily) => void
  selectedFamily: OpeningFamily | null
}

export default function OpeningExplorer({
  onSelectFamily,
  onStartPractice,
  selectedFamily,
}: OpeningExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null)

  const filteredFamilies = useMemo(() => {
    if (!searchQuery.trim()) return openingFamilies
    const query = searchQuery.toLowerCase()
    return openingFamilies.filter(
      family =>
        family.name.toLowerCase().includes(query) ||
        family.eco.toLowerCase().includes(query) ||
        family.variations.some(v => v.name.toLowerCase().includes(query))
    )
  }, [searchQuery])

  const toggleExpand = (familyName: string) => {
    setExpandedFamily(prev => (prev === familyName ? null : familyName))
  }

  return (
    <div className="bg-slate-800 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Opening Explorer</h2>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search openings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Opening families list */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto">
        {filteredFamilies.map(family => {
          const isSelected = selectedFamily?.name === family.name
          const isExpanded = expandedFamily === family.name

          return (
            <div key={family.name} className="space-y-1">
              {/* Family header */}
              <div
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
                onClick={() => onSelectFamily(family)}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">
                        {family.eco}
                      </span>
                      <span className="font-medium">{family.name}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {family.variations.length} variations
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onStartPractice(family)
                      }}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        isSelected
                          ? 'bg-blue-500 hover:bg-blue-400'
                          : 'bg-green-600 hover:bg-green-500'
                      }`}
                    >
                      Practice
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpand(family.name)
                      }}
                      className="text-slate-400 hover:text-white transition-colors px-1"
                    >
                      {isExpanded ? '▼' : '▶'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded variations */}
              {isExpanded && (
                <div className="ml-4 space-y-1">
                  <p className="text-xs text-slate-500 px-2 py-1">
                    {family.description}
                  </p>
                  {family.variations.map(variation => (
                    <div
                      key={variation.name}
                      className="p-2 bg-slate-750 rounded border-l-2 border-slate-600 text-sm"
                    >
                      <p className="font-medium text-slate-300">{variation.name}</p>
                      <p className="text-xs text-slate-500 mt-1 font-mono">
                        {variation.moves.slice(0, 10).join(' ')}
                        {variation.moves.length > 10 ? '...' : ''}
                      </p>
                      {variation.explanation && (
                        <p className="text-xs text-slate-400 mt-1 italic">
                          {variation.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}

        {filteredFamilies.length === 0 && (
          <p className="text-slate-400 text-center py-4">No openings found</p>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700">
        <p className="text-sm text-slate-400">
          {openingFamilies.length} opening systems with{' '}
          {openingFamilies.reduce((sum, f) => sum + f.variations.length, 0)} total variations
        </p>
      </div>
    </div>
  )
}
