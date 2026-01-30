import type { Opening } from '../../types'

/**
 * Deep opening lines for the most popular openings
 * These go 10-15 moves into the main lines with explanations
 */
export const deepOpenings: Opening[] = [
  // ============================================
  // LONDON SYSTEM
  // ============================================
  {
    name: 'London System: Main Line',
    eco: 'D02',
    moves: ['d4', 'd5', 'Bf4', 'Nf6', 'e3', 'e6', 'Nf3', 'c5', 'c3', 'Nc6', 'Nbd2', 'Bd6', 'Bg3'],
    fen: 'r1bqk2r/pp3ppp/2nbpn2/2pp4/3P4/2P1PNB1/PP1N1PPP/R2QKB1R b KQkq - 1 7',
    explanation: 'The London main line. White develops solidly with Bf4 before e3. Black challenges with ...c5. Bg3 retreats the bishop to a safe square while maintaining the d4 outpost.',
  },
  {
    name: 'London System: Anti-London with ...Bf5',
    eco: 'D02',
    moves: ['d4', 'd5', 'Bf4', 'Bf5', 'e3', 'e6', 'Nf3', 'Nf6', 'Bd3', 'Bxd3', 'Qxd3', 'c5', 'c3'],
    fen: 'rn1qkb1r/pp3ppp/4pn2/2pp4/3P1B2/2PQP3/PP3PPP/RN3KNR b kq - 0 7',
    explanation: 'Black mirrors White\'s bishop development. After the trade on d3, White has a slight space advantage but Black has a solid position.',
  },
  {
    name: 'London System: Jobava London',
    eco: 'D00',
    moves: ['d4', 'Nf6', 'Bf4', 'd5', 'Nc3', 'e6', 'e3', 'Bd6', 'Bg3', 'O-O', 'Bd3', 'c5', 'Nf3'],
    fen: 'rnbq1rk1/pp3ppp/3bpn2/2pp4/3P4/2NBPNB1/PPP2PPP/R2QK2R b KQ - 3 7',
    explanation: 'The Jobava London with Nc3 instead of Nf3. More aggressive than the standard London, allowing f3 and e4 ideas.',
  },
  {
    name: 'London System: Classical with ...c5',
    eco: 'D02',
    moves: ['d4', 'd5', 'Nf3', 'Nf6', 'Bf4', 'c5', 'e3', 'Nc6', 'c3', 'Qb6', 'Qb3', 'c4', 'Qc2'],
    fen: 'r1b1kb1r/pp2pppp/1qn2n2/3p4/2pP1B2/2P1PN2/PPQ2PPP/RN2KB1R b KQkq - 1 7',
    explanation: 'Black tries to pressure b2 with ...Qb6. White defends with Qb3 and after ...c4, retreats to c2 maintaining a solid position.',
  },

  // ============================================
  // ITALIAN GAME
  // ============================================
  {
    name: 'Italian Game: Giuoco Piano Main Line',
    eco: 'C54',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd4', 'exd4', 'cxd4', 'Bb4+', 'Bd2', 'Bxd2+', 'Nbxd2'],
    fen: 'r1bqk2r/pppp1ppp/2n2n2/8/2BPP3/5N2/PP1N1PPP/R2QK2R b KQkq - 0 8',
    explanation: 'The main line Giuoco Piano. White builds a strong center with d4. Black trades bishops and White has the pair but Black has solid development.',
  },
  {
    name: 'Italian Game: Giuoco Pianissimo',
    eco: 'C54',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'd3', 'Nf6', 'c3', 'd6', 'O-O', 'O-O', 'Re1', 'a6', 'Bb3', 'Ba7', 'Nbd2'],
    fen: 'r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N2/PP1N1PPP/R1BQR1K1 b - - 3 10',
    explanation: 'The "Very Quiet Game" - White plays d3 instead of d4. A slow positional battle where both sides maneuver for advantages.',
  },
  {
    name: 'Italian Game: Evans Gambit',
    eco: 'C51',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4', 'Bxb4', 'c3', 'Ba5', 'd4', 'exd4', 'O-O', 'd6', 'cxd4'],
    fen: 'r1bqk1nr/pppp1ppp/2n5/b7/2BPP3/5N2/P4PPP/RNBQ1RK1 b kq - 0 8',
    explanation: 'The Evans Gambit sacrifices a pawn for rapid development and central control. White has a strong initiative.',
  },
  {
    name: 'Italian Game: Two Knights Defense Main Line',
    eco: 'C57',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'd5', 'exd5', 'Na5', 'Bb5+', 'c6', 'dxc6', 'bxc6', 'Bd3'],
    fen: 'r1bqkb1r/p4ppp/2p2n2/n3p1N1/8/3B4/PPPP1PPP/RNBQK2R b KQkq - 0 8',
    explanation: 'The main line of the Two Knights. After Ng5 threatening Nxf7, Black sacrifices a pawn with ...d5 for active counterplay.',
  },

  // ============================================
  // RUY LOPEZ
  // ============================================
  {
    name: 'Ruy Lopez: Berlin Defense Main Line',
    eco: 'C67',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6', 'O-O', 'Nxe4', 'd4', 'Nd6', 'Bxc6', 'dxc6', 'dxe5', 'Nf5', 'Qxd8+', 'Kxd8'],
    fen: 'r1b2kr1/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 w - - 0 9',
    explanation: 'The Berlin Endgame - Black gives up castling rights but reaches a solid endgame. Popular at the highest level.',
  },
  {
    name: 'Ruy Lopez: Closed Defense Main Line',
    eco: 'C84',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3'],
    fen: 'r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 b - - 0 10',
    explanation: 'The Closed Ruy Lopez - the most important line. White plays slowly to maintain tension while Black prepares counterplay.',
  },
  {
    name: 'Ruy Lopez: Marshall Attack',
    eco: 'C89',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd5'],
    fen: 'r1bq1rk1/2ppbppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - d6 0 10',
    explanation: 'The famous Marshall Attack - Black sacrifices a pawn with ...d5 for a fierce kingside attack. Deeply analyzed theory.',
  },

  // ============================================
  // SICILIAN DEFENSE
  // ============================================
  {
    name: 'Sicilian Defense: Najdorf Main Line',
    eco: 'B90',
    moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6', 'f3', 'Be7', 'Qd2', 'O-O', 'O-O-O'],
    fen: 'rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R b - - 2 11',
    explanation: 'The English Attack against the Najdorf. White castles queenside and prepares a kingside pawn storm with g4-g5.',
  },
  {
    name: 'Sicilian Defense: Dragon Yugoslav Attack',
    eco: 'B76',
    moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'f3', 'O-O', 'Qd2', 'Nc6', 'Bc4', 'Bd7', 'O-O-O'],
    fen: 'r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R b - - 5 11',
    explanation: 'The Yugoslav Attack against the Dragon. White castles queenside and attacks with h4-h5 and Bh6. Very sharp!',
  },
  {
    name: 'Sicilian Defense: Scheveningen',
    eco: 'B80',
    moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6', 'Be2', 'Be7', 'O-O', 'O-O', 'f4', 'Nc6', 'Be3', 'a6'],
    fen: 'r1bq1rk1/1p2bppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R2Q1RK1 w - - 0 11',
    explanation: 'The Scheveningen with a "small center" on e6/d6. Black has flexibility while White often plays f4-f5 or the Keres Attack with g4.',
  },
  {
    name: 'Sicilian Defense: Sveshnikov',
    eco: 'B33',
    moves: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e5', 'Ndb5', 'd6', 'Bg5', 'a6', 'Na3', 'b5', 'Nd5', 'Be7', 'Bxf6', 'Bxf6'],
    fen: 'r1bqk2r/5ppp/p1npNb2/1p1Np3/4P3/8/PPP2PPP/R2QKB1R w KQkq - 0 11',
    explanation: 'The Sveshnikov features ...e5 creating a backward d-pawn but gaining space and piece activity. Highly theoretical.',
  },

  // ============================================
  // QUEEN'S GAMBIT
  // ============================================
  {
    name: "Queen's Gambit Declined: Orthodox Defense",
    eco: 'D63',
    moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'e3', 'O-O', 'Nf3', 'Nbd7', 'Rc1', 'c6', 'Bd3', 'dxc4', 'Bxc4'],
    fen: 'r1bq1rk1/pp1nbppp/2p1pn2/6B1/2BP4/2N1PN2/PP3PPP/2RQK2R b K - 0 10',
    explanation: 'The Orthodox Defense is the most classical QGD line. Black develops solidly and aims for the ...c5 or ...e5 break.',
  },
  {
    name: "Queen's Gambit Declined: Tartakower Defense",
    eco: 'D58',
    moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'e3', 'O-O', 'Nf3', 'h6', 'Bh4', 'b6', 'Bd3', 'Bb7', 'O-O', 'Nbd7'],
    fen: 'r2q1rk1/pbpnbpp1/1p2pn1p/3p4/2PP3B/2NBPN2/PP3PPP/R2Q1RK1 w - - 4 11',
    explanation: 'The Tartakower features ...b6 and ...Bb7 to fianchetto the bishop. A solid and flexible system.',
  },
  {
    name: 'Slav Defense: Main Line',
    eco: 'D17',
    moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O', 'Qe2'],
    fen: 'rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 b - - 3 10',
    explanation: 'The main line Slav where Black takes on c4 and develops ...Bf5. White plays a4 to prevent ...b5.',
  },
  {
    name: 'Semi-Slav Defense: Meran Variation',
    eco: 'D47',
    moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'Bb7', 'O-O', 'a6'],
    fen: 'r2qkb1r/1b1n1ppp/p1p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQ1RK1 w kq - 0 11',
    explanation: 'The Meran Variation of the Semi-Slav. Black expands on the queenside with ...b5 and ...a6.',
  },

  // ============================================
  // KING'S INDIAN DEFENSE
  // ============================================
  {
    name: "King's Indian Defense: Classical Main Line",
    eco: 'E99',
    moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'e5', 'd5', 'Nbd7', 'Bg5', 'h6', 'Bh4', 'g5', 'Bg3', 'Nh5'],
    fen: 'r1bq1rk1/pppn1pb1/3p3p/3Pp1pn/2P1P3/2N2NB1/PP2BPPP/R2QK2R w KQ - 2 12',
    explanation: 'The Classical King\'s Indian with the bayonet attack avoided. Black plays ...g5 and ...Nh5 to attack the bishop and prepare ...f5.',
  },
  {
    name: "King's Indian Defense: Mar del Plata",
    eco: 'E97',
    moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'e5', 'd5', 'Nbd7', 'O-O', 'Nc5', 'Qc2', 'a5', 'Bg5', 'h6', 'Bh4', 'g5', 'Bg3', 'Nh5'],
    fen: 'r1bq1rk1/1pp2pb1/3p3p/p1nPp1pn/2P1P3/2N2NB1/PPQBBPPP/R4RK1 w - - 2 14',
    explanation: 'The Mar del Plata Variation - the most famous King\'s Indian line. Black attacks on the kingside with ...f5 while White plays on the queenside.',
  },
  {
    name: "King's Indian Defense: Sämisch Variation",
    eco: 'E81',
    moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'f3', 'O-O', 'Be3', 'e5', 'd5', 'Nh5', 'Qd2', 'Qh4+', 'g3', 'Qe7', 'O-O-O'],
    fen: 'rnb2rk1/ppp1qpbp/3p2p1/3Pp2n/2P1P3/2N1BPP1/PP1Q3P/2KR1BNR b - - 2 11',
    explanation: 'The Sämisch with f3 reinforces e4 but weakens the kingside. Often leads to opposite-side castling and mutual attacks.',
  },

  // ============================================
  // CARO-KANN DEFENSE
  // ============================================
  {
    name: 'Caro-Kann Defense: Classical Main Line',
    eco: 'B18',
    moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Bf5', 'Ng3', 'Bg6', 'h4', 'h6', 'Nf3', 'Nd7', 'h5', 'Bh7', 'Bd3', 'Bxd3', 'Qxd3'],
    fen: 'r2qkbnr/pp1nppp1/2p4p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R b KQkq - 0 10',
    explanation: 'The Classical Caro-Kann. After ...Bf5, White chases the bishop with Ng3-h4-h5. Black gets a solid but somewhat passive position.',
  },
  {
    name: 'Caro-Kann Defense: Advance Variation',
    eco: 'B12',
    moves: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'O-O', 'Nc6', 'c3', 'cxd4', 'cxd4', 'Nge7', 'Nc3'],
    fen: 'r2qkb1r/pp2nppp/2n1p3/3pPb2/3P4/2N2N2/PP2BPPP/R1BQ1RK1 b kq - 1 10',
    explanation: 'The Advance Variation with e5. White gains space but Black targets the d4 pawn. A strategic battleground.',
  },

  // ============================================
  // FRENCH DEFENSE
  // ============================================
  {
    name: 'French Defense: Winawer Main Line',
    eco: 'C18',
    moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4', 'e5', 'c5', 'a3', 'Bxc3+', 'bxc3', 'Ne7', 'Qg4', 'O-O', 'Bd3', 'Nbc6', 'Qh5', 'Ng6', 'Nf3', 'Qc7'],
    fen: 'r1b2rk1/ppq2ppp/2n1p1n1/2ppP2Q/3P4/P1PB1N2/2P2PPP/R1B1K2R w KQ - 5 11',
    explanation: 'The Winawer main line. Black gives up the bishop pair but damages White\'s pawn structure. Sharp and theoretical.',
  },
  {
    name: 'French Defense: Classical Steinitz',
    eco: 'C14',
    moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'e5', 'Nfd7', 'Bxe7', 'Qxe7', 'f4', 'O-O', 'Nf3', 'c5', 'Qd2', 'Nc6', 'O-O-O'],
    fen: 'r1b2rk1/pp1nqppp/2n1p3/2ppP3/3P1P2/2N2N2/PPPQ2PP/2KR1B1R b - - 3 10',
    explanation: 'The Classical Steinitz with opposite-side castling. White attacks on the kingside, Black on the queenside.',
  },
  {
    name: 'French Defense: Tarrasch Open',
    eco: 'C07',
    moves: ['e4', 'e6', 'd4', 'd5', 'Nd2', 'c5', 'exd5', 'Qxd5', 'Ngf3', 'cxd4', 'Bc4', 'Qd6', 'O-O', 'Nf6', 'Nb3', 'Nc6', 'Nbxd4', 'Nxd4', 'Nxd4'],
    fen: 'r1b1kb1r/pp3ppp/3qpn2/8/2BN4/8/PPP2PPP/R1BQ1RK1 b kq - 0 10',
    explanation: 'The Tarrasch Open where Black recaptures with the queen. White has a slight initiative but Black has no weaknesses.',
  },

  // ============================================
  // ENGLISH OPENING
  // ============================================
  {
    name: 'English Opening: Symmetrical Main Line',
    eco: 'A30',
    moves: ['c4', 'c5', 'Nf3', 'Nf6', 'Nc3', 'Nc6', 'g3', 'g6', 'Bg2', 'Bg7', 'O-O', 'O-O', 'd3', 'd6', 'Rb1', 'a6', 'a3', 'Rb8', 'b4'],
    fen: '1rbq1rk1/1p2ppbp/p1np1np1/2p5/1PP5/P1NP1NP1/4PPBP/1RBQ1RK1 b - - 0 10',
    explanation: 'The Symmetrical English where both sides fianchetto. White expands on the queenside with b4.',
  },
  {
    name: 'English Opening: Reversed Sicilian',
    eco: 'A20',
    moves: ['c4', 'e5', 'Nc3', 'Nf6', 'Nf3', 'Nc6', 'g3', 'Bb4', 'Bg2', 'O-O', 'O-O', 'e4', 'Ng5', 'Bxc3', 'bxc3', 'Re8', 'd3'],
    fen: 'r1bqr1k1/pppp1ppp/2n2n2/6N1/2P1p3/2PP2P1/P3PPBP/R1BQ1RK1 b - - 0 9',
    explanation: 'The Reversed Sicilian where White plays a Sicilian with an extra tempo. Black pushes ...e4 to disrupt.',
  },

  // ============================================
  // NIMZO-INDIAN DEFENSE
  // ============================================
  {
    name: 'Nimzo-Indian Defense: Classical Main Line',
    eco: 'E32',
    moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'Qc2', 'O-O', 'a3', 'Bxc3+', 'Qxc3', 'd5', 'Nf3', 'dxc4', 'Qxc4', 'b6', 'Bg5', 'Ba6', 'Qa4', 'h6', 'Bh4'],
    fen: 'rn1q1rk1/p1p2pp1/bp2pn1p/8/Q2P3B/P4N2/1P2PPPP/R3KB1R b KQ - 3 11',
    explanation: 'The Classical Nimzo with Qc2. White avoids doubled pawns but Black gets active piece play.',
  },
  {
    name: 'Nimzo-Indian Defense: Rubinstein Variation',
    eco: 'E43',
    moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'e3', 'O-O', 'Bd3', 'd5', 'Nf3', 'c5', 'O-O', 'dxc4', 'Bxc4', 'Nbd7', 'Qe2', 'b6'],
    fen: 'r1bq1rk1/p2n1ppp/1p2pn2/2p5/2BP4/2N1PN2/PP2QPPP/R1B2RK1 w - - 0 10',
    explanation: 'The Rubinstein Variation with e3. Leads to strategic positions where Black aims to exchange the dark-squared bishop.',
  },

  // ============================================
  // GRÜNFELD DEFENSE
  // ============================================
  {
    name: 'Grünfeld Defense: Exchange Main Line',
    eco: 'D85',
    moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5', 'cxd5', 'Nxd5', 'e4', 'Nxc3', 'bxc3', 'Bg7', 'Nf3', 'c5', 'Be3', 'Qa5', 'Qd2', 'O-O', 'Rc1'],
    fen: 'rnb2rk1/pp2ppbp/6p1/q1p5/3PP3/2P1BN2/P2Q1PPP/2R1KB1R b K - 3 10',
    explanation: 'The Exchange Grünfeld. White has a big center but Black pressures it with ...c5, ...Nc6, and the g7 bishop.',
  },
  {
    name: 'Grünfeld Defense: Russian System',
    eco: 'D97',
    moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5', 'Nf3', 'Bg7', 'Qb3', 'dxc4', 'Qxc4', 'O-O', 'e4', 'a6', 'Be2', 'b5', 'Qb3', 'Nc6', 'e5'],
    fen: 'r1bq1rk1/2p1ppbp/p1n2np1/1p2P3/3P4/1QN2N2/PP2BPPP/R1B1K2R b KQ - 0 10',
    explanation: 'The Russian System with Qb3. White grabs space with e4-e5 while Black has queenside counterplay.',
  },
]

// Get all deep openings
export function getDeepOpenings(): Opening[] {
  return deepOpenings
}

// Get deep openings by category
export function getDeepOpeningsByCategory(): Record<string, Opening[]> {
  const categories: Record<string, Opening[]> = {
    'London System': [],
    'Italian Game': [],
    'Ruy Lopez': [],
    'Sicilian Defense': [],
    "Queen's Gambit": [],
    "King's Indian": [],
    'Caro-Kann': [],
    'French Defense': [],
    'English Opening': [],
    'Nimzo-Indian': [],
    'Grünfeld': [],
  }

  for (const opening of deepOpenings) {
    for (const category of Object.keys(categories)) {
      if (opening.name.includes(category) || opening.name.startsWith(category.split(' ')[0])) {
        categories[category].push(opening)
        break
      }
    }
  }

  return categories
}
