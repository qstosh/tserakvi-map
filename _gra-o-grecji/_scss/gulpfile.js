var gulp = require('gulp');
var plumber = require('gulp-plumber');

var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'Icons';

gulp.task('iconfont', function () {
    gulp.src(['icons/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            path: 'scss',
            targetPath: '../base/_gulp-icons.scss',
            fontPath: '../icons/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            normalize: true
        }))
        .pipe(gulp.dest('icons/'));
});

gulp.task('sass', function () {
    return sass('style.scss', {
        style: 'compressed',
        sourcemap: true
    })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write())
        .pipe(prefix({
            browsers: ['last 6 versions', 'ie 9'],
            cascade: false,
            remove: false
        }))
        .pipe(plumber())
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['iconfont', 'sass'], function () {
    // gulp.watch('**/*.scss', ['sass']);
});

gulp.task('watch', ['iconfont', 'sass'], function () {
    gulp.watch('**/*.scss', ['sass']);
});