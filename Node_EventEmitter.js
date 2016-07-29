var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
	var e = new EventEmitter();
	process.nextTick(function() {
		var count = 0;
		e.emit('start');
		var t = setInterval(function () {
			e.emit('data', ++count);
			if(count === c) {
				e.emit('end', count);
				clearInterval(t);
			}
		}, 10);
	});
	return(e);
};

var results = getResource(5);

results.on('start', function() {
	console.log("I've started!");
});

results.on('data', function(eventNumber) {
	console.log("	Receiving data: " + eventNumber);
});

results.on('end', function(eventNumber) {
	console.log("I'm done, with " + eventNumber + " data events.");
});