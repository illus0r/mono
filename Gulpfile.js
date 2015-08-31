//var gulp = require('gulp'),
    //browserSync = require('browser-sync').create(),
    //sass = require('gulp-sass'),
    //neat = require('node-neat').includePaths,
    //// minifycss = require('gulp-minify-css'),
    //// rename = require('gulp-rename'),
    //watch = require('gulp-watch');

//gulp.task('sass', function() {
    //return gulp.src('scss/*.scss')
        //.pipe(sass({
          //includePaths: ['styles'].concat(neat)
        //}))
        //.pipe(gulp.dest('css'))
        //// .pipe(rename({suffix: '.min'}))
        //// .pipe(minifycss())
        //.pipe(gulp.dest('css'));
//});

//gulp.task('watch', function() {
    //gulp.watch('scss/*.scss', ['sass']);
//});

//gulp.task('default', ['sass', 'watch']);




var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
//var normalize        = require('normalize.css');
var neat = require('node-neat').includePaths;

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: ""
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass({
          includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
