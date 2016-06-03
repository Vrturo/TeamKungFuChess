
// //BOARD
// //=====
// //1. board should be able to know how many players are on it
// //2. board should be able to know which piece is at a given location
// //3. board should be able to high-light a given location with a given color

// //PIECES
// //======
// //1. a piece should know what cell/where on the board it is
// //2. a piece should know what class it is
// //3. a piece should be able to interact with a board to know where it can go
// //4. a piece should know what it looks like on the board
// // class Point {
// //     constructor(x, y) {
// //         this.x = x;
// //         this.y = y;
// //     }
// //     toString() {
// //         return '(' + this.x + ', ' + this.y + ')';
// //     }
// // }
// class Piece {
//    getCode(color,class){
//     var codeSet =  {
//       //white  //black = white + 6
//       king:   9812,// = ♔
//       queen:  9813,// = ♕
//       rook:   9814,// = ♖
//       bishop: 9815,// = ♗
//       knight: 9816,// = ♘
//       pawn:   9817 // = ♙
//     };
//     var set = (color === 'white' ? 0 : 6);
//     return  codeSet[class] + set;
//   }
// }

// class Pawn extends Piece{
//   constructor (color){
//     this.color   = color;
//     this.maxMove = 1;
//     this.class   = "pawn";
//     this.code    = getCode(this.class);
//   }
// }

// class Knight extends Piece {
//   constructor (color){
//     this.color   = color;
//     this.maxMove = 3;
//     this.class   = "knight";
//     this.code    = getCode(this.class);
//   }
// }

// class Rook extends Piece {
//   constructor (color){
//     this.color   = color;
//     this.maxMove = 8;
//     this.class   = "rook";
//     this.code    = getCode(this.class);
//   }
// }

// class Bishop extends Piece {
//   constructor (color){
//     this.color   = color;
//     this.maxMove = 8;
//     this.class   = "bishop";
//     this.code    = getCode(this.class);
//   }
// }

// class Queen extends Piece {
//   constructor (color){
//     this.color   = color;
//     this.maxMove = 8;
//     this.class   = "queen";
//     this.code    = getCode(this.class);
//   }
// }

// class King extends Piece {
//   constructor (color){
//     this.color   = color;
//     this.maxMove = 1;
//     this.class   = "king";
//     this.code    = getCode(this.class);
//   }
// }


// class Board {
//   constructer (options){
//     this.board = options.board;
//     this.classes = {
//       pawn:   1,
//       knight: 2,
//       rook:   3,
//       bishop: 4,
//       queen:  5,
//       king:   6,
//     };
//     initBoard();
//   }
//   initBoard() {
//     this.board = [['w3','w2','w4','w5','w6','w4','w2','w3'], ['w1','w1','w1','w1','w1','w1','w1','w1'], [], [] ,[], [], [['b1','b1','b1','b1','b1','b1','b1','b1']], ['b3','b2','b4','b6','b5','b4','b2','b3']];
//     this.DOMBoard = $('#board');
//     //
//   }
//   viewPiece(viewCode){
//     return String.fromCharCode(viewCode);
//   }
//   renderPiece(x,y,viewCode){
//     this.DOMBoard[x][y] = viewPiece(viewCode);
//   }

// }



