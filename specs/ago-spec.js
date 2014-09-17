describe("Timehaze.ago function", function() {
  var th = require('../timehaze.js');
  var res, comparison = new Date(2000, 0, 1, 0, 0, 0);

  it("should return 'now'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("now");
  });
});


