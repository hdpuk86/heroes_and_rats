var Hero = function(name, health, fav_food){
  this.name = name;
  this.health = health;
  this.favouriteFood = fav_food;
  this.tasks = [];
};

Hero.prototype = {
  talk: function(){
    return "My name is " + this.name;
  },
  addTask: function(task){
    this.tasks.push(task);
  },
  eat: function(food){
    if(food.name === this.favouriteFood){
      this.health += food.replenValue * 1.5;
    } else {
      this.health += food.replenValue;
    }
  }
};

module.exports = Hero;
