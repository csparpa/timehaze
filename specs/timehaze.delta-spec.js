describe("Delta objects", function(done) {
  var th = require('../timehaze.js');
  var ts = new Date();
  var evt = new Date(ts.getTime() - 9000);

  beforeEach(function(done){
    th.update();
    done();
  });

  afterEach(function(){
    th.stopUpdate();
  });

  it("should be non updatable by default", function(done) {
    var dx = th.delta(evt, ts);
    var old = dx.ago();
    var updated;
    setTimeout(function(){
      updated = dx.ago();
      expect(updated).toBe(old);
      done();
      }, 3000);
  });

  it("should be updatable if specified in the constructor", function(done) {
    var dx = th.delta(evt, ts, true);
    var old = dx.ago();
    var updated;
    setTimeout(function(){
      updated = dx.ago();
      expect(updated).not.toBe(old);
      done();
      }, 3000);
  });

  it("should be updatable if specified after construction", function(done) {
      var dx = th.delta(evt, ts);
      dx.updatable(true);
      var old = dx.ago();
      var updated;
      setTimeout(function(){
          updated = dx.ago();
          expect(updated).not.toBe(old);
          done();
      }, 3000);
  });

  it("should be updatable at a custom frequency", function(done) {
    th.update(2000);
    var dx = th.delta(evt, ts, true);
    var old = dx.ago();
    var updated;
    setTimeout(function(){
      updated = dx.ago();
      expect(updated).not.toBe(old);
      done();
      }, 3000);
  });
});
