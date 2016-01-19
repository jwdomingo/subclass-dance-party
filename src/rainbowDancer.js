var makeRainbowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);

makeRainbowDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  this.$node.css('border-color',colors[Math.floor(Math.random() * 7)]);
};