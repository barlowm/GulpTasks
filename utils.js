"use strict";

const gutil        = require("gulp-util");
const notify       = require("gulp-notify");
const prettyHrtime = require("pretty-hrtime");

module.exports = {
	done : function() {
		console.log("Task Complete");
	},

	handleErrors : function() {
		const args = Array.prototype.slice.call(arguments);
		// Send error to notification center with gulp-notify
		notify.onError({
			title: "Compile Error",
			message: "<%= error %>"
		}).apply(this, args);

		// Keep gulp from hanging on this task
		this.emit("end");
	},

/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/
	startTime : "",

	bundleLogger : {
		start : function(filepath) {
			this.startTime = process.hrtime();
			gutil.log("Bundling", gutil.colors.green(filepath) + "...");
		},

		watch : function(bundleName) {
			gutil.log("Watching files required by", gutil.colors.yellow(bundleName));
		},

		end : function(filepath) {
			const taskTime = process.hrtime(this.startTime);
			const prettyTime = prettyHrtime(taskTime);
			gutil.log("Bundled", gutil.colors.green(filepath), "in", gutil.colors.magenta(prettyTime));
		}
	}
};