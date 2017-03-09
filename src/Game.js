function Game() {

  this._players = [];
  this.grid = new Grid();
}

Game.prototype.startGame = function(){
  return this.viewGrid();
};

Game.prototype.takeTurn = function(cell){
  var chosenCell = this.grid.cells[cell];
  chosenCell.content = "X";
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
