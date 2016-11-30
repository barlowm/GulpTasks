"use strict";

const $ = require("../config.js");
const browserifyTask = require("./client/browserify");

$.gulp.task(
	"watchify", 
	"Compiles script files when any of them change",
	[], 
	function(callback) {
		browserifyTask(callback, false);	// Start browserify task with devMode === true
	}
);
