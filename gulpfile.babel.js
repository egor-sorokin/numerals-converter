const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const header = require('gulp-header');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const assets = require('postcss-assets');
const fs = require('fs');
const path = require('path');
const md5 = require('md5-file');
const eslint = require('gulp-eslint');


function assetsCachebuster(filePath, urlPathname) {
  return fs.statSync(filePath).mtime.getTime().toString(16);
}


gulp.task('css', () => {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([assets({
      basePath: 'dist/',
      loadPaths: ['img'],
      baseUrl: '../',
      cachebuster: assetsCachebuster,
    })]))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('html', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});


gulp.task('browser-sync', () => {
  browserSync.init(null, {
    server: {
      baseDir: './dist',
    },
    open: true,
    notify: false
  });
});

gulp.task('default', gulp.parallel('css', 'js', 'html', 'browser-sync'), () => {
  gulp.watch('src/scss/*.scss', ['css']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/*.html', ['html']);
});
