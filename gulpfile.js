var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    postcss = require('gulp-postcss'),
    atImport = require('postcss-import'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    mqpacker = require('css-mqpacker'),
    lost = require('lost'),
    precss = require('precss'),
    cp = require('child_process'),
    exec = cp = require('child_process').exec,
    cssnext = require('postcss-cssnext')
;

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'bundle exec jekyll';

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    // return cp.spawn( 'jekyll' , ['build'], {stdio: 'inherit'})
    //     .on('close', done);
    return exec('bundle exec jekyll build').on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['css', 'jekyll-build'], function() {
    browserSync.init({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('css', function () {
  var processors = [
  atImport,
  cssnext,
  precss,
  mqpacker,
  lost,
  cssnano
  ];
  return gulp.src('./src/style.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.stream())
    .pipe(gulp.dest('assets/css'));
});

// gulp.task('serve', ['css'], function() {

//   browserSync.init({
//     proxy: "http://localhost:4000"
//   });

//   gulp.watch("src/**/*.css", ['css']);
//   gulp.watch("*.html").on('change', browserSync.reload);
// });

gulp.task('watch', function () {
    gulp.watch('src/**/*.css', ['css']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);