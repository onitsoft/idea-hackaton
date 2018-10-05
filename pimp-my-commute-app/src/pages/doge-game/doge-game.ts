import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DogeGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doge-game',
  templateUrl: 'doge-game.html',
})
export class DogeGamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
        const PUZZLE_DIFFICULTY = 3;
        const PUZZLE_HOVER_TINT = '#009900';

        var _stage;
        var _canvas;

        var _img;
        var _pieces;
        var _puzzleWidth;
        var _puzzleHeight;
        var _pieceWidth;
        var _pieceHeight;
        var _currentPiece;
        var _currentDropPiece;

        var _mouse;
        var _doge = 0;
        var _starbucks = 1;
        var _macdac = 2;
        var _kfc = 3;
        var _redhorse = 4;

        function initGame(){
            var _logo = Math.floor(Math.random() * Math.floor(_redhorse + 1));
            _img = new Image();
            _img.addEventListener('load',onImage,false);
            if (_logo == _starbucks) {
              _img.src = "../assets/img/starbucks.jpg";

            } else if (_logo == _doge) {
              _img.src = "../assets/img/doge_small.png";
            } else if (_logo == _macdac) {
                _img.src = "../assets/img/macdac.png";
            } else if (_logo == _kfc) {
                _img.src = "../assets/img/kfc.png";
            } else if (_logo == _redhorse) {
                _img.src = "../assets/img/redhorse.png";
            }
        }
        function onImage(e){
            _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY)
            _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY)
            _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
            _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
            setCanvas();
            initPuzzle();
        }
        function setCanvas(){
            _canvas = document.getElementById('canvas');
            _stage = _canvas.getContext('2d');
            _canvas.width = _puzzleWidth;
            _canvas.height = _puzzleHeight;
            _canvas.style.border = "1px solid black";
        }
        function initPuzzle(){
            _pieces = [];
            _mouse = {x:0,y:0};
            _currentPiece = null;
            _currentDropPiece = null;
            _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight, 0, 0, _puzzleWidth, _puzzleHeight);
            createTitle("Click to Start Puzzle");
            buildPieces();
            shufflePuzzle();
        }
        function createTitle(msg){
            _stage.fillStyle = "#000000";
            _stage.globalAlpha = .4;
            _stage.fillRect(100,_puzzleHeight - 40,_puzzleWidth - 200,40);
            _stage.fillStyle = "#FFFFFF";
            _stage.globalAlpha = 1;
            _stage.textAlign = "center";
            _stage.textBaseline = "middle";
            _stage.font = "20px Arial";
            _stage.fillText(msg,_puzzleWidth / 2,_puzzleHeight - 20);
        }
        function buildPieces(){
            var i;
            var piece;
            var xPos = 0;
            var yPos = 0;
            piece = {};
            for(i = 0;i < PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY;i++){
                piece = {};
                piece.sx = xPos;
                piece.sy = yPos;
                _pieces.push(piece);
                xPos += _pieceWidth;
                if(xPos >= _puzzleWidth){
                    xPos = 0;
                    yPos += _pieceHeight;
                }
            }
            document.onpointerdown = shufflePuzzle;
        }
        function shufflePuzzle(){
            _pieces = shuffleArray(_pieces);
            _stage.clearRect(0,0,_puzzleWidth,_puzzleHeight);
            var i;
            var piece;
            var xPos = 0;
            var yPos = 0;
            for(i = 0;i < _pieces.length;i++){
                piece = _pieces[i];
                piece.xPos = xPos;
                piece.yPos = yPos;
                _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, xPos, yPos, _pieceWidth, _pieceHeight);
                _stage.strokeRect(xPos, yPos, _pieceWidth,_pieceHeight);
                xPos += _pieceWidth;
                if(xPos >= _puzzleWidth){
                    xPos = 0;
                    yPos += _pieceHeight;
                }
            }
            }
        function shuffleArray(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }

    initGame();


  }

}
