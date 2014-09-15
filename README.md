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

// Control output granularity
delta.granularity('hours');
console.log(delta.pretty());    // 'Yesterday at 21:10'
delta.granularity('years');
console.log(delta.pretty());    // 'This year'
delta.granularity('seconds');
console.log(delta.pretty()),    // ' Yesterday at 21:10 and 45 seconds'

// Control output "beauty"
console.log(delta.full());      // '669 years, 6 months, 8 days, 3 hours, 46 minutes, 6 seconds ago'
console.log(delta.pretty());    // Default formatting behaviour
                                // Autotunes the best formatting depending on timedelta:
                                // 'More than 600 years ago'

// Return raw data, not strings
values = delta.json();
console.log(values);    // '{
                        //    from: 1410678566,
                        //    to: 1410788694,
                        //    delta: {
                        //      "unix": 110128,
                        //      "human": {
                        //        "years": 0,
                        //        "months": 0,
                        //        "days": 1,
                        //        "hours": 6,
                        //        "minutes": 35,
                        //        "seconds": 28
                        //      }
                        //    }
                        //  }'

// Localise output
delta.labels({
  "ago": "fa",
  "in": "tra",
  "years": "anni",
  "months": "mesi",
  "days": "giorni",
  "hours": "ore",
  "minutes": "minuti",
  "seconds": "secondi",
  "less than": "meno di"
});
console.log(delta.full());    // '669 anni, 6 mesi, 8 giorni, 3 ore fa'
```
