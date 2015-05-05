Template.player.playerName = function() {
  var playerId = Session.get("playerId");
  var player = Players.findOne({ _id : playerId });
  if (player)
      return player.name;
}

Template.player.events({
  "click button" : function() {
    Meteor.logout(); 
  }
});
