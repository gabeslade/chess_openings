import type { OpeningFamily, PracticeTreeNode } from '../../types'
import { Chess } from 'chess.js'

/**
 * Opening families with multiple variations for realistic practice
 */
export const openingFamilies: OpeningFamily[] = [
  // ============================================
  // LONDON SYSTEM
  // ============================================
  {
    name: 'London System',
    eco: 'D02',
    description: 'A solid system opening where White develops Bf4 before e3, creating a pyramid structure. Very flexible and hard to refute.',
    defaultColor: 'white',
    variations: [
      {
        name: 'Main Line with ...c5',
        moves: ['d4', 'd5', 'Bf4', 'Nf6', 'e3', 'e6', 'Nf3', 'c5', 'c3', 'Nc6', 'Nbd2', 'Bd6', 'Bg3'],
        explanation: 'The main line where Black challenges with ...c5. White retreats the bishop to maintain the d4 outpost.',
      },
      {
        name: 'Early ...c5 Gambit',
        moves: ['d4', 'd5', 'Bf4', 'c5', 'e3', 'Nc6', 'c3', 'Nf6', 'Nd2', 'e6', 'Ngf3', 'Bd6', 'Bg3', 'O-O'],
        explanation: 'Black plays an immediate ...c5. White maintains the center and develops normally.',
      },
      {
        name: 'Anti-London with ...Bf5',
        moves: ['d4', 'd5', 'Bf4', 'Bf5', 'e3', 'e6', 'Nf3', 'Nf6', 'Bd3', 'Bxd3', 'Qxd3', 'c5', 'c3', 'Nc6'],
        explanation: 'Black mirrors the bishop development. After the trade, White has slightly more space.',
      },
      {
        name: 'Jobava London',
        moves: ['d4', 'Nf6', 'Bf4', 'd5', 'Nc3', 'e6', 'e3', 'Bd6', 'Bg3', 'O-O', 'Bd3', 'c5', 'Nf3', 'Nc6'],
        explanation: 'The aggressive Jobava setup with Nc3. Allows f3 and e4 ideas.',
      },
      {
        name: 'Accelerated London',
        moves: ['d4', 'Nf6', 'Bf4', 'g6', 'Nc3', 'd5', 'e3', 'Bg7', 'h4', 'O-O', 'Nf3', 'c5', 'Be2'],
        explanation: 'Against the King\'s Indian setup, White can play h4 for aggressive intentions.',
      },
    ],
  },

  // ============================================
  // ITALIAN GAME
  // ============================================
  {
    name: 'Italian Game',
    eco: 'C50',
    description: 'One of the oldest openings. White develops Bc4 targeting the weak f7 square. Leads to rich tactical and strategic play.',
    defaultColor: 'white',
    variations: [
      {
        name: 'Giuoco Piano - Main Line',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd4', 'exd4', 'cxd4', 'Bb4+', 'Bd2', 'Bxd2+', 'Nbxd2'],
        explanation: 'The main line with c3 and d4. White builds a strong center.',
      },
      {
        name: 'Giuoco Pianissimo',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'd3', 'Nf6', 'c3', 'd6', 'O-O', 'O-O', 'Re1', 'a6', 'Bb3', 'Ba7', 'Nbd2'],
        explanation: 'The "Very Quiet Game" with d3. A slow positional battle.',
      },
      {
        name: 'Evans Gambit Accepted',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4', 'Bxb4', 'c3', 'Ba5', 'd4', 'exd4', 'O-O', 'd6', 'cxd4'],
        explanation: 'The Evans Gambit - White sacrifices b4 for rapid development and initiative.',
      },
      {
        name: 'Two Knights - Fried Liver',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'd5', 'exd5', 'Nxd5', 'Nxf7', 'Kxf7', 'Qf3+', 'Ke6', 'd4'],
        explanation: 'The famous Fried Liver Attack! White sacrifices the knight for a vicious attack.',
      },
      {
        name: 'Two Knights - Main Line',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'd5', 'exd5', 'Na5', 'Bb5+', 'c6', 'dxc6', 'bxc6', 'Be2', 'h6'],
        explanation: 'Black avoids the Fried Liver with ...Na5. Complex play follows.',
      },
      {
        name: 'Hungarian Defense',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Be7', 'd4', 'd6', 'dxe5', 'Nxe5', 'Nxe5', 'dxe5', 'Qh5', 'g6', 'Qxe5'],
        explanation: 'Black plays ...Be7 instead of ...Bc5. More passive but solid.',
      },
    ],
  },

  // ============================================
  // SICILIAN DEFENSE
  // ============================================
  {
    name: 'Sicilian Defense',
    eco: 'B20',
    description: 'The most popular and aggressive response to 1.e4. Black creates asymmetry and fights for the initiative.',
    defaultColor: 'black',
    variations: [
      {
        name: 'Najdorf - English Attack',
        moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6', 'f3', 'Be7', 'Qd2', 'O-O', 'O-O-O'],
        explanation: 'The English Attack - White castles queenside and prepares g4-g5.',
      },
      {
        name: 'Najdorf - Classical 6.Be2',
        moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be2', 'e5', 'Nb3', 'Be7', 'O-O', 'O-O', 'Be3', 'Be6'],
        explanation: 'The Classical approach with Be2. Solid and positional.',
      },
      {
        name: 'Dragon - Yugoslav Attack',
        moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'f3', 'O-O', 'Qd2', 'Nc6', 'Bc4', 'Bd7', 'O-O-O'],
        explanation: 'The Yugoslav Attack - the sharpest line against the Dragon. Mutual attacks!',
      },
      {
        name: 'Sveshnikov',
        moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e5', 'Ndb5', 'd6', 'Bg5', 'a6', 'Na3', 'b5', 'Nd5', 'Be7', 'Bxf6', 'Bxf6'],
        explanation: 'The Sveshnikov - Black accepts a weak d5 but gets active pieces.',
      },
      {
        name: 'Scheveningen - Keres Attack',
        moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6', 'g4', 'h6', 'h4', 'Nc6', 'Rg1', 'd5'],
        explanation: 'The Keres Attack with g4 - very aggressive against the Scheveningen.',
      },
      {
        name: 'Alapin Variation',
        moves: ['e4', 'c5', 'c3', 'd5', 'exd5', 'Qxd5', 'd4', 'Nf6', 'Nf3', 'e6', 'Bd3', 'Be7', 'O-O', 'O-O', 'c4', 'Qd8'],
        explanation: 'The Alapin (2.c3) - White prepares d4 avoiding open Sicilian theory.',
      },
    ],
  },

  // ============================================
  // RUY LOPEZ
  // ============================================
  {
    name: 'Ruy Lopez',
    eco: 'C60',
    description: 'The Spanish Opening - one of the most respected openings. White pressures the e5 pawn indirectly through the c6 knight.',
    defaultColor: 'white',
    variations: [
      {
        name: 'Berlin Defense',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6', 'O-O', 'Nxe4', 'd4', 'Nd6', 'Bxc6', 'dxc6', 'dxe5', 'Nf5', 'Qxd8+', 'Kxd8'],
        explanation: 'The Berlin Endgame - drawish but Black is solid.',
      },
      {
        name: 'Closed - Chigorin',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'Na5', 'Bc2', 'c5'],
        explanation: 'The Chigorin Defense with ...Na5 and ...c5. Black fights for the center.',
      },
      {
        name: 'Marshall Attack',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd5', 'exd5', 'Nxd5'],
        explanation: 'The Marshall Gambit - Black sacrifices a pawn for a fierce attack.',
      },
      {
        name: 'Open Variation',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Nxe4', 'd4', 'b5', 'Bb3', 'd5', 'dxe5', 'Be6', 'c3'],
        explanation: 'The Open Ruy Lopez - Black takes on e4 immediately. Sharp play!',
      },
      {
        name: 'Exchange Variation',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Bxc6', 'dxc6', 'O-O', 'Bg4', 'h3', 'h5', 'd3', 'Qf6', 'Nbd2'],
        explanation: 'The Exchange Variation - White damages Black\'s structure for endgame edge.',
      },
    ],
  },

  // ============================================
  // QUEEN'S GAMBIT
  // ============================================
  {
    name: "Queen's Gambit",
    eco: 'D06',
    description: "White offers the c4 pawn to gain central control. Black can accept, decline, or play the Slav.",
    defaultColor: 'white',
    variations: [
      {
        name: 'Declined - Orthodox',
        moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'e3', 'O-O', 'Nf3', 'Nbd7', 'Rc1', 'c6', 'Bd3', 'dxc4', 'Bxc4'],
        explanation: 'The Orthodox Defense - the most classical QGD line.',
      },
      {
        name: 'Declined - Tartakower',
        moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'e3', 'O-O', 'Nf3', 'h6', 'Bh4', 'b6', 'Bd3', 'Bb7', 'O-O', 'Nbd7'],
        explanation: 'The Tartakower with ...b6 and ...Bb7. Flexible and solid.',
      },
      {
        name: 'Accepted',
        moves: ['d4', 'd5', 'c4', 'dxc4', 'Nf3', 'Nf6', 'e3', 'e6', 'Bxc4', 'c5', 'O-O', 'a6', 'Bb3', 'Nc6', 'Nc3', 'cxd4', 'exd4'],
        explanation: 'The Queen\'s Gambit Accepted - Black takes but White gets the center.',
      },
      {
        name: 'Slav Defense',
        moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O'],
        explanation: 'The Slav - Black supports d5 with ...c6 and develops ...Bf5.',
      },
      {
        name: 'Semi-Slav - Meran',
        moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'Bb7', 'O-O', 'a6'],
        explanation: 'The Meran Variation - Black expands on the queenside.',
      },
    ],
  },

  // ============================================
  // KING'S INDIAN DEFENSE
  // ============================================
  {
    name: "King's Indian Defense",
    eco: 'E60',
    description: "A hypermodern defense where Black lets White build a center then counterattacks with ...e5 or ...c5.",
    defaultColor: 'black',
    variations: [
      {
        name: 'Classical - Mar del Plata',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'e5', 'd5', 'Nbd7', 'O-O', 'Nc5', 'Qc2', 'a5'],
        explanation: 'The Mar del Plata - the main battleground of the King\'s Indian.',
      },
      {
        name: 'Classical - Bayonet Attack',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'e5', 'd5', 'Nh5', 'g3', 'f5', 'exf5', 'gxf5', 'b4'],
        explanation: 'The Bayonet Attack with b4 - White attacks on the queenside.',
      },
      {
        name: 'Sämisch',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'f3', 'O-O', 'Be3', 'e5', 'd5', 'Nh5', 'Qd2', 'f5', 'O-O-O'],
        explanation: 'The Sämisch with f3 - solid but less flexible. Often opposite-side castling.',
      },
      {
        name: 'Four Pawns Attack',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'f4', 'O-O', 'Nf3', 'c5', 'd5', 'e6', 'Be2', 'exd5', 'cxd5'],
        explanation: 'The Four Pawns Attack - ambitious but committal. White grabs space.',
      },
      {
        name: 'Fianchetto System',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'Nf3', 'd6', 'g3', 'O-O', 'Bg2', 'Nbd7', 'O-O', 'e5', 'e4', 'c6', 'h3'],
        explanation: 'The Fianchetto System - a solid positional approach for White.',
      },
    ],
  },

  // ============================================
  // CARO-KANN DEFENSE
  // ============================================
  {
    name: 'Caro-Kann Defense',
    eco: 'B10',
    description: 'A solid defense where Black prepares ...d5. Unlike the French, the light-squared bishop is not blocked.',
    defaultColor: 'black',
    variations: [
      {
        name: 'Classical - Main Line',
        moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Bf5', 'Ng3', 'Bg6', 'h4', 'h6', 'Nf3', 'Nd7', 'h5', 'Bh7', 'Bd3', 'Bxd3', 'Qxd3'],
        explanation: 'The Classical with ...Bf5 - the main line. Black develops the bishop actively.',
      },
      {
        name: 'Advance Variation',
        moves: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'O-O', 'Nc6', 'c3', 'Nge7', 'Na3', 'cxd4', 'cxd4'],
        explanation: 'The Advance Variation - White gains space but Black has good counterplay.',
      },
      {
        name: 'Exchange Variation',
        moves: ['e4', 'c6', 'd4', 'd5', 'exd5', 'cxd5', 'Bd3', 'Nc6', 'c3', 'Nf6', 'Bf4', 'Bg4', 'Qb3', 'Qd7', 'Nd2', 'e6'],
        explanation: 'The Exchange Variation - symmetric pawn structure, slight White edge.',
      },
      {
        name: 'Two Knights - 3...Bg4',
        moves: ['e4', 'c6', 'Nc3', 'd5', 'Nf3', 'Bg4', 'h3', 'Bxf3', 'Qxf3', 'e6', 'd4', 'Nf6', 'Bd3', 'dxe4', 'Nxe4', 'Qxd4'],
        explanation: 'Black pins the knight and trades it off. Solid but slightly passive.',
      },
    ],
  },

  // ============================================
  // FRENCH DEFENSE
  // ============================================
  {
    name: 'French Defense',
    eco: 'C00',
    description: 'A solid defense where Black plays ...e6 and ...d5. The main drawback is the blocked light-squared bishop.',
    defaultColor: 'black',
    variations: [
      {
        name: 'Winawer - Main Line',
        moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4', 'e5', 'c5', 'a3', 'Bxc3+', 'bxc3', 'Ne7', 'Qg4', 'O-O', 'Bd3', 'Nbc6'],
        explanation: 'The Winawer - Black trades bishop for knight damaging White\'s structure.',
      },
      {
        name: 'Classical - Steinitz',
        moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'e5', 'Nfd7', 'Bxe7', 'Qxe7', 'f4', 'O-O', 'Nf3', 'c5', 'Qd2'],
        explanation: 'The Classical Steinitz - solid play for both sides.',
      },
      {
        name: 'Tarrasch - Open',
        moves: ['e4', 'e6', 'd4', 'd5', 'Nd2', 'c5', 'exd5', 'Qxd5', 'Ngf3', 'cxd4', 'Bc4', 'Qd6', 'O-O', 'Nf6', 'Nb3', 'Nc6'],
        explanation: 'The Tarrasch Variation - 3.Nd2 avoids pins. Open play after ...c5.',
      },
      {
        name: 'Advance - Main Line',
        moves: ['e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Qb6', 'a3', 'c4', 'Nbd2', 'Na5', 'Be2', 'Bd7'],
        explanation: 'The Advance Variation - White gains space, Black attacks the chain.',
      },
      {
        name: 'Exchange Variation',
        moves: ['e4', 'e6', 'd4', 'd5', 'exd5', 'exd5', 'Nf3', 'Nf6', 'Bd3', 'Bd6', 'O-O', 'O-O', 'Bg5', 'Bg4', 'Nbd2'],
        explanation: 'The Exchange - symmetric structure, often leads to simplified positions.',
      },
    ],
  },

  // ============================================
  // NIMZO-INDIAN DEFENSE
  // ============================================
  {
    name: 'Nimzo-Indian Defense',
    eco: 'E20',
    description: 'Black pins the c3 knight with ...Bb4, ready to double White\'s pawns. One of the most respected defenses.',
    defaultColor: 'black',
    variations: [
      {
        name: 'Classical - 4.Qc2',
        moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'Qc2', 'O-O', 'a3', 'Bxc3+', 'Qxc3', 'd5', 'Nf3', 'dxc4', 'Qxc4', 'b6'],
        explanation: 'The Classical with 4.Qc2 - White avoids doubled pawns.',
      },
      {
        name: 'Rubinstein - 4.e3',
        moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'e3', 'O-O', 'Bd3', 'd5', 'Nf3', 'c5', 'O-O', 'dxc4', 'Bxc4', 'Nbd7'],
        explanation: 'The Rubinstein with 4.e3 - solid and strategic.',
      },
      {
        name: 'Sämisch - 4.a3',
        moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'a3', 'Bxc3+', 'bxc3', 'c5', 'e3', 'Nc6', 'Bd3', 'O-O', 'Ne2', 'b6'],
        explanation: 'The Sämisch with 4.a3 - White gets the bishop pair and strong center.',
      },
      {
        name: 'Leningrad - 4.Bg5',
        moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'Bg5', 'h6', 'Bh4', 'c5', 'd5', 'd6', 'e3', 'Bxc3+', 'bxc3', 'e5'],
        explanation: 'The Leningrad with 4.Bg5 - aggressive but allows ...h6-g5.',
      },
    ],
  },

  // ============================================
  // GRÜNFELD DEFENSE
  // ============================================
  {
    name: 'Grünfeld Defense',
    eco: 'D80',
    description: 'Black allows White a big center then attacks it with ...c5 and the fianchettoed bishop. Dynamic and counterattacking.',
    defaultColor: 'black',
    variations: [
      {
        name: 'Exchange - Main Line',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5', 'cxd5', 'Nxd5', 'e4', 'Nxc3', 'bxc3', 'Bg7', 'Nf3', 'c5', 'Be3', 'Qa5', 'Qd2', 'O-O'],
        explanation: 'The Exchange Variation - White builds a big center, Black attacks it.',
      },
      {
        name: 'Russian System',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5', 'Nf3', 'Bg7', 'Qb3', 'dxc4', 'Qxc4', 'O-O', 'e4', 'a6', 'Be2', 'b5', 'Qb3'],
        explanation: 'The Russian System with Qb3 - White grabs space early.',
      },
      {
        name: 'Fianchetto Variation',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5', 'Nf3', 'Bg7', 'g3', 'O-O', 'Bg2', 'dxc4', 'Qa4', 'a6', 'Qxc4', 'b5', 'Qb3'],
        explanation: 'The Fianchetto - White plays g3 for a quiet positional game.',
      },
    ],
  },

  // ============================================
  // ENGLISH OPENING
  // ============================================
  {
    name: 'English Opening',
    eco: 'A10',
    description: 'A flexible flank opening starting with 1.c4. Can transpose to many systems or lead to unique positions.',
    defaultColor: 'white',
    variations: [
      {
        name: 'Symmetrical - Four Knights',
        moves: ['c4', 'c5', 'Nc3', 'Nc6', 'Nf3', 'Nf6', 'g3', 'g6', 'Bg2', 'Bg7', 'O-O', 'O-O', 'd3', 'd6', 'Rb1', 'a6', 'a3', 'Rb8', 'b4'],
        explanation: 'The Symmetrical Four Knights - both sides develop identically then diverge.',
      },
      {
        name: 'Reversed Sicilian',
        moves: ['c4', 'e5', 'Nc3', 'Nf6', 'Nf3', 'Nc6', 'g3', 'Bb4', 'Bg2', 'O-O', 'O-O', 'e4', 'Ng5', 'Bxc3', 'bxc3'],
        explanation: 'The Reversed Sicilian - White plays a Sicilian with an extra tempo.',
      },
      {
        name: 'Anglo-Indian - Hedgehog',
        moves: ['c4', 'Nf6', 'Nc3', 'e6', 'Nf3', 'b6', 'e4', 'Bb7', 'd3', 'd6', 'Be2', 'Be7', 'O-O', 'O-O', 'Re1', 'Nbd7'],
        explanation: 'Leading to Hedgehog structures - Black has a flexible but cramped position.',
      },
    ],
  },
]

