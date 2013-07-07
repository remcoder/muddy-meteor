// On server startup, if the database is empty, create some initial data.
if (Meteor.isClient) {
  Meteor.startup(function () {
    var canvas = new Canvas('canvas');
        canvas.startUpdateListener();
    
    console.log("before init");
    Meteor.call("init", function() {
      console.log("after init");
      
    });
  });
}
  