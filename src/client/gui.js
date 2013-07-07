
getLocation = function () {
  var user = Meteor.user();
  if (!user)
    return;

  return  Locations.findOne(user.profile.currentLocationId);
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