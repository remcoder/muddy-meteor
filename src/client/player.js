Template.playert.playerName = function() {
  var playerId = Session.get("playerId");
  var player = Players.findOne({ _id : playerId });
  if (player)
      return player.name;
}

Template.playert.events({
  "click button" : function() {
    var newName = prompt("Enter your name");
    console.log("new name: " + newName);
    if (!newName || !newName.length)
      return;

    var player = Session.get("player");
    player.name = newName;
    Session.set("player", player);

  }
});
