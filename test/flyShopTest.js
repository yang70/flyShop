var expect = require('chai').expect;
var FlyShop = require('../lib/flyShop');

describe('The Fly Shop', function(){
  it('should have a name', function(){
    var shop = new FlyShop('Downtown');
    expect(shop.location).to.equal('Downtown');
  });

  it('should be able to stock inventory', function(){
    var shop = new FlyShop('Downtown');
    shop.stockInventory();
    expect(shop.rods).to.equal(50);
    expect(shop.reels).to.equal(50);
    expect(shop.line).to.equal(50);
    expect(shop.leaders).to.equal(200);
    expect(shop.waders).to.equal(20);
    expect(shop.dryFlies).to.equal(500);
    expect(shop.wetFlies).to.equal(500);
  });

  it('should return a list of inventory', function(){
    var shop = new FlyShop('Downtown');
    var inventory = "Location: Downtown\nRods: 50\nReels: 50\nLine: 50\nLeaders: 200\nWaders: 20\nDryFlies: 500\nWetFlies: 500\n";
    shop.stockInventory();
    expect(shop.listInventory()).to.equal(inventory);
  });

  it('should be able to sell an item, return remaining', function(){
    var shop = new FlyShop('Downtown');
    shop.stockInventory();
    expect(shop.sellItem('rods', 2)).to.equal('Number of rods left: 48');
    expect(shop.sellItem('reels', 2)).to.equal('Number of reels left: 48');
    expect(shop.sellItem('line', 2)).to.equal('Amount of line left: 48');
    expect(shop.sellItem('leaders', 2)).to.equal('Number of leaders left: 198');
    expect(shop.sellItem('waders', 2)).to.equal('Number of waders left: 18');
    expect(shop.sellItem('dryFlies', 2)).to.equal('Number of dry flies left: 498');
    expect(shop.sellItem('wetFlies', 2)).to.equal('Number of wet flies left: 498');
  });
})
