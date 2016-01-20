$(document).ready(function() {
  window.dancers = [];
  window.score = 0;
  
    $(".startButton").on("click", function(event) {
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
    var addDancerButton = function(dancerMakerFunction) {
      var dancer = new dancerMakerFunction(undefined,undefined,200);

      window.dancers.push(dancer);

      $('body').append(dancer.$node);
    };

    var clearID = setInterval( function() {addDancerButton(dancerMakerFunction);}, 600);
    setTimeout(function(){ clearInterval(clearID); }, 5000);
  });

  $(document).on('keydown', function(event) {
    var key = String.fromCharCode(event.keyCode);
    if (key === 'A' || key === 'S' || key === 'D' || key === 'F') {
      var $dancers = $('.trump-dancer');
      var y = $(window).height() - 200;
      var windowBottom = $(window).height();
      var x = $(window).width();

      // var growStyle = {
      //   'background-size': '375px',
      //   'height': '375px',
      //   'width': '375px'
      // };
      var growStyle = {
        'background-image': "url('http://i517.photobucket.com/albums/u333/PhotoPun/explosion.gif')",
        'background-size': '375px',
        'height': '375px',
        'width': '375px',
        'transition': '100ms'
      };

      $dancers.each(function(i) {

        var hit = function(node) {
          window.score += 10;
          $('.score').text(window.score);
          node.css(growStyle);
          setTimeout(function(){ node.remove(); },2000);        
        };
        
        var $node = $($dancers[i]);
        if ($node.position().top > y && $node.position().top < windowBottom) {
          if (key === 'A' && $node.position().left < x/4) {
            hit($node);
          } else if (key === 'S' && $node.position().left < x/2 && $node.position().left > x/4) {
            hit($node);
          } else if (key === 'D' && $node.position().left > x/2 && $node.position().left < x*3/4) {
            hit($node);
          } else if (key === 'F' && $node.position().left > x*3/4) {
            hit($node);
          }
        }
      });  
    }
    
  }); // keydown
}); // end