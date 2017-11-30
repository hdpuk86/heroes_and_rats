var assert = require('assert');
var Task = require('../task.js');


describe("task tests", function(){

  beforeEach(function(){
    // task should be instatiated with a description, difficulty (1-5 ?), urgency (1-5 ?), reward
    // tasks should be constructed with a complete boolean, false by default ?
    task = new Task("Complete task tests", 3, 1, 10);
  });

  // A task has a description
  it('should have a description', function(){
    assert.strictEqual(task.description, "Complete task tests");
  });

  // A task has a difficulty level
  it('should have a difficulty level', function(){
    assert.strictEqual(task.difficulty, 3);
  });

  // A task has an urgency level
  it('should have an urgency level', function(){
    assert.strictEqual(task.urgency, 1);
  });

  // A task has a reward
  it('should have a reward', function(){
    assert.strictEqual(task.reward, 10);
  });

  // A task should start as incompleted
  it('should be incomplete by default', function(){
    assert.strictEqual(task.complete, false);
  });

  // A task should be able to be marked as completed
  it('should be able to be marked complete', function(){
    assert.strictEqual(task.complete, true);
  });

});
