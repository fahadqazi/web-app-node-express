var gulp = require( 'gulp' );
var eslint = require( 'gulp-eslint' );

var jsFiles = [ '*.js', 'src/**/*.js' ];

gulp.task('lint', function () {
  return gulp.src( jsFiles ).pipe(eslint({
    'rules':{
        'quotes': [1, 'single'],
        'semi': [1, 'always']
    }
  }))
  .pipe(eslint.format())
  // Brick on failure to be super strict
  .pipe(eslint.failOnError());
});