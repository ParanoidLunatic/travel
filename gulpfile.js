var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var paths = {
  stylus:['./dev/stylus/*.styl'],
  script:['./dev/js/*.js']
};
gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
      .pipe(stylus({
        compress: 1
      }))
    .pipe(gulp.dest('./pro/css'));
});
gulp.task('script', function() {
  return gulp.src(paths.script)
      //.pipe(uglify())
    .pipe(gulp.dest('./pro/js'));
});
gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
  gulp.watch(paths.script, ['script']);
});
gulp.task('default', ['watch','stylus','script']);