describe("Timehaze.Delta.ago function", function() {
  var th = require('../timehaze.js');
  var res, comparison = new Date(2000, 0, 1, 0, 0, 0, 0);

  it("should return 'right now'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 0, 5, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("right now");
  });

  it("should return 'moments ago'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 0, 15, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("moments ago");
  });

  it("should return 'in moments'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 59, 45, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in moments");
  });


});


