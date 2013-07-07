Template.console.events({
  'submit form' : function (evt) {
    evt.preventDefault();

    // template data, if any, is available in 'this'
    var $command = $.findByRole("command");
    var cmd = $command.val();
    if (!cmd.length) {
      console.log("No command given!");
      return;
    }

    console.log("Running command: " + cmd);
    
    Meteor.call("executeCommand", cmd, function(res, err) {
      //console.error(err);
    });

    $command.val("");
  }
});
