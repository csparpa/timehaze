describe("Timehaze module", function() {
  var th = require('../timehaze.js');
  var ts = new Date();
  var evt = new Date(ts.getTime() - 1000);

  it("should not update non updatable timedeltas", function(done) {
    var dx = th.delta(evt, ts, false);
    var old = dx.ago();
    var _new;
    setTimeout(function() {
      _new = dx.ago();
      expect(_new).toBe(old);
      done();
    }, 3000);
  });

  clearInterval(th.interval);
});
