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





//var gulp = require('gulp');
//var sass = require('gulp-sass');
//var neat = require('node-neat').includePaths;
//var browserSync = require('browser-sync');

//gulp.task('sass', function () {
    //gulp.src('scss/styles.scss')
        //.pipe(sass({
          //includePaths: ['styles'].concat(neat)
        //}))
        //.pipe(gulp.dest('css'));
//});

//gulp.task('browser-sync', function() {
    //browserSync.init(["css/*.css", "js/*.js", "*.html"], {
        //server: {
            //baseDir: "./"
        //}
    //});
//});

//gulp.task('default', ['sass', 'browser-sync'], function () {
    //gulp.watch(["scss/*.scss", "scss/components/*.scss"], ['sass']);
//});



//var gulp = require('gulp');
//var sass = require('gulp-sass');
//var browserSync = require('browser-sync');
//var neat = require('node-neat').includePaths;

//var paths = {
  //scss: './scss/*.scss'
//};

//gulp.task('sass', function () {
    //gulp.src('scss/styles.scss')
        //.pipe(sass({
          //includePaths: ['scss']
        //}))
        //.pipe(gulp.dest('css'));
//});

//gulp.task('browser-sync', function() {
    //browserSync.init(["css/*.css", "js/*.js", "*.html"], {
        //server: {
            //baseDir: "./"
        //}
    //});
//});

//gulp.task('default', ['sass', 'browser-sync'], function () {
    //gulp.watch("scss/*.scss", ['sass']);
//});
