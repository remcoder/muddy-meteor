Meteor.methods({
  registerNewPlayer: function(name) {
    console.log("registering new player:"+name );
    var initialLocation = Locations.findOne("in_the_dark");
    var newPlayer = {
      name : name,
      currentLocationId : initialLocation._id
    };

    console.log("insert new player: " + JSON.stringify(newPlayer));
    var id = Players.insert(newPlayer);
    console.log("new id: " + id);
    return id;
  },

  executeCommand: function(cmd, playerId) {
    console.log("executing command: " + cmd);
    var c = { text: cmd, playerId: playerId };
    interpreter.interpret(c);
  }
});
