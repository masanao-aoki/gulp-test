var gulp=require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions','ie > 9'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

//watch
gulp.task('watch', ['autoprefixer'], function(){
	gulp.watch('css/*.css', ['autoprefixer']);
});