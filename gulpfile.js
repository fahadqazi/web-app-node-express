var gulp = require( 'gulp' );
var eslint = require( 'gulp-eslint' );

var jsFiles = [ '*.js', 'src/**/*.js' ];

gulp.task( 'style', () =>  {
    return gulp.src( jsFiles )
    .pipe( eslint() );
} );

