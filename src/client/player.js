Template.playert.playerName = function() {
  var playerId = Session.get("playerId");
  var player = Players.findOne({ _id : playerId });
  if (player)
      return player.name;
}

Template.playert.events({
  "click button" : function() {
    Meteor.logout(); 
  }
});
