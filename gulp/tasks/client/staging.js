"use strict";

const $ = require("../../config.js");

const dDataFiles = $.config.dest + "/data_files";
const Staging = "./htdocs";

const StagingFnc = function() {
	$.fs.ensureDirSync(Staging);
	$.gulp.src([$.config.dest + "/**", $.config.dest + "/**/*.js"])
		.pipe($.gulp.dest(Staging))
		.on("error", $.gutil.log);
};

$.gulp.task(
	"staging",
	"Builds and copies the built app over to the staging area",
	["bump", "lint", "pages", "fonts", "images", "data", "scripts", "styles"],
	StagingFnc
);

$.gulp.task(
	"staging2",
	"Just copies the built app over to the staging area",
	[],
	StagingFnc
);

$.gulp.task(
    "Release",
    "Builds a Release version of the app, which bumps the minor version as well (Used for end of sprint release)",
    ["bumpRelease", "lint", "pages", "fonts", "images", "data", "scripts", "styles"],
    StagingFnc
);