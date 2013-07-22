

Executor = function () {
  function move(direction) {
    if (!direction) {
      console.error("no direction specified");
      return;
    }

    if (!_.contains(DIRECTIONS, direction)) {
      console.error("not a valid direction: " + direction);
      return;
    }

    var player = Meteor.user();
    console.log("["+player._id+"]execute move " + direction);
    
    var currentLocation = Locations.findOne(player.profile.currentLocationId);
    console.log(currentLocation);
    console.log("exits: " + currentLocation.exits[direction]);
    

    if (!currentLocation.exits[direction]) {
      console.error("You cannot go that way")
      return;
    }
    
    // all is well!

    
    Meteor.users.update(player._id, { 
      $set: { 
        "profile.currentLocationId" : 
          currentLocation.exits[direction]
      } 
    });
  }

  return {
    move:move
  }
};
