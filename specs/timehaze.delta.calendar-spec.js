describe("Timehaze.Delta.calendar function", function() {
    var th = require('../timehaze.js');
    var res, eventDate = new Date(2000, 0, 1, 0, 0, 0, 0);  // Sat

    it("should throw error if no fuzzy label is available", function() {
        var timestamp = new Date(9999999, 0, 1, 0, 0, 0, 0);
        function throwingError(){
            return th.delta(eventDate, timestamp).calendar();
        };
        expect(throwingError).toThrow();
    });

    it("should return 'right now'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 0, 5, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("right now");
    });

    it("should return 'last minute'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 0, 15, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last minute");
    });

    it("should return 'next minute'", function() {
        var timestamp = new Date(1999, 11, 31, 23, 59, 45, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("next minute");
    });

    it("should return 'last minute' again", function() {
        var timestamp = new Date(2000, 0, 1, 0, 1, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last minute");
    });

    it("should return 'next minute' again", function() {
        var timestamp = new Date(1999, 11, 31, 23, 59, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("next minute");
    });

    it("should return 'last minutes'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 10, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last minutes");
    });

    it("should return 'next minutes", function() {
        var timestamp = new Date(1999, 11, 31, 23, 50, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("next minutes");
    });

    it("should return 'last half an hour'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 30, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last half an hour");
    });

    it("should return 'next half an hour'", function() {
        var timestamp = new Date(1999, 11, 31, 23, 30, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("next half an hour");
    });

    it("should return 'last half an hour'", function() {
        var timestamp = new Date(2000, 0, 1, 0, 45, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last half an hour");
    });

    it("should return 'next half an hour'", function() {
        var timestamp = new Date(1999, 11, 31, 23, 15, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("next half an hour");
    });

    it("should return 'last hour'", function() {
        var timestamp = new Date(2000, 0, 1, 1, 0, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last hour");
    });

    it("should return 'next hour'", function() {
        var timestamp = new Date(1999, 11, 31, 23, 0, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("next hour");
    });

    it("should return 'last hours'", function() {
        var timestamp = new Date(2000, 0, 1, 5, 0, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last hours");
    });

    it("should return 'yesterday'", function() {
        var timestamp = new Date(2000, 0, 1, 5, 0, 0, 0);  // Sat
        var pivot = new Date(1999, 11, 31, 23, 0, 0);  // Fri
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("yesterday");
    });

    it("should return 'next hours'", function() {
        var timestamp = new Date(1999, 11, 31, 19, 0, 0, 0);
        var pivot = new Date(1999, 11, 31, 23, 0, 0, 0);
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("next hours");
    });

    it("should return 'tomorrow'", function() {
        var timestamp = new Date(1999, 11, 31, 19, 0, 0, 0);
        var pivot = new Date(2000, 0, 1, 1, 0, 0);
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("tomorrow");
    });

    it("should return 'last hours' again", function() {
        var timestamp = new Date(2000, 0, 1, 10, 0, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last hours");
    });

    it("should return 'yesterday' again", function() {
        var timestamp = new Date(2000, 0, 1, 5, 0, 0, 0);  // Sat
        var pivot = new Date(1999, 11, 31, 19, 0, 0);  // Fri
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("yesterday");
    });

    it("should return 'next hours' again", function() {
        var timestamp = new Date(1999, 11, 31, 13, 0, 0, 0);
        var pivot = new Date(1999, 11, 31, 23, 0, 0, 0);
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("next hours");
    });

    it("should return 'tomorrow' again", function() {
        var timestamp = new Date(1999, 11, 31, 19, 0, 0, 0);
        var pivot = new Date(2000, 0, 1, 5, 0, 0);
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("tomorrow");
    });

    it("should return 'last hours' once again", function() {
        var timestamp = new Date(2000, 0, 1, 16, 0, 0, 0);
        var res = (th.delta(eventDate, timestamp)).calendar();
        expect(res).toBe("last hours");
    });

    it("should return 'yesterday' once again", function() {
        var timestamp = new Date(2000, 0, 1, 5, 0, 0, 0);  // Sat
        var pivot = new Date(1999, 11, 31, 14, 0, 0);  // Fri
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("yesterday");
    });

    it("should return 'next hours' once again", function() {
        var timestamp = new Date(1999, 11, 31, 8, 0, 0, 0);
        var pivot = new Date(1999, 11, 31, 23, 0, 0, 0);
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("next hours");
    });

    it("should return 'tomorrow' once again", function() {
        var timestamp = new Date(1999, 11, 31, 19, 0, 0, 0);
        var pivot = new Date(2000, 0, 1, 10, 0, 0);
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("tomorrow");
    });

    it("should return 'yesterday' once again and again", function() {
        var timestamp = new Date(2000, 0, 1, 10, 0, 0);
        var pivot = new Date(1999, 11, 31, 10, 0, 0, 0);
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("yesterday");
    });

    it("should return 'tomorrow' once again and again", function() {
        var pivot = new Date(2000, 0, 1, 10, 0, 0);
        var timestamp = new Date(1999, 11, 31, 10, 0, 0, 0);
        var res = (th.delta(pivot, timestamp)).calendar();
        expect(res).toBe("tomorrow");
    });

    it("should return the last weekday", function() {
        var timestamp1 = new Date(2000, 0, 1, 10, 0, 0);  // Sat
        var timestamp2 = new Date(2000, 0, 2, 10, 0, 0);
        var timestamp3 = new Date(2000, 0, 3, 10, 0, 0);
        var pivot = new Date(1999, 11, 30, 10, 0, 0, 0); // Thursday
        var res1= (th.delta(pivot, timestamp1)).calendar();
        var res2 = (th.delta(pivot, timestamp2)).calendar();
        var res3 = (th.delta(pivot, timestamp3)).calendar();
        expect(res1).toBe("last Thursday");
        expect(res2).toBe("last Thursday");
        expect(res3).toBe("last Thursday");
    });

    it("should return the next weekday", function() {
        var timestamp1 =  new Date(1999, 11, 28, 10, 0, 0, 0);  // Sat
        var timestamp2 = new Date(1999, 11, 27, 10, 0, 0, 0);
        var timestamp3 = new Date(1999, 11, 26, 10, 0, 0, 0);
        var pivot = new Date(1999, 11, 30, 10, 0, 0, 0); // Thursday
        var res1= (th.delta(pivot, timestamp1)).calendar();
        var res2 = (th.delta(pivot, timestamp2)).calendar();
        var res3 = (th.delta(pivot, timestamp3)).calendar();
        expect(res1).toBe("next Thursday");
        expect(res2).toBe("next Thursday");
        expect(res3).toBe("next Thursday");
    });

    it("should return the last month", function() {
        var timestamp1 = new Date(2000, 0, 4, 10, 0, 0);
        var timestamp2 = new Date(2000, 0, 5, 10, 0, 0);
        var pivot = new Date(1999, 11, 30, 10, 0, 0, 0);
        var res1= (th.delta(pivot, timestamp1)).calendar();
        var res2 = (th.delta(pivot, timestamp2)).calendar();
        expect(res1).toBe("last December");
        expect(res2).toBe("last December");
    });

    it("should return the next month", function() {
        var timestamp1 =  new Date(1999, 11, 31, 10, 0, 0, 0);
        var timestamp2 = new Date(1999, 11, 30, 10, 0, 0, 0);
        var pivot = new Date(2000, 0, 5, 10, 0, 0, 0);
        var res1= (th.delta(pivot, timestamp1)).calendar();
        var res2 = (th.delta(pivot, timestamp2)).calendar();
        expect(res1).toBe("next January");
        expect(res2).toBe("next January");
    });

    it("should return the last weekday again", function() {
        var timestamp1 = new Date(1999, 11, 28, 10, 0, 0);  // Tue
        var timestamp2 = new Date(1999, 11, 29, 10, 0, 0);
        var pivot = new Date(1999, 11, 23, 10, 0, 0, 0); // Thursday
        var res1= (th.delta(pivot, timestamp1)).calendar();
        var res2 = (th.delta(pivot, timestamp2)).calendar();
        expect(res1).toBe("last Thursday");
        expect(res2).toBe("last Thursday");
    });

    it("should return the next weekday again", function() {
        var timestamp1 =  new Date(1999, 11, 25, 10, 0, 0, 0);  // Sat
        var timestamp2 = new Date(1999, 11, 24, 10, 0, 0, 0);
        var pivot = new Date(1999, 11, 30, 10, 0, 0, 0); // Thursday
        var res1= (th.delta(pivot, timestamp1)).calendar();
        var res2 = (th.delta(pivot, timestamp2)).calendar();
        expect(res1).toBe("next Thursday");
        expect(res2).toBe("next Thursday");
    });
});
