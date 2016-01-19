var makeFatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeFatDancer.prototype = Object.create(makeDancer.prototype);

makeFatDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggleClass('fat-dancer');
};