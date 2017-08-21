"use strict";

const config = require("../../config.js");

const connectFnc = function() {
	console.log(`Launches the application in a local server running as localhost on the specified port (${config.config.port})`);
	config.connect.server({
		root: config.config.dest,
		port: config.config.port,
		livereload: true,
		middleware: function(connect, opt) {
			return [
				config.pushstate()
			];
		}
	});
};




config.gulp.task(
	"connect",
	`Launches the application in a local server running as localhost on the specified port (${config.config.port})`,
	[],
	connectFnc
);
