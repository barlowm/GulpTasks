"use strict";

const $ = require("../config.js");

$.gulp.task(
	"buildAll", 
	"Builds all the components -->",
	["less", "images", "fonts", "markup", "watch"]
);
