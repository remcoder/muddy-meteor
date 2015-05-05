
getLocation = function () {
  var user = Meteor.user();
  if (!user)
    return;

  return  Locations.findOne(user.profile.currentLocationId);
}

Template.room.users = function() {
  var location = getLocation();
  console.log("Current location: ", location);
  if (!location)
    return;

  var user = Meteor.user();
  if (!user)
    return;
  
  var events = Events.find({
      locationId: location._id,
      type : "move",
      timestamp : { $gt : user.profile.lastMoveTime }
    },
    {
      sort: { timestamp : -1 }
  }).fetch();

  console.log("events", events);
  var users = Meteor.users.find({ 
    "profile.currentLocationId": location._id
    
  }).fetch();
  return users;
};

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