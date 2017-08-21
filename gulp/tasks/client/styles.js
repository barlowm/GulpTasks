"use strict";

const $ = require("../../config.js");

const sStyles      = $.config.src + "/styles";
const sStylesFiles = sStyles + "/app.less";
const wStylesFiles = sStyles + "/**/*";
const dStylesFiles = $.config.dest;
const sStylesSettings = {
	paths: [
		sStyles + "/",
		$.nodeModules + "/"
	]
};

const stylesFnc = function() {
	console.log("------------------ Reloading Styles ------------------");
	$.gulp.src(sStyles + "/**/*.css")
		.pipe($.gulp.dest($.config.dest))
		.pipe($.connect.reload());

	let combined = $.combiner.obj([
		$.gulp.src(sStylesFiles),
		$.sourcemaps.init(),
		$.less(sStylesSettings),
		$.postcss([$.autoprefixer()]),
		$.sourcemaps.write(),
		$.gulp.dest(dStylesFiles)
	]);
	combined.on("error", console.error.bind(console));
	return combined;

};

$.gulp.task(
	"styles",
	`Compiles all the LESS stylesheets from the ${sStylesFiles} folder into a single CSS stylesheet in the ${dStylesFiles} folder`,
	[],
	stylesFnc
);
