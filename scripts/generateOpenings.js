/**
 * Script to convert Lichess ECO TSV files into our opening tree structure
 * Run with: node scripts/generateOpenings.js
 */

import { Chess } from 'chess.js'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Parse a TSV file and return array of openings
function parseTSV(filepath) {
  const content = readFileSync(filepath, 'utf-8')
  const lines = content.trim().split('\n')
  const headers = lines[0].split('\t')

  return lines.slice(1).map(line => {
    const values = line.split('\t')
    return {
      eco: values[0],
      name: values[1],
      pgn: values[2],
    }
  })
}

// Convert PGN string to array of moves
function pgnToMoves(pgn) {
  // Remove move numbers and extra whitespace
  // "1. e4 e5 2. Nf3 Nc6" -> ["e4", "e5", "Nf3", "Nc6"]
  return pgn
    .replace(/\d+\.\s*/g, '')  // Remove move numbers
    .replace(/\s+/g, ' ')       // Normalize whitespace
    .trim()
    .split(' ')
    .filter(m => m.length > 0)
}

// Validate moves and get final FEN
function validateAndGetFen(moves) {
  const chess = new Chess()
  for (const move of moves) {
    try {
      const result = chess.move(move)
      if (!result) {
        console.error(`Invalid move: ${move} in sequence: ${moves.join(' ')}`)
        return null
      }
    } catch (e) {
      console.error(`Error with move: ${move} in sequence: ${moves.join(' ')}`)
      return null
    }
  }
  return chess.fen()
}

// Build a tree structure from flat opening list
function buildOpeningTree(openings) {
  const root = {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    children: {},
  }

  let validCount = 0
  let invalidCount = 0

  for (const opening of openings) {
    const moves = pgnToMoves(opening.pgn)
    if (moves.length === 0) continue

    // Validate moves
    const fen = validateAndGetFen(moves)
    if (!fen) {
      invalidCount++
      continue
    }

    // Traverse/build tree
    let node = root
    const chess = new Chess()

    for (let i = 0; i < moves.length; i++) {
      const move = moves[i]
      chess.move(move)
      const currentFen = chess.fen()

      if (!node.children[move]) {
        node.children[move] = {
          move,
          fen: currentFen,
          children: {},
        }
      }

      node = node.children[move]

      // If this is the last move, add opening info
      if (i === moves.length - 1) {
        node.name = opening.name
        node.eco = opening.eco
        node.moves = moves
      }
    }

    validCount++
  }

  console.log(`Processed ${validCount} valid openings, ${invalidCount} invalid`)
  return root
}

// Convert tree to array format for easier consumption
function treeToArray(node, path = []) {
  const openings = []

  for (const [move, child] of Object.entries(node.children)) {
    const currentPath = [...path, move]

    if (child.name) {
      openings.push({
        name: child.name,
        eco: child.eco,
        moves: child.moves,
        fen: child.fen,
      })
    }

    // Recursively process children
    openings.push(...treeToArray(child, currentPath))
  }

  return openings
}

// Convert tree children object to array format for the app
function convertTreeFormat(node) {
  const children = Object.values(node.children).map(child => ({
    move: child.move,
    fen: child.fen,
    name: child.name,
    eco: child.eco,
    children: convertTreeFormat(child),
  }))

  return children
}

// Main execution
console.log('Loading ECO files...')

const allOpenings = []
for (const letter of ['a', 'b', 'c', 'd', 'e']) {
  const filepath = join(__dirname, `${letter}.tsv`)
  const openings = parseTSV(filepath)
  allOpenings.push(...openings)
  console.log(`Loaded ${openings.length} openings from ${letter}.tsv`)
}

console.log(`\nTotal: ${allOpenings.length} openings`)
console.log('\nBuilding opening tree...')

const tree = buildOpeningTree(allOpenings)

// Convert to both formats
const treeFormat = {
  fen: tree.fen,
  children: convertTreeFormat(tree),
}

const flatFormat = treeToArray(tree)

// Sort flat format by ECO code
flatFormat.sort((a, b) => {
  if (a.eco !== b.eco) return a.eco.localeCompare(b.eco)
  return a.name.localeCompare(b.name)
})

console.log(`\nGenerated ${flatFormat.length} unique opening positions`)

// Write output files
const outputDir = join(__dirname, '..', 'src', 'data', 'openings')

writeFileSync(
  join(outputDir, 'openingTree.json'),
  JSON.stringify(treeFormat, null, 2)
)
console.log('Written: src/data/openings/openingTree.json')

writeFileSync(
  join(outputDir, 'openings.json'),
  JSON.stringify(flatFormat, null, 2)
)
console.log('Written: src/data/openings/openings.json')

// Also generate a summary by ECO
const byEco = {}
for (const opening of flatFormat) {
  const prefix = opening.eco[0]
  if (!byEco[prefix]) byEco[prefix] = []
  byEco[prefix].push(opening)
}

console.log('\nOpenings by ECO category:')
for (const [prefix, openings] of Object.entries(byEco)) {
  console.log(`  ${prefix}: ${openings.length} openings`)
}
