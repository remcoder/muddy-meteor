

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
    

    var newLocation = currentLocation.exits[direction];

    if (!newLocation) {
      console.error("You cannot go that way")
      return;
    }
    
    // all is well!
    _move(player, newLocation);
  }
  
  function _move(player, locationId) {  
    var timestamp = new Date().getTime();

    Meteor.users.update(player._id, { 
      $set: { 
        "profile.currentLocationId" : locationId,
        "profile.lastMoveTime" : timestamp
      } 
    });

    // update the events table so we can correctly show messages later
    Events.insert({
      type: "move",
      playerId: player._id, 
      playerName : player.profile.name,
      locationId: locationId,
      timestamp: timestamp
    });
  }

  return {
    move:move,
    _move:_move
  }
};
