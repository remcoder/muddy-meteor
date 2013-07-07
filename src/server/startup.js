// On server startup, if the database is empty, create some initial data.
if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("Muddy Meteor starting..");
    
    Locations.remove({});
    if (Locations.find().count() === 0) {
      Locations.insert({
        _id: "in_the_dark",
        title: "Darkness..", 
        description: "You are surrounded by utter darkness",
        exits: { south : "second_room" }
      });
      Locations.insert({
        _id: "second_room",
        title: "Second room", 
        description: "The tables have turned! You now have darkness surrounded! You win. End.",
        exits: { north : "in_the_dark", east: "third_room" }
      });
      Locations.insert({
        _id: "third_room",
        title: "Third", 
        description: "The forrest is angry",
        exits: { west: "second_room", north : "to_the_west", south: "in_the_dark" }
      });
      Locations.insert({
        _id: "to_the_west",
        title: "The near west", 
        description: "Nearly west...",
        exits: { south : "third_room" }
      });
    }

    var exec = new Executor();
    var parser = new Parser();
    interpreter = new Interpreter(parser, exec);
  });
}
