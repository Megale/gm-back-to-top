
(function(){

    var gulp = require('gulp');
    var concat = require('gulp-concat');  
    var rename = require('gulp-rename');  
    var uglify = require('gulp-uglify'); 

    var jsFiles = ['src/app/config/**/*.js', 'src/app/component/**/*.js', 'src/app/controller/**/*.js'];
    var jsDest = 'dist';

    gulp.task('build', function() {

        return gulp.src(jsFiles)

            .pipe(concat('gmBackToTop.js'))

            .pipe(gulp.dest(jsDest))

            .pipe(rename('gmBackToTop.min.js'))

            .pipe(uglify())

            .pipe(gulp.dest(jsDest));
    });

}());
