describe("Cell", function() {

  beforeEach(function() {
    cell = new Cell([1, 1]);
    cell2 = new Cell([2, 0]);
  });

  describe("when initialized", function(){

    it("should have a location attribute", function() {
      expect(cell.location).toEqual([1, 1]);
    });

    it("should have a blank content attribute", function(){
      expect(cell.content).toEqual(null);
    });
  });
});
