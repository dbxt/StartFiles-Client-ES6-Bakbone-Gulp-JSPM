"use strict";
var gulp        = require("gulp");
var browserSync = require("browser-sync").create();
var jshint      = require("gulp-jshint");
var stylish     = require("jshint-stylish");
var debug       = require("gulp-debug");

var js_files = [
    "!libs/",
    "!libs/**",
    "!config.js",
    "**/*.js"
];
//var test_js_files = [
//    "data/**/*.js"
//];

// Static server
gulp.task("browser-sync", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.watch(js_files, ["js-watch"]);

gulp.task("lint", function() {
    return gulp.src(js_files)
        .pipe(debug())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task("js-watch", ["lint"], browserSync.reload);
