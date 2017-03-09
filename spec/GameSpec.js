describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  describe("when initialized", function(){

    it("has an array for players", function() {
      expect(game._players).toEqual(jasmine.any(Array));
      expect(game._players.length).toEqual(2);
    });

    it("sets a currentPlayer attribute", function(){
      expect(game.currentPlayer).toEqual(game._players[0]);
    });

    it("has a grid object", function(){
      expect(game.grid).toEqual(jasmine.any(Grid));
    });

    it("has a numberofTurns attribute", function(){
      expect(game.numberOfTurns).toEqual(0);
    });

    it("has a gameOver attribute which is set to false", function(){
      expect(game.gameOver).toEqual(false);
    });
  });


  describe("#start_game", function(){

      it("shows the empty board at the start of the game", function(){
        expect(game.startGame()).toEqual(jasmine.any(String));
      });
  });

  describe("#viewGrid", function(){

    it("returns a copy of the grid to the user", function(){
      expect(game.viewGrid()).toEqual(jasmine.any(String));
    });
  });

  describe("#takeTurn", function(){

    it("changes the selected cell content to an 'X'", function(){
      game.takeTurn(1);
      expect(game.grid.cells[1].content).toEqual('X');
    });

    it("returns a copy of the revised board", function(){
      expect(game.takeTurn(2)).toContain('X');
    });

    it("increases the numberOfTurns arrtibute by one", function(){
      game.takeTurn(3);
      expect(game.numberOfTurns).toEqual(1);
    });
  });

  describe("#switchPlayer", function(){

    it("changes the value of the currentPlayer attribute", function(){
      game.switchPlayer();
      expect(game.currentPlayer).toEqual(game._players[1]);
    });
  });

  describe("#checkStatus", function(){

    it("sets the gameOver attribute to true", function(){
      for (var i = 0; i < 9; i++) {
        game.takeTurn(i);
      }
      expect(game.gameOver).toEqual(true);
    });
  });
});
