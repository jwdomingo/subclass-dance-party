  var makeTrumpDancer = function(top, left, timeBetweenSteps) {
    top = '60vh';
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('trump-dancer');
    this.$node.removeClass('dancer');
  };
  makeTrumpDancer.prototype = Object.create(makeDancer.prototype);

  makeTrumpDancer.prototype.step = function(timeBetweenSteps) {
    // makeDancer.prototype.step.call(this, timeBetweenSteps);
    // var pos = this.$node.position();
    var y = $(window).height() + 130;
    

    var x = $(window).width() * ((Math.floor(Math.random() * 4) + 1)*2-1)/8;

    var self = this;
    setTimeout(function(){ self.setPosition(y,x); }, 1000);
  };