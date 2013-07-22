
Parser = function () {
	var replaceRules = [];
	var commands = {};

	function addReplaceRule(pattern, newString) {
		replaceRules.push({ pattern : pattern, newString : newString });
	}


	function addCommand(verbs, arity, fun) {
		var canonical = verbs[0];

		_.each(verbs, function(verb, index) {
			if (_.has(commands, verb)) 
				throw new Error("command '" +verb+"' already registered");
			
			if (verb == canonical)
				commands[verb] = { arity : arity, fun: fun };
			else
				commands[verb] = commands[canonical];

			if (index > 0)
				commands[verb].canonical = canonical;
		})
	}

	function listCommands() {
		return commands.keys();
	}

	function parse(s) {
		console.log("parsing " + s);

		console.log("running replace rules");
		_.each(replaceRules, function(rule){
			var result = s.replace(rule.pattern, rule.newString);
			if (result !== s) {
				console.log(s, "->", result);
				s = result;
			}
		});

		var words = s.split(/\s+/);
		console.log("split input: " + words);
		var verb = words[0];
		var args = words.slice(1);

		var cmd = commands[verb];
		if (!cmd) {
			console.log("command not found: " + s);
			throw new Error("Command not found");
		}
		console.log("command found: " + verb);

		if (args.length != cmd.arity) {
			console.error("command arity does not match");
			throw new Error("Command arity mismatch");
		}


		console.log("arguments: " + args);
		return { verb: cmd.canonical, args: args};

	}


	return {
		parse : parse,
		addReplaceRule : addReplaceRule,
		addCommand : addCommand,
		listCommands : listCommands

	}
}
