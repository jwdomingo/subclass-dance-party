var makeTrumpDancer = function(top, left, timeBetweenSteps) {
  top = '60vh'
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeTrumpDancer.prototype = Object.create(makeDancer.prototype);

makeTrumpDancer.prototype.step = function(timeBetweenSteps) {
  // makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggleClass('trump-dancer');
  this.$node.toggleClass('dancer');
};