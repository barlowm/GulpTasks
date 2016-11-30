"use strict";

const $ = require("../config.js");

// Run this to compress all the things!
// "markup", "images", "fonts", "minifyCss", "uglifyJs"
$.gulp.task(
	"staging", 
	"Run this to build the Staging environment", 
	["js", "markup", "images", "fonts", "less", "minifyCss"],
	function() {
		$.fs.ensureDirSync($.config.Staging);
		$.gulp.src($.config.dest + "/**/*")
			.pipe($.gulp.dest($.config.Staging))      
			.on('error', $.gutil.log);		
	}
);