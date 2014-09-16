ago
===

Fuzzy timestamps for Node.js

Usage examples
--------------
```javascript

a_date = new Date(2012, 0, 1, 8, 0, 0);
far_future = new Date(2567, 0, 18, 14, 1, 0);
close_past = new Date(2014, 8, 14, 21, 10, 24);

// Import module's API
var ago = require('ago');

/**
* Timedeltas
*/

// Timedeltas between two timestamps
delta = ago.delta(a_date, far_future);
console.log(delta.pretty());    // 'In more than 500 years'

// ... or with respect to current timestamp
delta = ago.delta(close_past);
console.log(delta.pretty());    // 'Yesterday'

/**
* Output control
*/

// Tune output "beauty"
console.log(delta.full());      // Sharp formatting: '669 years, 6 months, 8 days, 3 hours, 46 minutes, 6 seconds ago'
console.log(delta.mixed());     // Human-readable but precise: 'More than 600 years ago'
console.log(delta.pretty());    // Default formatting behaviour, very human-readable: 'More than 6 centuries ago'

// Get raw data, not strings
values = delta.raw();
console.log(values);    // {
                        //   from: Date(2012, 0, 1, 8, 0, 0),
                        //   to: Date(2567, 0, 18, 14, 1, 0),
                        //   delta: {
                        //     "years": 0,
                        //     "months": 0,
                        //     "days": 1,
                        //     "hours": 6,
                        //     "minutes": 35,
                        //     "seconds": 28
                        //   }
                        // }

// Localise output
ago.setFuzzyLabels({
  "ago": "fa",
  "years": "anni",
  "months": "mesi",
  "days": "giorni",
  "hours": "ore"
});
delta = ago.delta(a_date, far_future);
console.log(delta.full());    // '669 anni, 6 mesi, 8 giorni, 3 ore fa'
```

Notes
-----
* It's up to you to grant time zone consistency on the provided `Date` objects
