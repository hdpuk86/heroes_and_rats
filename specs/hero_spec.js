var assert = require('assert');
var Hero = require('../hero.js');
// var Task = require('../task.js');

describe("Hero", function(){

  beforeEach(function(){
    hero = new Hero("Hayley", 3000, "Cheese");
    // task = new Task("Complete task tests", 3, 1, 10);
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

});
