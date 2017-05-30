var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');  
var concat = require('gulp-concat');  
var uglify = require('gulp-uglify'); 

(function(){
    var cssFiles = ['src/app/css/**/*.css'];
    var jsDest = 'dist';

    gulp.task('buildCSS', function() {

    return gulp.src(cssFiles)

        .pipe(cleanCSS({compatibility: 'ie8'}))

        .pipe(concat('gmBackToTop-min.css'))

        .pipe(gulp.dest(jsDest));
    });

}());
