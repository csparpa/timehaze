/**
* Timehaze.js
*/

/**
* Constants
*/

// Number of seconds in a...
var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var MONTH = DAY * 30.4166;  // 1 month = 365/12 days
var YEAR = MONTH * 12;
var DECADE = YEAR * 10;
var CENTURY = DECADE * 10;


/**
* Objects
*/
function Delta(from, to) {
  var a = from;
  var b = (typeof to === "undefined") ? new Date() : to;
  if (a < b){
    this.from = a;
    this.to = b;
  }
  else{
    this.from = b;
    this.to = a;
  }
  
  this.full =  function(){
    console.log("Delta.full");
  };
  
  this.mixed =  function(){
    console.log("Delta.mixed");
  };

  this.pretty =  function(){
    console.log("Delta.pretty");
  };
  
  this.raw =  function(){
    var secs = (this.to - this.from)/1000.0
    return JSON.stringify({
      "from": this.from,
      "to": this.to,
      "delta": {
        "centuries": secs/CENTURY,
        "decades": secs/DECADE,
        "years": secs/YEAR,
        "month": secs/MONTH,
        "days": secs/DAY,
        "hours": secs/HOUR,
        "minutes": secs/MINUTE,
        "seconds": secs
      }});
  };
}

/**
* Timehaze properties
*/

this.fuzzyLabels = {
  "infinity": "infinity",
  "centuries": "centuries",
  "century": "century",
  "decades": "decades",
  "decade": "decade",
  "years": "years",
  "year": "year",
  "months": "months",
  "month": "month",
  "days": "days",
  "day": "day",
  "hours": "hours",
  "hour": "hour",
  "minutes": "minutes",
  "minute": "minute",
  "seconds": "seconds",
  "second": "second",
  "now": "now",
  "yesterday": "yesterday",
  "tomorrow": "tomorrow",
  "ago": "ago",
  "in": "in",
  "last": "last",
  "next": "next",
  "less": "less",
  "more": "more",
  "than": "than",
  "a few": "a few",
  "a lot": "a lot",
  "and": "and",
  "at": "at",
  "about": "about",
  "monday": "Monday",
  "tuesday": "Tuesday",
  "wednesday": "Wednesday",
  "thursday": "Thursday",
  "friday": "Friday",
  "saturday": "Saturday",
  "sunday": "Sunday"
};

this.mergeFuzzyLabels = function(newLabels){
  for (var key in newLabels){
    this.fuzzyLabels[key] = newLabels[key];
  }
};

/**
* Module exports
*/
exports.delta = function(from, to) {
  return new Delta(from, to);
}

exports.setFuzzyLabels = function(labels) {
  this.mergeFuzzyLabels(labels);
}

exports.getFuzzyLabels = function() {
  return this.fuzzyLabels;
}
