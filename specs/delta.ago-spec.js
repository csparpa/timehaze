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

  it("should return 'a minute ago'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 1, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a minute ago");
  });

  it("should return 'in a minute'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 59, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a minute");
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

  it("should return 'almost an hour ago'", function() {
    var timestamp = new Date(2000, 0, 1, 0, 45, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("almost an hour ago");
  });

  it("should return 'in almost an hour'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 15, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in almost an hour");
  });

  it("should return 'an hour ago'", function() {
    var timestamp = new Date(2000, 0, 1, 1, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("an hour ago");
  });

  it("should return 'in an hour'", function() {
    var timestamp = new Date(1999, 11, 31, 23, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in an hour");
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

  it("should return 'almost a month ago'", function() {
    var timestamp = new Date(2000, 0, 25, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("almost a month ago");
  });

  it("should return 'in almost a month'", function() {
    var timestamp = new Date(1999, 11, 6, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in almost a month");
  });

  it("should return 'a month ago'", function() {
    var timestamp = new Date(2000, 1, 10, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a month ago");
  });

  it("should return 'in a month'", function() {
    var timestamp = new Date(1999, 10, 10, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a month");
  });

  it("should return 'a few months ago'", function() {
    var timestamp = new Date(2000, 3, 10, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a few months ago");
  });

  it("should return 'in a few months'", function() {
    var timestamp = new Date(1999, 9, 10, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a few months");
  });

  it("should return 'almost a year ago'", function() {
    var timestamp = new Date(2000, 10, 10, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("almost a year ago");
  });

  it("should return 'in almost a year'", function() {
    var timestamp = new Date(1999, 1, 10, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in almost a year");
  });

  it("should return 'a year ago'", function() {
    var timestamp = new Date(2001, 1, 1, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a year ago");
  });

  it("should return 'in a year'", function() {
    var timestamp = new Date(1998, 11, 1, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a year");
  });

  it("should return 'a few years ago'", function() {
    var timestamp = new Date(2005, 1, 1, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("a few years ago");
  });

  it("should return 'in a few years'", function() {
    var timestamp = new Date(1995, 11, 1, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in a few years");
  });

  it("should return 'almost a decade ago'", function() {
    var timestamp = new Date(2009, 1, 1, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("almost a decade ago");
  });

  it("should return 'in almost a decade'", function() {
    var timestamp = new Date(1991, 11, 1, 0, 0, 0, 0);
    res = (th.delta(timestamp, comparison)).ago();
    expect(res).toBe("in almost a decade");
  });

});


