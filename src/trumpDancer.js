  var makeTrumpDancer = function(top, left, timeBetweenSteps) {
    top = '60vh'
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('trump-dancer');
    this.$node.removeClass('dancer');
  };
  makeTrumpDancer.prototype = Object.create(makeDancer.prototype);

  makeTrumpDancer.prototype.step = function(timeBetweenSteps) {
    makeDancer.prototype.step.call(this, timeBetweenSteps);
    var pos = this.$node.position();

    this.setPosition(pos.top + 20, pos.left + 20);
  };