
getLocation = function () {
  var playerId = Session.get("playerId");
  if (!playerId)
    return;

  var player = Players.findOne(playerId);
  if (!player)
    return;
  return  Locations.findOne(player.currentLocationId);
}

Template.room.description = function () {
  var location = getLocation();
  if (!location)
    return;
  return location.description;
};

Template.room.exits = function () {
  var location = getLocation();
  if (!location)
    return;

  return _.map(location.exits, function(v,k) {
    return { dir: k };
  });
  
};