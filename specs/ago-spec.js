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

  it("should return '1 hour ago'", function() {
    var timestamp = new Date(2000, 0, 1, 1, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("1 hour ago");
  });

  it("should return 'in 1 hour'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in 1 hour");
  });

  it("should return 'a few hours ago'", function() {
    var timestamp = new Date(2000, 0, 1, 5, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a few hours ago");
  });

  it("should return 'in a few hours'", function() {
    var timestamp = new Date(1999, 11, 31, 19, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a few hours");
  });

  it("should return 'almost half a day ago'", function() {
    var timestamp = new Date(2000, 0, 1, 10, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("almost half a day ago");
  });

  it("should return 'in almost half a day'", function() {
    var timestamp = new Date(1999, 11, 31, 14, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in almost half a day");
  });

  it("should return 'half a day ago'", function() {
    var timestamp = new Date(2000, 0, 1, 15, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("half a day ago");
  });

  it("should return 'in half a day'", function() {
    var timestamp = new Date(1999, 11, 31, 9, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in half a day");
  });

  it("should return 'a day ago'", function() {
    var timestamp = new Date(2000, 0, 2, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a day ago");
  });

  it("should return 'in a day'", function() {
    var timestamp = new Date(1999, 11, 31, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a day");
  });

  it("should return 'a few days ago'", function() {
    var timestamp = new Date(2000, 0, 4, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a few days ago");
  });

  it("should return 'in a few days'", function() {
    var timestamp = new Date(1999, 11, 28, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a few days");
  });

  it("should return 'almost a week ago'", function() {
    var timestamp = new Date(2000, 0, 6, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("almost a week ago");
  });

  it("should return 'in almost a week'", function() {
    var timestamp = new Date(1999, 11, 26, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in almost a week");
  });

  it("should return 'a week ago'", function() {
    var timestamp = new Date(2000, 0, 10, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a week ago");
  });

  it("should return 'in a week'", function() {
    var timestamp = new Date(1999, 11, 21, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a week");
  });

  it("should return 'a few weeks ago'", function() {
    var timestamp = new Date(2000, 0, 20, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a few weeks ago");
  });

  it("should return 'in a few weeks'", function() {
    var timestamp = new Date(1999, 11, 12, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a few weeks");
  });

});


