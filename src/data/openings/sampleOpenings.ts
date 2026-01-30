import type { Opening } from '../../types'

// Sample openings to get started - we'll expand this later
export const sampleOpenings: Opening[] = [
  // 1.e4 openings
  {
    name: 'Italian Game',
    eco: 'C50',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'],
    fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    explanation: 'One of the oldest openings. White develops the bishop to an active square targeting f7, the weakest point in Black\'s position.',
  },
  {
    name: 'Italian Game: Giuoco Piano',
    eco: 'C53',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5'],
    fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
    explanation: 'The "Quiet Game" - Black mirrors White\'s bishop development. Both sides aim for solid central control.',
  },
  {
    name: 'Sicilian Defense',
    eco: 'B20',
    moves: ['e4', 'c5'],
    fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
    explanation: 'The most popular response to 1.e4. Black fights for the center asymmetrically, leading to rich tactical play.',
  },
  {
    name: 'Sicilian Defense: Open',
    eco: 'B32',
    moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4'],
    fen: 'r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4',
    explanation: 'The main line Open Sicilian. White has a space advantage but Black has the semi-open c-file for counterplay.',
  },
  {
    name: 'Sicilian Defense: Najdorf Variation',
    eco: 'B90',
    moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6'],
    fen: 'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6',
    explanation: 'Named after Miguel Najdorf. The move ...a6 is flexible, preparing ...e5 or ...b5 while preventing Nb5.',
  },
  {
    name: 'Ruy Lopez',
    eco: 'C60',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
    fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
    explanation: 'The Spanish Opening - one of the most respected openings. White puts pressure on the knight defending e5.',
  },
  {
    name: 'Ruy Lopez: Morphy Defense',
    eco: 'C78',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6'],
    fen: 'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5',
    explanation: 'Black develops the knight and prepares ...Be7. The most common continuation in the Ruy Lopez.',
  },
  {
    name: 'French Defense',
    eco: 'C00',
    moves: ['e4', 'e6'],
    fen: 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    explanation: 'A solid defense where Black plans ...d5 to challenge the center. The downside is the blocked light-squared bishop.',
  },
  {
    name: 'Caro-Kann Defense',
    eco: 'B10',
    moves: ['e4', 'c6'],
    fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    explanation: 'A solid defense preparing ...d5. Unlike the French, the light-squared bishop is not blocked.',
  },

  // 1.d4 openings
  {
    name: 'Queen\'s Gambit',
    eco: 'D06',
    moves: ['d4', 'd5', 'c4'],
    fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2',
    explanation: 'White offers a pawn to gain control of the center. If Black captures, White can reclaim it while developing.',
  },
  {
    name: 'Queen\'s Gambit Declined',
    eco: 'D30',
    moves: ['d4', 'd5', 'c4', 'e6'],
    fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
    explanation: 'Black declines the gambit and maintains a strong pawn center. A very solid choice.',
  },
  {
    name: 'Queen\'s Gambit Accepted',
    eco: 'D20',
    moves: ['d4', 'd5', 'c4', 'dxc4'],
    fen: 'rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
    explanation: 'Black takes the pawn. This is perfectly playable - Black gives up the center temporarily but develops actively.',
  },
  {
    name: 'Slav Defense',
    eco: 'D10',
    moves: ['d4', 'd5', 'c4', 'c6'],
    fen: 'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
    explanation: 'Black supports d5 with c6. Unlike the QGD, the light-squared bishop can develop to f5 or g4.',
  },
  {
    name: 'King\'s Indian Defense',
    eco: 'E60',
    moves: ['d4', 'Nf6', 'c4', 'g6'],
    fen: 'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
    explanation: 'A hypermodern defense where Black allows White to build a big center, then attacks it.',
  },
  {
    name: 'King\'s Indian Defense: Classical',
    eco: 'E92',
    moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'd5', 'O-O', 'e4', 'd6', 'Nf3'],
    fen: 'rnbq1rk1/ppp1ppbp/3p1np1/3P4/2P1P3/2N2N2/PP3PPP/R1BQKB1R b KQ - 1 7',
    explanation: 'The main line Classical variation. White has a space advantage; Black will strike back with ...e5 or ...c5.',
  },
  {
    name: 'Nimzo-Indian Defense',
    eco: 'E20',
    moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4'],
    fen: 'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4',
    explanation: 'Black pins the knight to potentially double White\'s c-pawns. One of the most respected defenses to 1.d4.',
  },
  {
    name: 'Grünfeld Defense',
    eco: 'D80',
    moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5'],
    fen: 'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq d6 0 4',
    explanation: 'Black immediately challenges the center. After cxd5 Nxd5, Black will attack the d4 pawn.',
  },

  // 1.Nf3 and 1.c4 openings
  {
    name: 'English Opening',
    eco: 'A10',
    moves: ['c4'],
    fen: 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq c3 0 1',
    explanation: 'A flexible opening that can transpose into many different systems. White controls d5 and keeps options open.',
  },
  {
    name: 'Réti Opening',
    eco: 'A05',
    moves: ['Nf3', 'Nf6', 'g3'],
    fen: 'rnbqkb1r/pppppppp/5n2/8/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2',
    explanation: 'A hypermodern opening where White fianchettoes the kingside bishop and delays central pawn moves.',
  },
  {
    name: 'London System',
    eco: 'D02',
    moves: ['d4', 'd5', 'Nf3', 'Nf6', 'Bf4'],
    fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3',
    explanation: 'A solid system opening where White develops the bishop outside the pawn chain before playing e3.',
  },
]

// Group openings by ECO code prefix for the explorer
export function getOpeningsByEcoGroup(): Record<string, Opening[]> {
  const groups: Record<string, Opening[]> = {
    'A': [], // Flank openings
    'B': [], // Semi-open games (1.e4 not 1...e5)
    'C': [], // Open games (1.e4 e5)
    'D': [], // Closed games (1.d4 d5)
    'E': [], // Indian defenses (1.d4 Nf6)
  }

  for (const opening of sampleOpenings) {
    const prefix = opening.eco[0]
    if (prefix in groups) {
      groups[prefix].push(opening)
    }
  }

  return groups
}

// Search openings by name
export function searchOpenings(query: string): Opening[] {
  const lowerQuery = query.toLowerCase()
  return sampleOpenings.filter(
    opening =>
      opening.name.toLowerCase().includes(lowerQuery) ||
      opening.eco.toLowerCase().includes(lowerQuery)
  )
}
