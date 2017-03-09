function Game() {

  this._players = [new Player("player1"), new Player("player2")];
  this.grid = new Grid();
  this.currentPlayer = this._players[0];
  this.numberOfTurns = 0;
  this.gameOver = false;
}

Game.prototype.startGame = function(){
  return this.viewGrid();
};

Game.prototype.takeTurn = function(cell){
  var chosenCell = this.grid.cells[cell];
  if (chosenCell.content !== null) {
    throw "This square has already been taken!";
  }
  if (this.currentPlayer == this._players[0]) {
    chosenCell.content = "X";
  } else {
    chosenCell.content = "O";
  }
  this.numberOfTurns += 1;
  this.switchPlayer();
  this.checkStatus();
  return this.viewGrid();
};

Game.prototype.viewGrid = function(){
  var string = "";
    string += "\t" + this.grid.cells[0].content + "|" + this.grid.cells[1].content + "|" + this.grid.cells[2].content + "\n";
    string += " \t-------------\n";
    string += "\t" + this.grid.cells[3].content + "|" + this.grid.cells[4].content + "|" + this.grid.cells[5].content + "\n";
    string += " \t-------------\n";
    string += "\t" + this.grid.cells[6].content + "|" + this.grid.cells[7].content + "|" + this.grid.cells[8].content + "\n";
  return string;
};

Game.prototype.switchPlayer = function(){
  if (this.currentPlayer == this._players[0]) {
    this.currentPlayer = this._players[1];
  } else {
    this.currentPlayer = this._players[0];
  }
};

Game.prototype.checkStatus = function(){
  if (this.numberOfTurns == 9){
    this.gameOver = true;
  }
};
