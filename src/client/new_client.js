// On server startup, if the database is empty, create some initial data.
if (Meteor.isClient) {
  Meteor.startup(function () {
    
    Meteor.call("registerNewPlayer", "marvin", function(err, playerId) {
      console.log("id: "+playerId);
      Session.set("playerId", playerId);  

      var canvas = new Canvas('canvas');
      canvas.startUpdateListener();
    });
  });
}
  