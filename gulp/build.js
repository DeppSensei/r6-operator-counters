'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(callback) {
    runSequence('clean', 'images', 'scripts', 'styles', 'node_modules', 'static', callback);
});
