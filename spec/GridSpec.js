describe("Grid", function(){

  beforeEach(function() {
    grid = new Grid();
  });

  describe("on initialization", function(){

    it("creates an array of nine 'cell' objects", function(){
      expect(grid.cells.length).toBe(9);
    });
  });






});
