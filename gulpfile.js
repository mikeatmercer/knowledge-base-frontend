var gulp = require("gulp"),
    concat = require("gulp-concat"),
    nunjucks = require("gulp-nunjucks-render"),
    data = require("gulp-data"),
    sass = require("gulp-sass"),
    plumber = require('gulp-plumber')
    fs = require("fs");

var dir = "Z:\\"

gulp.task("css", function(){
    return gulp.src("./scss/main.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(dir))   
})
gulp.task("js", function(){
    return gulp.src('js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(dir))
})
gulp.task("templates", function(){
    return gulp.src("./pages/*.njk")
        .pipe(plumber())
        .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync("./fake_data.json"));
        }))
        .pipe(nunjucks({
            path: ["."],
        }))
        .pipe(gulp.dest(dir))
})

gulp.task('watch', function() {
    gulp.watch(['js/**/*.js'], gulp.series('js'));
    gulp.watch(['index.html',"fake_data.json", "./components/**/*", "./pages/**/*"], gulp.series('templates'));
    gulp.watch(['scss/**/*.scss'], gulp.series('css'));
});