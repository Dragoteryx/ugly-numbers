# ugly-numbers
A broken number class that only uses booleans. Because I can. Also it's not signed. However you can use them along with normal numbers just fine.

# How to use?
```js
const {UglyNumber8} = require("ugly-numbers");

let seven = UglyNumber8(7); // encodes the number 7 using 8 ugly bits
```
## How to choose the number of bits?
```js
const {UglyNumber} = require("ugly-numbers");

const UglyNumber53 = UglyNumber(53);

let seven = UglyNumber53(7); // encodes the number 7 using 53 ugly bits
```
# Why?
Because I just noticed that `true+true === 2` so I wanted to write an ugly number class using only booleans. Because why not?
