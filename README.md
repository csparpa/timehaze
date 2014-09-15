ago
===

Human-friendly timedeltas for Node.js

Usage examples
--------------
```javascript

a_date = new Date(2012, 0, 1, 8, 0, 0);
far_future = new Date(2567, 0, 18, 14, 1, 0);
far_past = new Date(1345, 6, 9, 21, 10, 24);

// Import module's API
var ago = require('ago');

/**
* Timedeltas
*/

// Timedeltas between two timestamps
delta = ago.delta(a_date, far_future);
console.log(delta);    // '555 years, 17 days, 6 hours, 1 minute'

// ... or with respect to current timestamp
delta = ago.delta(far_past);
console.log(delta);    // '669 years, 6 months, 8 days, 3 hours, 46 minutes, 6 seconds'

/**
* Output control
*/

// Control output granularity
delta.granularity('hours');
console.log(delta);    // '669 years, 6 months, 8 days, 3 hours'
delta.granularity('years');
console.log(delta);    // '669 years'

// Control output time units
console.log(delta.full());      // Equals to: console.log(delta)
console.log(delta.years());     // '669.5 years'
console.log(delta.months());    // '8,034 months'
console.log(delta.optimal());   // Autotunes the best formatting depending on timedelta:
                                // '669 years, 6 months'

// Return raw data, not strings
values = delta.json();
console.log(values);    // '{
                        //    "unix": 17430260490422,
                        //    "human": {
                        //      "years": 669,
                        //      "months": 6,
                        //      "days": 8,
                        //      "hours": 3,
                        //      "minutes": 0,
                        //      "seconds": 0
                        //    }
                        //  }'

// Localise output
delta.labels({
  "years": "anni",
  "months": "mesi",
  "days": "giorni",
  "hours": "ore",
  "minutes": "minuti",
  "seconds": "secondi"
});
console.log(delta);    // '669 anni, 6 mesi, 8 giorni, 3 ore'
delta.labels();        // defaults to English

/**
* Extras
*/

// Add words to create countups/countdowns
delta.withCounting(true);
console.log(delta.optimal())  // 'in 669 years, 6 months'
delta.withCountDown(true, 'this will happen not before');
console.log(delta.optimal())  // 'this will happen not before 669 years, 6 months'

delta = ago.delta(far_past, a_date)
delta.withCounting(true)
console.log(delta.optimal())  // '667 years, 5 months ago'


```
