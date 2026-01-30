import { useState, useMemo } from 'react'
import { sampleOpenings, getOpeningsByEcoGroup, searchOpenings } from '../../data/openings/sampleOpenings'
import type { Opening } from '../../types'

interface OpeningExplorerProps {
  onSelect: (opening: Opening) => void
  onStartPractice: (opening: Opening) => void
  selectedOpening: Opening | null
}

const ECO_GROUP_NAMES: Record<string, string> = {
  'A': 'Flank Openings',
  'B': 'Semi-Open Games',
  'C': 'Open Games',
  'D': 'Closed Games',
  'E': 'Indian Defenses',
}

export default function OpeningExplorer({
  onSelect,
  onStartPractice,
  selectedOpening,
}: OpeningExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['C', 'B']))

  const openingsByGroup = useMemo(() => getOpeningsByEcoGroup(), [])

  const filteredOpenings = useMemo(() => {
    if (!searchQuery.trim()) return null
    return searchOpenings(searchQuery)
  }, [searchQuery])

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev)
      if (next.has(group)) {
        next.delete(group)
      } else {
        next.add(group)
      }
      return next
    })
  }

  const renderOpening = (opening: Opening) => {
    const isSelected = selectedOpening?.name === opening.name
    return (
      <div
        key={opening.name}
        className={`p-3 rounded-lg cursor-pointer transition-colors ${
          isSelected
            ? 'bg-blue-600 text-white'
            : 'bg-slate-700 hover:bg-slate-600'
        }`}
        onClick={() => onSelect(opening)}
      >
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-slate-400 mr-2">
              {opening.eco}
            </span>
            <span className="font-medium">{opening.name}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onStartPractice(opening)
            }}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              isSelected
                ? 'bg-blue-500 hover:bg-blue-400'
                : 'bg-green-600 hover:bg-green-500'
            }`}
          >
            Practice
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {opening.moves.join(' ')}
        </p>
      </div>
    )
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

      {/* Results */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto">
        {filteredOpenings ? (
          // Search results
          filteredOpenings.length > 0 ? (
            filteredOpenings.map(renderOpening)
          ) : (
            <p className="text-slate-400 text-center py-4">No openings found</p>
          )
        ) : (
          // ECO grouped view
          Object.entries(openingsByGroup).map(([group, openings]) => (
            <div key={group}>
              <button
                onClick={() => toggleGroup(group)}
                className="w-full flex items-center justify-between p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <span className="font-medium">
                  {group}: {ECO_GROUP_NAMES[group]}
                </span>
                <span className="text-slate-400">
                  {expandedGroups.has(group) ? '▼' : '▶'} ({openings.length})
                </span>
              </button>
              {expandedGroups.has(group) && (
                <div className="mt-2 ml-2 space-y-2">
                  {openings.map(renderOpening)}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700">
        <p className="text-sm text-slate-400">
          {sampleOpenings.length} openings available
        </p>
      </div>
    </div>
  )
}
