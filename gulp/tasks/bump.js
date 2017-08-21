"use strict";
const $ = require("../config.js");
const Version_json = {
	"name": "SUITE v",
	"appversion": "0.22.1",
	"build": " alpha ",
	"dateStamp": ""
};

const SrcPath = $.config.envPath;
const VersionFileName = "version.json";
const VersionFilePath = SrcPath + "/" + VersionFileName;

const string_src = function(filename, string) {
	var src = require("stream").Readable({ objectMode: true });
	src._read = function () {
		this.push(new $.gutil.File({
			cwd: "",
			base: "",
			path: filename,
			contents: new Buffer(string)
		}));
		this.push(null);
	};
	return src;
};

const bumpVersion = function(patch) {
	var d = new Date();
	var n = d.toLocaleString();
	const sBuf = JSON.stringify(Version_json);

	$.fs.readJson(VersionFilePath)
	.then(packageObj => {
		if("BumpPatch" == patch) {
			$.gulp.src(VersionFilePath)
				.pipe($.bump({key: "appversion", type:"patch"}))
				.pipe($.jsonModify({key:"dateStamp", value: n}))
				.pipe($.gulp.dest(SrcPath + "/"));
		}
		else if("BumpMinor" == patch) {
			$.gulp.src(VersionFilePath)
				.pipe($.bump({key: "appversion", type:"minor"}))
				.pipe($.jsonModify({key:"dateStamp", value: n}))
				.pipe($.gulp.dest(SrcPath + "/"));
		}
	})
	.catch(err => {
		console.log("No Version file so creating it!");
		string_src(VersionFileName, sBuf)
			.pipe($.jsonModify({key:"dateStamp", value: n}))
			.pipe($.gulp.dest(SrcPath + "/"));
	});
};

const NoBump = function() {
	console.log("---------------------- No Bump -----------------------");
	bumpVersion("");
};

const BumpPatch = function() {
	console.log("---------------------- BumpPatch -----------------------");
	bumpVersion("BumpPatch");
};

const BumpMinor = function() {
	console.log("---------------------- BumpMinor -----------------------");
	bumpVersion("BumpMinor");
};

$.gulp.task(
	"NoBump",
	"runs Bumps version file but does not bump the version",
	[],
	NoBump
);

$.gulp.task(
	"bump",
	"runs Bumps version file",
	[],
	BumpPatch
);

$.gulp.task(
    "bumpRelease",
    "Bumps Minor Release in version file for a release",
    [],
    BumpMinor
);
