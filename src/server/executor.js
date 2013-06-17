

Executor = function() {}

Executor.prototype = {
  move: function(playerId, direction) {
    
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

    console.log("["+playerId+"]execute move " + intendedDirection);
    var player = Players.findOne( playerId );
    var currentLocation = Locations.findOne(player.currentLocationId);
    console.log(currentLocation);
    console.log("exits: " + currentLocation.exits[intendedDirection]);
    if (!currentLocation.exits[intendedDirection]) {
      console.error("You cannot go that way")
      return;
    }
    
    // all is well!

    player.currentLocationId = currentLocation.exits[intendedDirection];
    Players.update(playerId,player);
  }
};
