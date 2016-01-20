$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      200
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $(".lineUpButton").on("click", function(event) {
    var dancers = window.dancers;
    var x = $(window).width()/2;

    for (var i = 0; i < dancers.length; i++){
      var y = $(window).height()/dancers.length*i+1;
      var dancer = dancers[i];
      dancer.lineUp(x,y);
    }

  });

  $(document).on('keydown', function() {
    var key = String.fromCharCode(event.keyCode);
    if (key === 'A' || key === 'S') {
      var $dancers = $('.trump-dancer');
      var y = $(window).height() - 200;
      var x = $(window).width() / 2;

      var growStyle = {
        'background-size': '375px',
        'height': '375px',
        'width': '375px'
      };

      $dancers.each(function(i) {
        
        var $node = $($dancers[i]);
        if ($node.position().top > y) {
          if (key === 'A' && $node.position().left < x) {
            $node.css(growStyle);
            setTimeout(function(){ $node.remove(); },2000);
          } else if (key === 'S' && $node.position().left >= x) {
            $node.css(growStyle);
            setTimeout(function(){ $node.remove(); },2000);
          }
        }
      });  
    }
    
  }); // keydown
}); // end