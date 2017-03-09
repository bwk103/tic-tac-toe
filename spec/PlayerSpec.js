describe("Player", function(){

  beforeEach(function() {
    player = new Player("Bob");
  });

  describe("on initialization", function() {

    it("sets the player's name", function(){
      expect(player.name).toEqual("Bob");
    });
  });
});
