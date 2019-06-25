"use strict";
const $ = require("../config.js");
const exec = require("child_process").exec;

const server = function() {
	process.chdir(`./${page_dest}/js`);
	$.nodemon({ script: "./index.js"});
};
server.description = "Launch the Server module";

$.gulp.task("server",server);
