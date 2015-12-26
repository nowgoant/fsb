var config = require('../config')
if (!config.tasks.css) return

var gulp = require('gulp')
var browserSync = require('browser-sync')
var compass = require('gulp-compass')
var sourcemaps = require('gulp-sourcemaps')
var handleErrors = require('../lib/handleErrors')
var autoprefixer = require('gulp-autoprefixer')
var path = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

gulp.task('css', function () {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(compass({
      config_file: './config.rb',
      sass: path.join(config.root.src, config.tasks.css.src),
      css: paths.dest
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({ stream: true }))
})
