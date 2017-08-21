"use strict";
require("dotenv").config();

const utils        = require("./utils.js");
const aliasify     = require("aliasify");
const autoprefixer = require("autoprefixer");
const babelify     = require("babelify");
const browserSync  = require("browser-sync");
const browserify   = require("browserify");
const chai         = require("chai");
const pushstate    = require("connect-pushstate");
const del          = require("del");
const fs           = require("fs-extra");
const changed      = require("gulp-changed");
const connect      = require("gulp-connect");
const eslint       = require("gulp-eslint");
const size         = require("gulp-filesize");
const gulp         = require("gulp-help")(require("gulp"));
const less         = require("gulp-less");
const minifyCSS    = require("gulp-clean-css");
const mocha        = require("gulp-mocha");
const notify       = require("gulp-notify");
const postcss      = require("gulp-postcss");
const sourcemaps   = require("gulp-sourcemaps");
const uglify       = require("gulp-uglify");
const gutil        = require("gulp-util");
const hbsfy        = require("hbsfy");
const globify	   = require("require-globify");
const _            = require("lodash");
const prettyHrtime = require("pretty-hrtime");
const proxy        = require("proxy-middleware");
const combiner     = require("stream-combiner2");		// see -> https://github.com/gulpjs/gulp/blob/master/docs/recipes/combining-streams-to-handle-errors.md
const url          = require("url");
const buffer       = require("vinyl-buffer");
const source       = require("vinyl-source-stream");
const watchify     = require("watchify");
const args         = require("yargs").argv;
const argv         = require("yargs").argv;
const bump         = require("gulp-bump");
const jsonModify   = require("gulp-json-modify");
const debug        = require("gulp-debug");

const dotenv = require("gulp-dotenv");
const rename = require("gulp-rename");

const request      = require("supertest");
const mochawesome  = require("mochawesome");
chai.use(require("chai-json-schema-ajv"));
const expect = chai.expect;
const assert = chai.assert;

const src          = "./src";
const srcApp       = src + "/js/app.js";
const srcFile      = "app.js";

const nodeModules  = "./node_modules";
const dest         = "./build";
const outputName   = "index.js";
const Staging      = "./htdocs";


const config = {
	port: 8081,

	src: src,
	srcApp: srcApp,
	srcFile: srcFile,
	envFile: "env.json",
	envPath: src + "/js",

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
	nodeModules: nodeModules,
	_ : _,
	aliasify: aliasify,
	args: args,
	argv: argv,
	autoprefixer: autoprefixer,
	babelify: babelify,
	browserSync: browserSync,
	browserify: browserify,
	buffer: buffer,
	chai: chai,
	expect: expect,
	assert: assert,
	changed: changed,
	combiner: combiner,
	connect: connect,
	del: del,
	dotenv: dotenv,
	eslint: eslint,
	fs: fs,
	globify: globify,
	gulp: gulp,
	gutil: gutil,
	hbsfy: hbsfy,
	less: less,
	minifyCSS: minifyCSS,
	mocha: mocha,
	notify: notify,
	postcss: postcss,
	prettyHrtime: prettyHrtime,
	proxy: proxy,
	pushstate: pushstate,
	rename: rename,
	size: size,
	source: source,
	sourcemaps: sourcemaps,
	uglify: uglify,
	url: url,
	utils: utils,
	watchify: watchify,
	request: request,
	mochawesome: mochawesome,
	bump: bump,
	jsonModify: jsonModify,
	debug: debug
};
