
console.log("interpreter.js")

Interpreter = function (executor) {
  this.executor = executor;
}

Interpreter.prototype = {
  interpret : function (cmd) {
    console.log("["+cmd.playerId+"]interpreting command: " + cmd.text);

    if (!cmd.text || !cmd.text.length)
      return;

    var parts = cmd.text.split(" ");
    var cmdType = parts[0];

    switch(cmdType) {
      case "north":
      case "n":
      case "south":
      case "s":
      case "east":
      case "e":
      case "west":
      case "w":
        this.executor.move(cmd.playerId, parts[0]);
        break;

      case "move":
        this.executor.move(cmd.playerId, parts[1]);
        break;

      case "elp" :
        console.error("did you mean 'help'?");
        
      break;
      default:
        console.error("Unkown command: " + cmdType);
    }
  }
};






