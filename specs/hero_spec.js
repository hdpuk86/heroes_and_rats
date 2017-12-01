var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');

describe("Hero", function(){

  beforeEach(function(){
    hero = new Hero("Hayley", 3000, "Cheese");
    task = new Task("Complete task tests", 3, 1, 10);
    food1 = new Food("Apple", 5);
    heroFavFood = new Food("Cheese", 20);
  });

  it('should have a name', function(){
    assert.strictEqual(hero.name, "Hayley");
  });

  it('should have health', function(){
    assert.strictEqual(hero.health, 3000);
  });

  it('should have a favourite food', function(){
    assert.strictEqual(hero.favouriteFood, "Cheese");
  });

  it('should talk, saying their name', function(){
    assert.strictEqual(hero.talk(), "My name is Hayley");
  });

  it('should have a collection of tasks to complete which starts empty', function(){
    assert.strictEqual(hero.tasks.length, 0);
  });

  it('should be able to add a task to task list', function(){
    hero.addTask(task);
    assert.strictEqual(hero.tasks.length, 1);
  });

  it('should be able to eat food and their health go up by replenishment value', function(){
    // arrange
    var expected = hero.health + food1.replenValue;
    // act
    hero.eat(food1);
    // assert
    assert.strictEqual(hero.health, expected);
  });

  it('should have the health go up by 1.5 * replenValue if they eat their favourite food', function(){
    //arrange
    var replenishment = heroFavFood.replenValue * 1.5;
    var expected = hero.health + replenishment;
    //act
    hero.eat(heroFavFood);
    //assert
    assert.strictEqual(hero.health, expected);
  })

});
