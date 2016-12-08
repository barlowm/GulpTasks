"use strict";

const $ = require("../config.js");

$.gulp.task(
	"default", 
	"Use \"gulp help\" to get a listing of the tasks",
	["help"],		// Used for completeness of the task parameters (but not required)
	function(){
		console.log("Use \"gulp help\" to get a listing of the tasks");
	}
);
