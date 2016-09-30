var gulp = require('gulp');

var sass = require('gulp-sass')

var browserSync = require('browser-sync').create();

// Uncomment to use JADE

// var jade = require('gulp-jade');
//
// gulp.task('jade', function() {
//   var YOUR_LOCALS = {};
//   gulp.src('app/jade/*.jade')
//     .pipe(jade({
//       locals: YOUR_LOCALS
//     }))
//     .pipe(gulp.dest(''))
// });

// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'app'
//     },
//   })
// })


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({
      stream:true
    }))
});

// WATCH - SASS

gulp.task('watch', ['sass'], function(){
  gulp.watch('**/*.sass',['sass']);
  gulp.watch('app/*.html');
  gulp.watch('app/js/*.js');
  gulp.watch('app/css/*.css');

})

// WATCH - SASS, JADE, BS

// gulp.task('watch', ['browser-sync','sass'], function(){
//   gulp.watch('**/*.sass',['sass']);
//   gulp.watch('app/*.html');
//   gulp.watch('app/js/*.js');
//   gulp.watch('app/css/*.css');
//   gulp.watch('app/jade/*.jade',['jade']);
// })
