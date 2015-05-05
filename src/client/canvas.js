
Canvas = function (el)
{
  this.canvas = $(el);
  this.ctx    = this.canvas[0].getContext('2d');
    

    // Set up click events
    // this.setupEvents = function()
    // {
    //     canvas.addEventListener('click', function(e)
    //     {
    //       // Do something, this is where we want to associate
    //               // a new block to a player. Explained later in the tutorial
    //     });
    // }

    // Set up listeners for the draw method
    this.startUpdateListener = function()
    {
        
      Deps.autorun(function() {
        // var location = getLocation();
        // if (!location)
        //   return;
        
        pxxl("/fonts/c64.bdf", "Muddy Meteor", function (pixels) {
          var canvas = $('canvas')[0];
          canvas.width = innerWidth;
          var ctx = canvas.getContext('2d');
          //console.log(pixels);
          renderTitle(ctx, pixels, {
            fill: "hotpink",
            stroke: 0,
            shadow1: "purple",
            shadow2: "purple",
            Xoffset: 1,
            Yoffset: -1,
            size: 6
          });
        });
      });
        
    }
}
