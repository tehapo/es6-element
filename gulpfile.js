var gulp = require('gulp');
var inlineSource = require('gulp-inline-source');
var babel = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./'));
});

gulp.task('copy', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['babel', 'copy'], function() {
  return gulp.src('*.html')
    .pipe(inlineSource({
      compress: false
    }))
    .pipe(gulp.dest('./'));
});
