"use strict";

const $ = require("../../config.js");

const less = {
	src: $.config.src + "/styles/app.less",
	watchSrc: $.config.src + "/styles/**/*.less",
	dest: $.config.dest + "/css/",
	settings: {
		paths: [
			$.config.src + "/styles/",
			$.nodeModules + "/"
		]
	}
};

$.gulp.task(
	"less", 
	`Compiles all the LESS stylesheets into a single CSS stylesheet in the ${less.dest} folder`,
	[],
	function () {
		return $.gulp.src(less.src)
			.pipe($.sourcemaps.init())
			.pipe($.less(less.settings))
			.on("error", $.utils.handleErrors)
			.pipe($.sourcemaps.write())
			.pipe($.postcss([ $.autoprefixer({ browsers: ["last 2 versions"] }) ]))
			.pipe($.gulp.dest(less.dest))
			.pipe($.browserSync.reload({stream:true}));
	}
);
