var gulp = require("gulp"),
    tsc = require("gulp-tsc")
    flatten = require("gulp-flatten"),
    less = require("gulp-less"),
    debug = require("gulp-debug");

gulp.task('default', ["typescript", "less"], function () {

});

gulp.task('watch', ["typescript", "less"], function () {
    return gulp.watch(["./Scripts/*.ts"], ['typescript']);
});

gulp.task('typescript', function () {
    return gulp.src("./Scripts/*.ts")
        .pipe(tsc())
        .pipe(flatten())
        .pipe(gulp.dest("./wwwroot/Scripts"));
});

gulp.task('less', function () {
   return gulp.src("./Content/*.less")
    .pipe(less())
    .pipe(flatten())
    .pipe(gulp.dest("./wwwroot/Content"))
});