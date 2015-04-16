var gulp=require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');

gulp.task('autoprefixer', function () {
    return gulp.src('css/pre_css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions','ie > 9'],
            cascade: false
        }))
        .pipe(csscomb())
        .pipe(gulp.dest('css/'));
});

//watch
gulp.task('watch', ['autoprefixer'], function(){
	gulp.watch('css/pre_css/*.css', ['autoprefixer']);
});