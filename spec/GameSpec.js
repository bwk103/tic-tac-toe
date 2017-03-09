describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  describe("when initialized", function(){

    it("has an empty array for players", function() {
      expect(game._players).toEqual(jasmine.any(Array));
      expect(game._players.length).toEqual(0);
    });

    it("has a grid object", function(){
      expect(game.grid).toEqual(jasmine.any(Grid));
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
  });
});
