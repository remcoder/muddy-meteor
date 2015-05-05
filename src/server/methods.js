Meteor.methods({
  init: function() {
    console.log("init");
    var user = Meteor.user();

    if (!user)
      return;

    console.log("init player:"+user.profile.name );
    var initialLocation = Locations.findOne("in_the_dark");
    exec._move(user, initialLocation._id);
    //Meteor.users.update(user._id, {$set: { "profile.currentLocationId" : initialLocation._id}});
  },

  executeCommand: function(s) {
    console.log("parsing command: " + s);
    // var c = { text: cmd };
    // interpreter.interpret(c);
    interpreter.interpret(s);
  }
});