/**
 * Build a practice tree from an opening family
 * The tree allows multiple valid moves at each position
 * If variationIndex is provided, only that variation is included
 */
export function buildPracticeTree(family: OpeningFamily, variationIndex?: number): PracticeTreeNode {
  // If a specific variation is requested, only use that one
  const variations = variationIndex !== undefined
    ? [family.variations[variationIndex]]
    : family.variations
  const root: PracticeTreeNode = {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    moves: new Map(),
  }

  for (const variation of variations) {
    let currentNode = root
    const chess = new Chess()

    for (let i = 0; i < variation.moves.length; i++) {
      const move = variation.moves[i]
      chess.move(move)
      const fen = chess.fen()

      if (!currentNode.moves.has(move)) {
        currentNode.moves.set(move, {
          fen,
          moves: new Map(),
        })
      }

      currentNode = currentNode.moves.get(move)!

      // Mark end of line and add variation info
      if (i === variation.moves.length - 1) {
        currentNode.isEndOfLine = true
        currentNode.variationName = variation.name
        currentNode.explanation = variation.explanation
      }
    }
  }

  return root
}

/**
 * Get all valid moves at a position in the practice tree
 */
export function getValidMoves(tree: PracticeTreeNode, moveHistory: string[]): string[] {
  let node = tree

  for (const move of moveHistory) {
    const child = node.moves.get(move)
    if (!child) return []
    node = child
  }

  return Array.from(node.moves.keys())
}

