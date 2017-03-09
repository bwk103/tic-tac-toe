describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  describe("when initialized", function(){

    it("should initialize with an empty array for players", function() {
      expect(game._players).toEqual(jasmine.any(Array));
      expect(game._players.length).toEqual(0);
    });
  });
});
