"use strict";

const $ = require("../../config.js");




/********************************************************************************/
const ScriptsFnc = function() {
	console.log("------------------ Bundling Script Files ------------------");

	let bundler = $.browserify({
		entries: $.config.src + "/js/index.js",
		debug: true,
		extensions: [".js", ".hbs"]
	});

	if ($.args.watch) { bundler = $.watchify(bundler); }

	bundler
		.transform($.babelify, {
			presets: ["es2015", "stage-2"],
			plugins: ["transform-runtime", "transform-es2015-destructuring", "transform-object-rest-spread"]
		})
		.transform($.aliasify, {
			// alises: {	<-- aliases is mis-spelled but fixing that might break existing code so leaving in place till it can be troubleshot
			// 	underscore: "lodash",
			// },
		})
		.transform($.hbsfy.configure({ extensions: ["hbs"] }))
		.transform($.globify);

	function rebundle() {
		console.log("------------------ RE-Bundling Script Files ------------------");
		$.gutil.log("Bundle started...");
		return bundler
			.bundle()
			.on("error", (err) => $.gutil.log(err.message))
			.on("end", () => $.gutil.log("Bundle complete!"))
			.pipe($.source("app.js"))
			.pipe($.buffer())
			.pipe($.sourcemaps.init({ loadMaps: true }))
			.pipe($.sourcemaps.write("./"))
			.pipe($.gulp.dest($.config.dest))
			.pipe($.connect.reload());
	}

	if ($.args.watch) {
		bundler.on("update", rebundle);
	}
	rebundle();
};



$.gulp.task(
	"scripts",
	"Compiles all the JS Scripts into a single app.js file. Also builds a map file",
	["dotenv"],
	ScriptsFnc
);


