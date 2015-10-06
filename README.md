# Fly Shop - An Object Oriented Programming Exercise in JavaScript

By [Matthew Yang](http://www.matthewgyang.com).

## Description
This is a practice/demonstration repository to practice JavaScript and object oriented modeling by creating a representation of a Fly Fishing shop.

Objects are created via an object constructor function called `FlyShop`, which takes an initial argument of a location.  There are then 3 functions that are added via `Prototype`:

```javascript
FlyShop.prototype.functionName = function(){
  // code to execute
};
```

The three functions are:

* `FlyShop.prototype.stockInventory` - This function restocks the number of items in the object to their original amount.

* `FlyShop.prototype.listInventory` - This function iterates the objects properties and creates a string listing the item and amount remaining on their own lines.  I also added a prototype to string in order to capitalize the first letter (see citation for source).  This works well except for the `dryFlies` and `wetFlies`, due to their variable names.

* `FlyShop.prototype.sellItem` - This function takes an item and reduces the amount remaining of that item by amount entered.  This is very ugly code at this time and I need to DRY it up, however I am just getting it working at this point.

##Testing
BDD testing implemented through [npm](https://www.npmjs.com), specifically [Mocha](https://mochajs.org) and the [Chai](http://chaijs.com) assertion library.

##Sources
For the `String.prototype.capital` code, I referenced this [Stack Overflow](http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript) answer.
