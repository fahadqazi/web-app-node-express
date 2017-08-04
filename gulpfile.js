var gulp = require( 'gulp' );
var eslint = require( 'gulp-eslint' );

var jsFiles = [ '*.js', 'src/**/*.js' ];

gulp.task('lint', function () {
  return gulp.src( jsFiles ).pipe(eslint('.eslintrc'))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('inject', function () {
  var wiredep = require('wiredep').stream;
  var inject = require('gulp-inject');

  var injectSrc = gulp.src(['./public/css*.css',
                            './public/js/*.js'], { read: false });
  var injectOptions = {
    ignorePath: '/public'
  };

  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public'
  };

  return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(inject((injectSrc, injectOptions)))
    .pipe(gulp.dest('./src/views'));
});