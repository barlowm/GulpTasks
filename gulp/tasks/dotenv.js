"use strict";
const $ = require("../config.js");

const dotEnvFnc = function () {
	console.log("converting .ENV to JSON");
	return $.gulp.src(".env")
		.pipe($.dotenv())
		.pipe($.rename($.config.envFile))
		.pipe($.gulp.dest($.config.envPath));
};

$.gulp.task(
    "dotenv",
    "Converts .ENV files to JSON for gulp processing - FOR INTERNAL USE ONLY",
    [],
    dotEnvFnc
);