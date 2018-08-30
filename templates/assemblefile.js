
var autoprefixer = require('gulp-autoprefixer');
var assemble = require('assemble');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var del = require('del');
var extname = require('gulp-extname');
var include = require("gulp-include");
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var watch = require( 'base-watch' );
var uglify = require('gulp-uglify');

var app = assemble();

app.use( watch() );

// Config
//
var config = {
  "project" : {
    "shortname" : "realchange" // Used to name generated css and javascript
  },
  "paths" : {
    "src" : {
      html: [
        'src/_components/**/*.hbs',
        'src/_layouts/*.hbs',
        'src/pages/*.hbs',
        'src/pages/**/*.hbs'
      ],
      assets: [
        'src/assets/**'
      ],
      css: [
        'src/_components/**/*.scss',
        'src/css/sass/*.scss',
        'src/css/sass/**/*.scss'
      ],
      fonts: [
        'src/fonts/**'
      ],
      js: [
        'src/js/**'
      ]
    },
    "dist" : {
      "html": "dist",
      "assets" : "dist/assets",
      "css" : "dist",
      "js" : "dist/assets"
    },
    "server": "./dist"
  }
};

// Clean
//
app.task('clean', function() {
  return del('dist/*');
});

// Fonts
//
app.task('assets', function() {
  return app.src(config.paths.src.assets)
    .pipe(app.dest(config.paths.dist.assets));
});

// SASS
//
app.task('sass:main', function() {

  return app.src('src/css/sass/main.scss')
    // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
    .pipe(concat(config.project.shortname + '.css'))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 3 versions'],
      cascade: false
    }))
    .pipe(app.dest(config.paths.dist.css))
    .pipe(browserSync.stream());
});

app.task('sass:styleguide', function() {

  return app.src('src/css/sass/styleguide.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(concat(config.project.shortname + '.styleguide.css'))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 3 versions'],
      cascade: false
    }))
    .pipe(app.dest(config.paths.dist.css))
    .pipe(browserSync.stream());
});

// HTML
//
app.task('html', function() {

  handlebars = require('handlebars');
  helpers = require('handlebars-helpers')({
    handlebars: handlebars
  });

  app.partials(['src/_components/**/*.hbs']);
  app.layouts('src/_layouts/*.hbs');
  app.pages(['src/pages/*.hbs', 'src/pages/**/*.hbs']);
  app.data({project: config.project});

  return app.toStream('pages', {layout: 'default'})
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest(config.paths.dist.html))
    .pipe(browserSync.reload({ stream: true }));
});

// JS
//
app.task('js', function() {
  return app.src(config.paths.src.js + 'main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {beep: true}))
    .pipe(include())
    .pipe(uglify())
    .pipe(concat(config.project.shortname + '.js'))
    .pipe(app.dest(config.paths.dist.js))
    .pipe(browserSync.reload({stream: true}));
});

// Serve
//
app.task('serve', function() {

  browserSync.init({
    server: {
      baseDir: config.paths.server,
      // directory: true
    },
    notify: false,
    open: true
  });

  app.watch(config.paths.src.css, ['sass:main', 'sass:styleguide']);
  app.watch(config.paths.src.assets, ['assets']);
  app.watch(config.paths.src.html, ['html']);
  app.watch(config.paths.src.js, ['js']);

});

// Default task
//
app.task('default', ['clean', 'assets', 'html', 'js', 'sass:main', 'sass:styleguide', 'serve']);

// expose to assemble's CLI
//
module.exports = app;
