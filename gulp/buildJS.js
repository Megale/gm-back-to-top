
(function(){

    var gulp = require('gulp');
    var concat = require('gulp-concat');  
    var rename = require('gulp-rename');  
    var uglify = require('gulp-uglify'); 
    var minify = require('gulp-minify');
    var ngAnnotate = require('gulp-ng-annotate')

    var jsFiles = ['src/app/config/**/*.js', 'src/app/component/**/*.js', 'src/app/controller/**/*.js'];
    var jsDest = 'dist';

    gulp.task('buildJS', function() {

        return gulp.src(jsFiles)

            .pipe(ngAnnotate())

            .pipe(concat('gmBackToTop-min.js'))

            .pipe(uglify())

            .pipe(gulp.dest(jsDest));
    });

}());
