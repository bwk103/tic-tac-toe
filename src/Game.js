function Game() {

  this._players = [new Player("player1"), new Player("player2")];
  this.grid = new Grid();
  this.currentPlayer = this._players[0];
}

Game.prototype.startGame = function(){
  return this.viewGrid();
};

Game.prototype.takeTurn = function(cell){
  var chosenCell = this.grid.cells[cell];
  if (this.currentPlayer == this._players[0]) {
    chosenCell.content = "X";
  } else {
    chosenCell.content = "O";
  }
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
