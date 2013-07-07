
Executor = function () {
  function move(direction) {
    
    if (!direction || !direction.length) {
      console.error("no direction specified");
      return;
    }

    var intendedDirection =_.find(DIRECTIONS, function(dir) {
      return dir == direction || dir[0] == direction;
    });
    console.log("intention: " + intendedDirection);

    if (!intendedDirection) {
      console.error("not a valid direction: " + direction);
      return;
    }
    var player = Meteor.user();
    console.log("["+player._id+"]execute move " + intendedDirection);
    
    var currentLocation = Locations.findOne(player.profile.currentLocationId);
    console.log(currentLocation);
    console.log("exits: " + currentLocation.exits[intendedDirection]);
    if (!currentLocation.exits[intendedDirection]) {
      console.error("You cannot go that way")
      return;
    }
    
    // all is well!

    
    Meteor.users.update(player._id, { 
      $set: { 
        "profile.currentLocationId" : 
        currentLocation.exits[intendedDirection]
      } 
    });
  }

  return {
    move:move
  }
};
