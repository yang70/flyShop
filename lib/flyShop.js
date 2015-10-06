var FlyShop = function(location) {
  this.location = location;
  this.rods;
  this.reels;
  this.line;
  this.leaders;
  this.waders;
  this.dryFlies;
  this.wetFlies;
};

FlyShop.prototype.stockInventory = function(){
  this.rods = 50;
  this.reels = 50;
  this.line = 50;
  this.leaders = 200;
  this.waders = 20;
  this.dryFlies = 500;
  this.wetFlies = 500;
};

FlyShop.prototype.listInventory = function(){
  var string = "";
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      string += i.capitalize() + ": " + this[i] + "\n";
    }
  }
  return string;
};

FlyShop.prototype.sellItem = function(item, amount){
  if (item == 'rods'){
    this.rods -= amount;
    return "Number of rods left: " + this.rods;
  } else if (item == 'reels'){
    this.reels -= amount;
    return "Number of reels left: " + this.reels;
  } else if (item == 'line'){
    this.line -= amount;
    return "Amount of line left: " + this.line;
  } else if (item == 'leaders'){
    this.leaders -= amount;
    return "Number of leaders left: " + this.leaders;
  } else if (item == 'waders'){
    this.waders -= amount;
    return "Number of waders left: " + this.waders;
  } else if (item == 'dryFlies'){
    this.dryFlies -= amount;
    return "Number of dry flies left: " + this.dryFlies;
  } else if (item == 'wetFlies'){
    this.wetFlies -= amount;
    return "Number of wet flies left: " + this.wetFlies;
  }
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
  // http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
};

module.exports = FlyShop;
