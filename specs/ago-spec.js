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

  it("should return '1 minute ago'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 1, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("1 minute ago");
  });

  it("should return 'in 1 minute'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 59, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in 1 minute");
  });

  it("should return 'a few minutes ago'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 10, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a few minutes ago");
  });

  it("should return 'in a few minutes'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 50, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a few minutes");
  });

});


