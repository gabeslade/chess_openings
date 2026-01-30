import type { Opening } from '../../types'
import openingsData from './openings.json'
import { deepOpenings, getDeepOpeningsByCategory } from './deepOpenings'

// ECO database openings
const ecoOpenings: Opening[] = openingsData as Opening[]

// Merge deep openings with ECO openings, prioritizing deep openings
// Deep openings come first and have explanations
export const allOpenings: Opening[] = [
  ...deepOpenings,
  ...ecoOpenings.filter(eco =>
    !deepOpenings.some(deep => deep.name === eco.name)
  ),
]

// For backwards compatibility
export const sampleOpenings = allOpenings

// Export deep openings for featured section
export { deepOpenings, getDeepOpeningsByCategory }

// Cache for ECO groups
let ecoGroupsCache: Record<string, Opening[]> | null = null

// Group openings by ECO code prefix for the explorer
export function getOpeningsByEcoGroup(): Record<string, Opening[]> {
  if (ecoGroupsCache) return ecoGroupsCache

  const groups: Record<string, Opening[]> = {
    'A': [], // Flank openings
    'B': [], // Semi-open games (1.e4 not 1...e5)
    'C': [], // Open games (1.e4 e5)
    'D': [], // Closed games (1.d4 d5)
    'E': [], // Indian defenses (1.d4 Nf6)
  }

  for (const opening of allOpenings) {
    const prefix = opening.eco[0]
    if (prefix in groups) {
      groups[prefix].push(opening)
    }
  }

  ecoGroupsCache = groups
  return groups
}

// Search openings by name or ECO code
export function searchOpenings(query: string, limit = 50): Opening[] {
  const lowerQuery = query.toLowerCase().trim()
  if (!lowerQuery) return []

  const results: Opening[] = []

  for (const opening of allOpenings) {
    if (
      opening.name.toLowerCase().includes(lowerQuery) ||
      opening.eco.toLowerCase().includes(lowerQuery)
    ) {
      results.push(opening)
      if (results.length >= limit) break
    }
  }

  return results
}

// Get popular/important openings (subset for quick access)
export function getPopularOpenings(): Opening[] {
  const popularNames = [
    'Italian Game',
    'Sicilian Defense',
    'Ruy Lopez',
    'French Defense',
    'Caro-Kann Defense',
    "Queen's Gambit",
    "Queen's Gambit Declined",
    "King's Indian Defense",
    'Nimzo-Indian Defense',
    'English Opening',
    'London System',
    'Scandinavian Defense',
    'Pirc Defense',
    'Alekhine Defense',
    'Dutch Defense',
    'Catalan Opening',
    'Benoni Defense',
    'Slav Defense',
  ]

  return allOpenings.filter(o =>
    popularNames.some(name => o.name === name || o.name.startsWith(name + ':'))
  )
}

// Get opening count
export function getOpeningCount(): number {
  return allOpenings.length
}
