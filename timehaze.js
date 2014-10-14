/**
* Timehaze.js
*/

"use strict";


/**
* Import modules
*/
var emitter = new (require('events').EventEmitter)()
emitter.setMaxListeners(0);

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


// Update timedeltas every milliseconds..
var updateMillis = 1000;

// Use these labels for fuzzy timestamps formatting
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
  "weeks": "weeks",
  "week": "week",
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
  "a": "a",
  "an": "an",
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
  "few": "a few",
  "long": "a long time",
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


/**
* Properties
*/

this.fuzzyLabels = fuzzyLabels;
this.updateMillis = updateMillis;

this.interval = setInterval(function(){
  emitter.emit('updateFuzzyTimestamp');
}, this.updateMillis);

/**
* Objects
*/
function Delta(_eventDate, _timestamp, _updatable) {

  var eventDate = _eventDate;  // pivot date
  var updatable = false;
  var timestamp = new Date();

  if (typeof _timestamp === "object") {
    if (typeof _updatable === "boolean") {
      updatable = _updatable;
    }
    timestamp = _timestamp;
  }
  else {
    if (typeof _timestamp === "boolean") {
      updatable = Boolean(_timestamp);
    }
    else {
      throw new Error("Wrong arguments");
    }
  }

  emitter.on('updateFuzzyTimestamp', function() {
    if(updatable) {
      timestamp = new Date();
    }
  });

  this.updatable = function(value) {
    updatable = value;
  }

  function turnToAgoFormat(timedelta, fuzzyLabel){
    if(timedelta > 0){
      return fuzzyLabel + " " + fuzzyLabels["ago"];
    }
    return fuzzyLabels["in"] + " " + fuzzyLabel;
  }

  function turnToIntervalFormat(timedelta, fuzzyLabel){
    if(timedelta > 0){
      return fuzzyLabels["last"] + " " + fuzzyLabel;
    }
    return fuzzyLabels["next"] + " " + fuzzyLabel;
  }

  function turnOneDaySpanToCalendarFormat(timedelta){
      if(timestamp.getDay() !== eventDate.getDay()){
          if(timedelta > 0) {
              return fuzzyLabels["yesterday"];
          }
          else{
              return fuzzyLabels["tomorrow"];
          }
      }
      else {
          return turnToIntervalFormat(timedelta, fuzzyLabels["hours"]);
      }
  }

  function turnWeekToCalendarFormat(timedelta, eventDateDay){
      var result;
      if(timedelta > 0){
          result = fuzzyLabels["last"] + " ";
      }
      else{
          result = fuzzyLabels["next"] + " ";
      }
      switch(eventDateDay) {
          case 0:
              result += fuzzyLabels["sunday"];
              break;
          case 1:
              result += fuzzyLabels["monday"];
              break;
          case 2:
              result += fuzzyLabels["tuesday"];
              break;
          case 3:
              result += fuzzyLabels["wednesday"];
              break;
          case 4:
              result += fuzzyLabels["thursday"];
              break;
          case 5:
              result += fuzzyLabels["friday"];
              break;
          case 6:
              result += fuzzyLabels["saturday"];
              break;
          default:
              throw new Error("Impossible to assign a fuzzy label");
      }
      return result;
  }

  function turnMonthToCalendarFormt(timedelta, eventDateMonth){
      var result;
      if(timedelta > 0){
          result = fuzzyLabels["last"] + " ";
      }
      else{
          result = fuzzyLabels["next"] + " ";
      }
      switch(eventDateMonth) {
          case 0:
              result += fuzzyLabels["january"];
              break;
          case 1:
              result += fuzzyLabels["february"];
              break;
          case 2:
              result += fuzzyLabels["march"];
              break;
          case 3:
              result += fuzzyLabels["april"];
              break;
          case 4:
              result += fuzzyLabels["may"];
              break;
          case 5:
              result += fuzzyLabels["june"];
              break;
          case 6:
              result += fuzzyLabels["july"];
              break;
          case 7:
              result += fuzzyLabels["august"];
              break;
          case 8:
              result += fuzzyLabels["september"];
              break;
          case 9:
              result += fuzzyLabels["october"];
              break;
          case 10:
              result += fuzzyLabels["november"];
              break;
          case 11:
              result += fuzzyLabels["december"];
              break;
          default:
              throw new Error("Impossible to assign a fuzzy label");
      }
      return result;
  }


  this.ago =  function(){
    var dx = timestamp.getTime()/1000.0 - eventDate.getTime()/1000.0;
    var adx = Math.abs(dx);
    var output = "";
    
    // assign fuzzy labels
    if(adx < 10){  // now
      output += fuzzyLabels["now"];
      return output;
    }
    else if(adx < 30){  // moments
      return turnToAgoFormat(dx, fuzzyLabels["moments"]);
    }
    else if(adx < 2*MINUTE){ // a minute
      return turnToAgoFormat(dx, fuzzyLabels["a"]+" "+fuzzyLabels["minute"]);
    }
    else if(adx < 15*MINUTE){  // a few minutes
      return turnToAgoFormat(dx, fuzzyLabels["few"]+" "+fuzzyLabels["minutes"]);
    }
    else if(adx < 45*MINUTE){  // half an hour
      return turnToAgoFormat(dx, fuzzyLabels["half"]+" "+fuzzyLabels["an"]+" "+fuzzyLabels["hour"]);
    }
    else if(adx < 60*MINUTE){  // almost an hour
      return turnToAgoFormat(dx, fuzzyLabels["almost"]+" "+fuzzyLabels["an"]+" "+fuzzyLabels["hour"]);
    }
    else if(adx < 2*HOUR){  // an hour
      return turnToAgoFormat(dx, fuzzyLabels["an"]+" "+fuzzyLabels["hour"]);
    }
    else if(adx < 9*HOUR){  // a few hours
      return turnToAgoFormat(dx, fuzzyLabels["few"]+" "+fuzzyLabels["hours"]);
    }
    else if(adx < 12*HOUR){  // almost half a day
      return turnToAgoFormat(dx, fuzzyLabels["almost"]+" "+fuzzyLabels["half"]+" "+fuzzyLabels["a"]+" "+fuzzyLabels["day"]);
    }
    else if(adx < 18*HOUR){  // half a day
      return turnToAgoFormat(dx, fuzzyLabels["half"]+" "+fuzzyLabels["a"]+" "+fuzzyLabels["day"]);
    }
    else if(adx < 2*DAY){  // a day
      return turnToAgoFormat(dx, fuzzyLabels["a"]+" "+fuzzyLabels["day"]);
    }
    else if(adx < 5*DAY){  // a few days
      return turnToAgoFormat(dx, fuzzyLabels["few"]+" "+fuzzyLabels["days"]);
    }
    else if(adx < 7*DAY){  // almost a week
      return turnToAgoFormat(dx, fuzzyLabels["almost"]+" "+fuzzyLabels["a"]+" "+fuzzyLabels["week"]);
    }
    else if(adx < 14*DAY){  // a week
      return turnToAgoFormat(dx, fuzzyLabels["a"]+" "+fuzzyLabels["week"]);
    }
    else if(adx < 21*DAY){  // a few weeks
      return turnToAgoFormat(dx, fuzzyLabels["few"]+" "+fuzzyLabels["weeks"]);
    }
    else if(adx < MONTH){  // almost a month
      return turnToAgoFormat(dx, fuzzyLabels["almost"]+" "+fuzzyLabels["a"]+" "+fuzzyLabels["month"]);
    }
    else if(adx < 2*MONTH){  // a month
      return turnToAgoFormat(dx, fuzzyLabels["a"]+" "+fuzzyLabels["month"]);
    }
    else if(adx < 9*MONTH){  // a few months
      return turnToAgoFormat(dx, fuzzyLabels["few"]+" "+fuzzyLabels["months"]);
    }
    else if(adx < YEAR){  // almost a year
      return turnToAgoFormat(dx, fuzzyLabels["almost"]+" "+fuzzyLabels["a"]+" "+fuzzyLabels["year"]);
    }
    else if(adx < 2*YEAR){  // a year
      return turnToAgoFormat(dx, fuzzyLabels["a"]+" "+fuzzyLabels["year"]);
    }
    else if(adx < 8*YEAR){  // a few years
      return turnToAgoFormat(dx, fuzzyLabels["few"]+" "+fuzzyLabels["years"]);
    }
    else if(adx < DECADE){  // almost a decade
      return turnToAgoFormat(dx, fuzzyLabels["almost"]+" "+fuzzyLabels["a"]+" "+fuzzyLabels["decade"]);
    }
    else if(adx < 2*DECADE){  // almost a decade
      return turnToAgoFormat(dx, fuzzyLabels["a"]+" "+fuzzyLabels["decade"]);
    }
    else if(adx >= 2*DECADE){  // a long time
      return turnToAgoFormat(dx, fuzzyLabels["long"]);
    }
    else{
      throw new Error("Impossible to assign a fuzzy label");
    }
  };
  
  this.interval =  function(){
    var dx = timestamp.getTime()/1000.0 - eventDate.getTime()/1000.0;
    var adx = Math.abs(dx);
    var output = "";

    // assign fuzzy labels
    if(adx < 10){  // now
        output += fuzzyLabels["now"];
        return output;
    }
    else if(adx < 30){  // moments
        return turnToIntervalFormat(dx, fuzzyLabels["minute"]);
    }
    else if(adx < 2*MINUTE){ // a minute
        return turnToIntervalFormat(dx, fuzzyLabels["minute"]);
    }
    else if(adx < 15*MINUTE){  // a few minutes
        return turnToIntervalFormat(dx, fuzzyLabels["minutes"]);
    }
    else if(adx < 45*MINUTE){  // half an hour
        return turnToIntervalFormat(dx, fuzzyLabels["half"]+" "+fuzzyLabels["an"]+" "+fuzzyLabels["hour"]);
    }
    else if(adx < 60*MINUTE){  // almost an hour
        return turnToIntervalFormat(dx, fuzzyLabels["half"]+" "+fuzzyLabels["an"]+" "+fuzzyLabels["hour"]);
    }
    else if(adx < 2*HOUR){  // an hour
        return turnToIntervalFormat(dx, fuzzyLabels["hour"]);
    }
    else if(adx < 9*HOUR){  // a few hours
        return turnToIntervalFormat(dx, fuzzyLabels["hours"]);
    }
    else if(adx < 12*HOUR){  // almost half a day
        return turnToIntervalFormat(dx, fuzzyLabels["hours"]);
    }
    else if(adx < 18*HOUR){  // half a day
        return turnToIntervalFormat(dx, fuzzyLabels["hours"]);
    }
    else if(adx < 2*DAY){  // a day
        return turnToIntervalFormat(dx, fuzzyLabels["day"]);
    }
    else if(adx < 5*DAY){  // a few days
        return turnToIntervalFormat(dx, fuzzyLabels["days"]);
    }
    else if(adx < 7*DAY){  // almost a week
        return turnToIntervalFormat(dx, fuzzyLabels["week"]);
    }
    else if(adx < 14*DAY){  // a week
        return turnToIntervalFormat(dx, fuzzyLabels["weeks"]);
    }
    else if(adx < 21*DAY){  // a few weeks
        return turnToIntervalFormat(dx, fuzzyLabels["weeks"]);
    }
    else if(adx < MONTH){  // almost a month
        return turnToIntervalFormat(dx, fuzzyLabels["weeks"]);
    }
    else if(adx < 2*MONTH){  // a month
        return turnToIntervalFormat(dx, fuzzyLabels["month"]);
    }
    else if(adx < 9*MONTH){  // a few months
        return turnToIntervalFormat(dx, fuzzyLabels["months"]);
    }
    else if(adx < YEAR){  // almost a year
        return turnToIntervalFormat(dx, fuzzyLabels["months"]);
    }
    else if(adx < 2*YEAR){  // a year
        return turnToIntervalFormat(dx, fuzzyLabels["year"]);
    }
    else if(adx < 8*YEAR){  // a few years
        return turnToIntervalFormat(dx, fuzzyLabels["years"]);
    }
    else if(adx < DECADE){  // almost a decade
        return turnToIntervalFormat(dx, fuzzyLabels["years"]);
    }
    else if(adx < 2*DECADE){  // almost a decade
        return turnToIntervalFormat(dx, fuzzyLabels["decade"]);
    }
    else if(adx >= 2*DECADE){  // a long time
        return turnToAgoFormat(dx, fuzzyLabels["long"]);
    }
    else{
        throw new Error("Impossible to assign a fuzzy label");
    }
  };

  this.calendar =  function(){
      var dx = timestamp.getTime()/1000.0 - eventDate.getTime()/1000.0;
      var adx = Math.abs(dx);
      var output = "";

      // assign fuzzy labels
      if(adx < 10){  // now
          output += fuzzyLabels["now"];
          return output;
      }
      else if(adx < 30){  // moments
          return turnToIntervalFormat(dx, fuzzyLabels["minute"]);
      }
      else if(adx < 2*MINUTE){ // a minute
          return turnToIntervalFormat(dx, fuzzyLabels["minute"]);
      }
      else if(adx < 15*MINUTE){  // a few minutes
          return turnToIntervalFormat(dx, fuzzyLabels["minutes"]);
      }
      else if(adx < 45*MINUTE){  // half an hour
          return turnToIntervalFormat(dx, fuzzyLabels["half"]+" "+fuzzyLabels["an"]+" "+fuzzyLabels["hour"]);
      }
      else if(adx < 60*MINUTE){  // almost an hour
          return turnToIntervalFormat(dx, fuzzyLabels["half"]+" "+fuzzyLabels["an"]+" "+fuzzyLabels["hour"]);
      }
      else if(adx < 2*HOUR){  // an hour
          return turnToIntervalFormat(dx, fuzzyLabels["hour"]);
      }
      else if(adx < 9*HOUR){  // a few hours
          return turnOneDaySpanToCalendarFormat(dx);
      }
      else if(adx < 12*HOUR){  // almost half a day
          return turnOneDaySpanToCalendarFormat(dx);
      }
      else if(adx < 18*HOUR){  // half a day
          return turnOneDaySpanToCalendarFormat(dx);
      }
      else if(adx < 2*DAY){  // a day
          if(dx > 0){
              return fuzzyLabels["yesterday"];
          }
          else{
              return fuzzyLabels["tomorrow"];
          }
      }
      else if(adx < 5*DAY){  // a few days
          return turnWeekToCalendarFormat(dx, eventDate.getDay());
      }
      else if(adx < 7*DAY){  // almost a week
          if(timestamp.getMonth() !== eventDate.getMonth()){
              return turnMonthToCalendarFormt(dx, eventDate.getMonth());
          }
          else
          {
              return turnWeekToCalendarFormat(dx, eventDate.getDay());
          }
      }
      else if(adx < 14*DAY){  // a week
          if(timestamp.getMonth() !== eventDate.getMonth()){
              return turnMonthToCalendarFormt(dx, eventDate.getMonth());
          }
          else
          {
              if(dx > 0) {
                  return fuzzyLabels["last"] + " " + fuzzyLabels["weeks"];
              }
              return fuzzyLabels["next"] + " " + fuzzyLabels["weeks"];
          }
      }
      else if(adx < 21*DAY){  // a few weeks
          if(timestamp.getMonth() !== eventDate.getMonth()){
              return turnMonthToCalendarFormt(dx, eventDate.getMonth());
          }
          else
          {
              if(dx > 0) {
                  return fuzzyLabels["last"] + " " + fuzzyLabels["weeks"];
              }
              return fuzzyLabels["next"] + " " + fuzzyLabels["weeks"];
          }
      }
      else if(adx < MONTH){  // almost a month
          if(timestamp.getMonth() !== eventDate.getMonth()){
              return turnMonthToCalendarFormt(dx, eventDate.getMonth());
          }
          else
          {
              if(dx > 0) {
                  return fuzzyLabels["last"] + " " + fuzzyLabels["weeks"];
              }
              return fuzzyLabels["next"] + " " + fuzzyLabels["weeks"];
          }
      }
      else if(adx < 2*MONTH){  // a month
          return turnMonthToCalendarFormt(dx, eventDate.getMonth());
      }
      else if(adx < 9*MONTH){  // a few months
          return turnMonthToCalendarFormt(dx, eventDate.getMonth());
      }
      else if(adx < YEAR){  // almost a year
          return turnMonthToCalendarFormt(dx, eventDate.getMonth());
      }
      else if(adx < 2*YEAR){  // a year
          if(dx > 0) {
              return fuzzyLabels["last"] + " " + fuzzyLabels["year"];
          }
          return fuzzyLabels["next"] + " " + fuzzyLabels["year"];
      }
      /*
      else if(adx < 8*YEAR){  // a few years
          return turnToIntervalFormat(dx, fuzzyLabels["years"]);
      }
      else if(adx < DECADE){  // almost a decade
          return turnToIntervalFormat(dx, fuzzyLabels["years"]);
      }
      else if(adx < 2*DECADE){  // almost a decade
          return turnToIntervalFormat(dx, fuzzyLabels["decade"]);
      }
      else if(adx >= 2*DECADE){  // a long time
          return turnToAgoFormat(dx, fuzzyLabels["long"]);
      }

*/



      else{
          throw new Error("Impossible to assign a fuzzy label");
      }
  };
  
  this.raw =  function(){
    var secs = (timestamp - eventDate)/1000.0
    return JSON.stringify({
      "eventDate": eventDate,
      "timestamp": timestamp,
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

exports.delta = function(eventDate, timestamp, updatable) {
  return new Delta(eventDate, timestamp, updatable);
}

exports.update = function(how_many_millis) {
  if(typeof how_many_millis !== "undefined"){
    this.updateMillis = how_many_millis;
  }
  clearInterval(this.interval);
  this.interval = setInterval(function(){
      emitter.emit('updateFuzzyTimestamp');
    }, this.updateMillis);
}

exports.stopUpdate = function(){
  clearInterval(this.interval);
};

exports.setFuzzyLabels = function(labels) {
  for (var key in labels){
    this.fuzzyLabels[key] = labels[key];
  }
}

exports.getFuzzyLabels = function() {
  return this.fuzzyLabels;
}
