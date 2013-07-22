Interpreter = function (parser, executor) {
  var Do = executor;
  var replace = parser.addReplaceRule;
  var cmd = parser.addCommand;

  // define grammar
  replace(/^n$/, "north");
  replace(/^s$/, "south");
  replace(/^e$/, "east");
  replace(/^w$/, "west");

  replace(/^north$/, "move north");
  replace(/^south$/, "move south");
  replace(/^east$/, "move east");
  replace(/^west$/, "move west");
  replace(/\ba /, "");
  replace(/\bthe /, "");

  cmd(["take", "get"], 1, Do.take);
  cmd(["move", "go"], 1, Do.move);

  function interpret(s) {
    console.log("parsing command: " + s);
    var cmd = parser.parse(s);  
    
    console.log("executing command");

    executor[cmd.verb].apply(null, cmd.args);
  }

  return {
    interpret: interpret
  }
}