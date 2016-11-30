"use strict";
require("dotenv").config();

const dest         = "./build";
const srcF         = "./src";
const srcApp       = srcF + "/scripts/app.js";
const outputName   = "index.js";
const nodeModules  = "./node_modules";
const Staging      = "./htdocs";

const _            = require("lodash");
const argv         = require("yargs");
const autoprefixer = require("autoprefixer");
const browserSync  = require("browser-sync");
const browserify   = require("browserify");
const changed      = require("gulp-changed");
const del          = require("del");
const eslint       = require("gulp-eslint");
const fs           = require("fs-extra");
const gulp         = require("gulp-help")(require("gulp"));
const gutil        = require("gulp-util");
const imagemin     = require("gulp-imagemin");
const less         = require("gulp-less");
const minifyCSS    = require("gulp-minify-css");
const mocha        = require("gulp-mocha");
const chai         = require("chai");
const notify       = require("gulp-notify");
const postcss      = require("gulp-postcss");
const prettyHrtime = require("pretty-hrtime");
const proxy        = require("proxy-middleware");
const size         = require("gulp-filesize");
const source       = require("vinyl-source-stream");
const buffer       = require("vinyl-buffer");
const sourcemaps   = require("gulp-sourcemaps");
const uglify       = require("gulp-uglify");
const url          = require("url");
const utils        = require("./utils.js");
const watchify     = require("watchify");


const config = {
	apiRoot: "http://74.102.74.34:7000",
	src: srcF,
	srcApp: srcApp,
	dest: dest,
	Staging: Staging,

	deploy: {
		src: dest + "/**/*",
		dev: {},
		staging: {},
		production: {}
	}
};

module.exports = {
	console: console,
	config : config,
	_ : _,
	nodeModules: nodeModules, 
	argv : argv,
	autoprefixer : autoprefixer,
	browserSync : browserSync,
	browserify : browserify,
	changed : changed,
	del : del,
	eslint : eslint,
	fs : fs,
	gulp : gulp,
	gutil : gutil,
	imagemin : imagemin,
	less : less,
	mocha: mocha,
	chai: chai,
	minifyCSS : minifyCSS,
	notify : notify,
	postcss : postcss,
	prettyHrtime : prettyHrtime,
	proxy : proxy,
	size : size,
	source : source,
	buffer : buffer,
	sourcemaps : sourcemaps,
	uglify : uglify,
	url : url,
	utils : utils,
	watchify : watchify
};