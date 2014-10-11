describe("Timehaze.Delta.interval function", function() {
    var th = require('../timehaze.js');
    var res, eventDate = new Date(2000, 0, 1, 0, 0, 0, 0);

    it("should throw error if no fuzzy label is available", function() {
        var timestamp = new Date(9999999, 0, 1, 0, 0, 0, 0);
        function throwingError(){
            return th.delta(eventDate, timestamp).interval();
        };
        expect(throwingError).toThrow();
    });

    it("should return 'right now'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 0, 5, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("right now");
    });

    it("should return 'last minute'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 0, 15, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last minute");
    });

    it("should return 'next minute'", function() {
        var timestamp = new Date(1999, 11, 31, 23, 59, 45, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next minute");
    });

    it("should return 'last minute' again", function() {
        var timestamp = new Date(2000, 0, 1, 0, 1, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last minute");
    });

    it("should return 'next minute' again", function() {
        var timestamp = new Date(1999, 11, 31, 23, 59, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next minute");
    });

    it("should return 'last minutes'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 10, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last minutes");
    });

    it("should return 'next minutes", function() {
        var timestamp = new Date(1999, 11, 31, 23, 50, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next minutes");
    });

    it("should return 'last half an hour'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 30, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last half an hour");
    });

    it("should return 'next half an hour'", function() {
        var timestamp = new Date(1999, 11, 31, 23, 30, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next half an hour");
    });

    it("should return 'last half an hour'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 45, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last half an hour");
    });

    it("should return 'next half an hour'", function() {
        var timestamp = new Date(1999, 11, 31, 23, 15, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next half an hour");
    });

    it("should return 'last hour'", function() {
        var timestamp = new Date(2000, 0, 1, 1, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last hour");
    });

    it("should return 'next hour'", function() {
        var timestamp = new Date(1999, 11, 31, 23, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next hour");
    });

    it("should return 'last hours'", function() {
        var timestamp = new Date(2000, 0, 1, 5, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last hours");
    });

    it("should return 'next hours'", function() {
        var timestamp = new Date(1999, 11, 31, 19, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next hours");
    });

    it("should return 'last hours' again", function() {
        var timestamp = new Date(2000, 0, 1, 10, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last hours");
    });

    it("should return 'next hours' again", function() {
        var timestamp = new Date(1999, 11, 31, 14, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next hours");
    });

    it("should return 'last hours' once again", function() {
        var timestamp = new Date(2000, 0, 1, 15, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last hours");
    });

    it("should return 'next hours' once again", function() {
        var timestamp = new Date(1999, 11, 31, 9, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next hours");
    });

    it("should return 'last day'", function() {
        var timestamp = new Date(2000, 0, 2, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last day");
    });

    it("should return 'next day'", function() {
        var timestamp = new Date(1999, 11, 31, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next day");
    });

    it("should return 'last days'", function() {
        var timestamp = new Date(2000, 0, 4, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last days");
    });

    it("should return 'next days'", function() {
        var timestamp = new Date(1999, 11, 28, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next days");
    });

    it("should return 'last week'", function() {
        var timestamp = new Date(2000, 0, 6, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last week");
    });

    it("should return 'next week'", function() {
        var timestamp = new Date(1999, 11, 26, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next week");
    });

    it("should return 'last weeks'", function() {
        var timestamp = new Date(2000, 0, 10, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last weeks");
    });

    it("should return 'next weeks'", function() {
        var timestamp = new Date(1999, 11, 21, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next weeks");
    });

    it("should return 'last weeks' again", function() {
        var timestamp = new Date(2000, 0, 20, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last weeks");
    });

    it("should return 'next weeks' again", function() {
        var timestamp = new Date(1999, 11, 12, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next weeks");
    });

    it("should return 'last weeks' once again", function() {
        var timestamp = new Date(2000, 0, 25, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last weeks");
    });

    it("should return 'next weeks' once again", function() {
        var timestamp = new Date(1999, 11, 6, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next weeks");
    });

    it("should return 'last month'", function() {
        var timestamp = new Date(2000, 1, 10, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last month");
    });

    it("should return 'next month'", function() {
        var timestamp = new Date(1999, 10, 10, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next month");
    });

    it("should return 'last months'", function() {
        var timestamp = new Date(2000, 3, 10, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last months");
    });

    it("should return 'next months'", function() {
        var timestamp = new Date(1999, 9, 10, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next months");
    });

    it("should return 'last months' again", function() {
        var timestamp = new Date(2000, 10, 10, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last months");
    });

    it("should return 'next months' again", function() {
        var timestamp = new Date(1999, 1, 10, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next months");
    });

    it("should return 'last year'", function() {
        var timestamp = new Date(2001, 1, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last year");
    });

    it("should return 'next year'", function() {
        var timestamp = new Date(1998, 11, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next year");
    });

    it("should return 'last years'", function() {
        var timestamp = new Date(2005, 1, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last years");
    });

    it("should return 'next years'", function() {
        var timestamp = new Date(1995, 11, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next years");
    });

    it("should return 'last years' again", function() {
        var timestamp = new Date(2009, 1, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last years");
    });

    it("should return 'next years' again", function() {
        var timestamp = new Date(1991, 11, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next years");
    });

    it("should return 'last decade'", function() {
        var timestamp = new Date(2011, 2, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("last decade");
    });

    it("should return 'next decade'", function() {
        var timestamp = new Date(1989, 2, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("next decade");
    });

    it("should return 'a long time ago' for very big timedeltas", function() {
        var timestamp = new Date(2050, 2, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("a long time ago");
    });

    it("should return 'in a long time' for very big timedeltas", function() {
        var timestamp = new Date(1930, 2, 1, 0, 0, 0, 0);
        res = (th.delta(eventDate, timestamp)).interval();
        expect(res).toBe("in a long time");
    });

});