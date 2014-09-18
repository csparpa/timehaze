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
* Properties
*/

var fuzzyLabels = {
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
  "moments": "moments",
  "moment": "moment",
  "now": "right now",
  "yesterday": "yesterday",
  "tomorrow": "tomorrow",
  "half": "half an",
  "ago": "ago",
  "in": "in",
  "last": "last",
  "next": "next",
  "less": "less",
  "more": "more",
  "than": "than",
  "few": "a few",
  "lot": "a lot",
  "and": "and",
  "at": "at",
  "almost": "almost",
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
this.fuzzyLabels = fuzzyLabels;


/**
* Objects
*/
function Delta(_timestamp, _comparison) {
  this.timestamp = _timestamp;
  this.comparison = (typeof _comparison === "undefined") ? new Date() : _comparison;

  function timePrecedenceFor(timedelta, fuzzyLabel){
    if(timedelta > 0){
      return fuzzyLabel + " " + fuzzyLabels["ago"];
    }
    return fuzzyLabels["in"] + " " + fuzzyLabel;
  }
  
  this.ago =  function(){
    var dx = this.timestamp.getTime()/1000.0 - this.comparison.getTime()/1000.0;
    var output = "";
    
    // assign fuzzy labels
    if(Math.abs(dx) < 10){  // now
      output += fuzzyLabels["now"];
      return output;
    }
    else if(Math.abs(dx) < 30){  // moments
      return timePrecedenceFor(dx, fuzzyLabels["moments"]);
    }
    else if(Math.abs(dx) < 2*MINUTE){ // a minute
      return timePrecedenceFor(dx, "1 "+fuzzyLabels["minute"]);
    }
    else if(Math.abs(dx) < 15*MINUTE){  // a few minutes
      return timePrecedenceFor(dx, fuzzyLabels["few"]+" "+fuzzyLabels["minutes"]);
    }
    else if(Math.abs(dx) < 45*MINUTE){  // half an hour
      return timePrecedenceFor(dx, fuzzyLabels["half"]+" "+fuzzyLabels["hour"]);
    }
    else if(Math.abs(dx) < 60*MINUTE){  // almost an hour
      return timePrecedenceFor(dx, fuzzyLabels["almost"]+" 1 "+fuzzyLabels["hour"]);
    }
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
