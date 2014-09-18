describe("Timehaze.Delta.ago function", function() {
  var th = require('../timehaze.js');
  var res, comparison = new Date(2000, 0, 1, 0, 0, 0, 0);

  it("should return plain date if no fuzzy label is available", function() {
    var timestamp = new Date(9999999, 0, 1, 0, 0, 0, 0);
    function throwingError(){
      return th.delta(timestamp, comparison).ago();
    };
    expect(throwingError).toThrow();
  });

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

  it("should return 'half an hour ago'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 30, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("half an hour ago");
  });

  it("should return 'in half an hour'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 30, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in half an hour");
  });

  it("should return 'almost 1 hour ago'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 45, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("almost 1 hour ago");
  });

  it("should return 'in almost 1 hour'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 15, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in almost 1 hour");
  });

});


