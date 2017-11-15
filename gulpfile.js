var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require("babelify"),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    connect = require('gulp-connect'),
    port = 9999,
    reloadPort = 35729,
    paths = {
      source: './src/app.jsx',
      css: ['css/*.css'],
	    javascripts: 'javascripts',
      stylesheets: 'assets',
    },
    sourcemaps = require('gulp-sourcemaps')


gulp.task('build', function() {

  var bundle =  browserify({
    entries: paths.source,
    debug: true,
    extensions: ['.jsx', '.js']
  })
      .transform(babelify.configure({

        optional: ["runtime","es7.asyncFunctions"]
    }))
      .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest(paths.javascripts));
  return bundle;
});

gulp.task('serve', ['build'], function () {
  return connect.server({
    port: port,
    livereload: {
      port: reloadPort
    }
  });
});

gulp.task('reload-js', ['build'], function () {
  return gulp.src(paths.source)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.jsx','./src/**/*.js'], ['reload-js']);
});

gulp.task('default', ['serve', 'watch']);
