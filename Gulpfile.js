var gulp        = require('gulp');
var sass        = require('gulp-sass');
var neat = require('node-neat').includePaths;
var browserSync = require('browser-sync').create();
var minifycss = require('gulp-minify-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: ""
    });

    gulp.watch(["scss/*.scss", "scss/components/*.scss"], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass({
          includePaths: ['styles'].concat(neat)
        }))
        .pipe(minifycss())
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
