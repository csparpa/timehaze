Timehaze
========

Fuzzy timestamps for Node.js

Install
-------
```bash
npm install timehaze
```

Usage examples
--------------
```js

event = new Date(2012, 0, 1, 8, 0, 0);
far_future = new Date(2567, 0, 18, 14, 1, 0);
close_past = new Date(2014, 8, 14, 21, 10, 24);

// Import module's API
var timehaze = require('timehaze');

/**
* Timedeltas
*/

// Timedeltas between two timestamps
var delta = timehaze.delta(event, far_future);
console.log(delta.ago());    // 'In more than 500 years'

// ... or with respect to current timestamp
delta = timehaze.delta(close_past);
console.log(delta.interval());    // 'Last day'

/**
* Control automatic update of timedeltas
*/

// By default, automatic timedeltas update is off
var evolving_delta = timehaze.delta(close_past, true);
timehaze.update(1500);  // Update all evolving timedeltas every 2000 millis (default is 1000)
setInterval(function(){  // print fuzzy timestamp every second and check it gets updated
  console.log(evolving_delta.ago());
}, 1000); 


/**
* Control output formatting
*/

// Tune output "beauty"
console.log(delta.ago());       // Human-readable, focusing on elapsed time: '1 day ago'
console.log(delta.interval());  // Human-readable, focusing on time span: 'Last day'
console.log(delta.calendar());  // Human-readable, focusing on calendar milestones: 'last Monday'

// Get raw data, not strings
values = delta.raw();
console.log(values);    // {
                        //   timestamp: Date(2012, 0, 1, 8, 0, 0),
                        //   comparison: Date(2012, 0, 18, 14, 1, 0),
                        //   delta: {
                        //     "years": 0,
                        //     "months": 0,
                        //     "days": 17,
                        //     "hours": 6,
                        //     "minutes": 35,
                        //     "seconds": 28
                        //   }
                        // }

// Setup custom labels for output localisation
timehaze.setFuzzyLabels({
  "ago": "fa",
  "years": "anni",
  "months": "mesi",
  "days": "giorni",
  "hours": "ore"
});
delta = timehaze.delta(event, far_future);
console.log(delta.ago());    // '17 giorni fa'
```

Test it
-------
```bash
$ grunt jasmine_node
```

License
-------
MIT license

Docs
----
Please take a look at the [wiki](https://github.com/csparpa/timehaze/wiki)

Notes
-----
* It's up to you to grant time zone consistency on the provided `Date` objects
