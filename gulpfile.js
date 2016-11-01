var gulp      = require('gulp');
var elixir    = require('laravel-elixir');
var Task      = elixir.Task;
var argv      = require('yargs').argv;
var rsync     = require('gulp-rsync');

elixir.extend('moveSource', function() {
  new Task('moveSource', function() {
    return gulp
      .src(
        [
          './src/**/**.html'
        ]
      )
      .pipe(gulp.dest('./build'))
  }).watch(['./src/**']);
});

elixir.extend('update', function() {
  new Task('update', function() {
    return gulp
      .src(
        [
          './src/**/**.html'
        ]
      )
      .pipe(gulp.dest('./build'))
  });
});

elixir(function(mix) {
  mix
    .sass('./src/exemplos/assets/sass/app.scss', './build/exemplos/public/assets/css/app.min.css')
    .sass('./src/slides/assets/sass/app.scss', './build/slides/public/assets/css/app.min.css')

    .browserify('./src/slides/assets/js/reveal.js', './build/slides/public/assets/js/reveal.min.js')

    .moveSource()

    .update()

    .copy('./node_modules/reveal.js/js/reveal.js', './build/slides/public/assets/vendors/reveal-js/js/')
    .copy('./node_modules/reveal.js/plugin/', './build/slides/public/assets/vendors/reveal-js/plugin/')
    .copy('./node_modules/reveal.js/lib/', './build/slides/public/assets/vendors/reveal-js/lib/')

    .copy('./node_modules/reveal.js/css/print', './build/slides/public/assets/vendors/reveal-js/css/print/')
    .copy('./node_modules/reveal.js/css/reveal.css', './build/slides/public/assets/vendors/reveal-js/css/')
    .copy('./node_modules/reveal.js/css/theme/beige.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/black.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/blood.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/league.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/moon.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/night.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/serif.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/simple.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/sky.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/solarized.css', './build/slides/public/assets/vendors/reveal-js/css/theme')
    .copy('./node_modules/reveal.js/css/theme/white.css', './build/slides/public/assets/vendors/reveal-js/css/theme')

    .copy('./node_modules/highlight.js/styles/monokai-sublime.css', './build/slides/public/assets/vendors/reveal-js/lib/css/')

    .copy('./src/slides/assets/images/', './build/slides/public/assets/images')

    .browserSync({
      files: [
        './build/exemplos/**/**.html',
        './build/exemplos/public/assets/css/**/*.css',
        './build/slides/**/**.html',
        './build/slides/public/assets/js/**/**.js'
      ],
      notify: false,
      proxy: argv.HOSTNAME
    });
});