/**
 * Pick a random valid move from available options
 */
export function pickRandomMove(tree: PracticeTreeNode, moveHistory: string[]): string | null {
  const validMoves = getValidMoves(tree, moveHistory)
  if (validMoves.length === 0) return null
  return validMoves[Math.floor(Math.random() * validMoves.length)]
}

/**
 * Check if a move is valid in the current position
 */
export function isValidBookMove(tree: PracticeTreeNode, moveHistory: string[], move: string): boolean {
  const validMoves = getValidMoves(tree, moveHistory)
  // Normalize for comparison (remove check symbols)
  const normalizedMove = move.replace(/[+#]/g, '')
  return validMoves.some(m => m.replace(/[+#]/g, '') === normalizedMove)
}

/**
 * Check if we've reached the end of all lines
 */
export function isEndOfBook(tree: PracticeTreeNode, moveHistory: string[]): boolean {
  return getValidMoves(tree, moveHistory).length === 0
}

/**
 * Get explanation for current position if available
 */
export function getPositionInfo(tree: PracticeTreeNode, moveHistory: string[]): { variationName?: string; explanation?: string } | null {
  let node = tree

  for (const move of moveHistory) {
    const child = node.moves.get(move)
    if (!child) return null
    node = child
  }

  if (node.variationName || node.explanation) {
    return {
      variationName: node.variationName,
      explanation: node.explanation,
    }
  }

  return null
}
