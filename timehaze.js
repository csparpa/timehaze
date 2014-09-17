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
var MILLENNIUM = CENTURY * 10;


/**
* Objects
*/
function Delta(_timestamp, _comparison) {
  this.timestamp = _timestamp;
  this.comparison = (typeof _comparison === "undefined") ? new Date() : _comparison;
  
  this.ago =  function(){
    console.log("Delta.ago");
  };
  
  this.interval =  function(){
    console.log("Delta.interval");
  };

  this.calendar =  function(){
    console.log("Delta.calendar");
  };
  
  this.raw =  function(){
    var secs = (this.timestamp - this.comparison)/1000.0
    return JSON.stringify({
      "timestamp": this.timestamp,
      "comparison": this.comparison,
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
  "millennia": "millennia",
  "millennium": "millennium",
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
  "now": "right now",
  "yesterday": "yesterday",
  "tomorrow": "tomorrow",
  "half": "half",
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
  "sunday": "Sunday",
  "january": "January",
  "february": "February",
  "march": "March",
  "april": "April",
  "may": "May",
  "june": "June",
  "july": "July",
  "august": "August",
  "september": "September",
  "october": "October",
  "november": "November",
  "december": "December"
};

/**
* Module exports
*/

exports.delta = function(timestamp, comparison) {
  return new Delta(timestamp, comparison);
}

exports.setFuzzyLabels = function(labels) {
  for (var key in labels){
    this.fuzzyLabels[key] = labels[key];
  }
}

exports.getFuzzyLabels = function() {
  return this.fuzzyLabels;
}
