var assert = require('assert');
var Food = require('../food.js');

//food constructor should take in a name and replenValue

describe("Food Tests", function(){
  beforeEach(function(){
    food = new Food("Cheese", 200);
  });

  it('should have a name', function(){
    assert.strictEqual(food.name, "Cheese");
  });

  it('should have a replenishment value', function(){
    assert.strictEqual(food.replenValue, 200);
  })

});
