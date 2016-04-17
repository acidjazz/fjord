/*
gulp --url "http://fjordlife.myshopify.com/?key=ae7e98dcf84093ac06483c1c4dbad6f1b86fdd70dc5cfcbe456fcd214ae427c9&preview_theme_id=77151233"
*/

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var stylus        = require('gulp-stylus');
var shell       = require('gulp-shell');
var filter      = require('gulp-filter');
var watch       = require('gulp-watch');

var notify = require('gulp-notify');
var coffee = require('gulp-coffee');

var minimist    = require('minimist');

var sourcemaps = require('gulp-sourcemaps');
var objectus = require('objectus');

var knownOptions = {
  string: 'url',
  default: { url: process.env.NODE_ENV }
};

var options = minimist(process.argv.slice(2), knownOptions);

function isChanged(file) {
    return file.event === 'change';
}

var filterChanged = filter(isChanged);

objectus('dat/', function(error, result) {
  if (error) {
    notify(error);
  }
  data = result;
  console.log(data);
});

gulp.task('objectus', function() {
  objectus('dat/', function(error, result) {
    if (error) {
      notify(error);
    }
    data = result
  });
});


gulp.task('serve', function() {
  browserSync.init({
    proxy: options.url,
    browser: "google chrome",
    open: false,
    notify: false,
    injectChanges: false, // cause of css being served from cdn
  });

  gulp.watch('../dat/**/*', ['objectus','stylus']);
  gulp.watch("assets/*.scss", ['sass']);
  gulp.watch("assets/*.otf", ['fonts']);
  gulp.watch("assets/*.jpg", ['images']);
  gulp.watch("sty/*.styl", ['objectus', 'stylus']);
  gulp.watch("cof/*.coffee", ['objectus', 'coffee']);
});


gulp.task('fonts', function() {
  return gulp.src("assets/*.otf")
    .pipe(gulp.dest("assets/"))
    .pipe(shell([
      'theme upload <%= f(file.path) %>'
    ], {
      templateData: {
        f: function (s) {
          // cut away absolute path of working dir for 'theme' cmd to work
          return s.replace(process.cwd() + '/', '')
        }
      }
    }))
    .pipe(browserSync.stream());
});


gulp.task('images', function() {
  return gulp.src("assets/*.jpg")
    .pipe(gulp.dest("assets/"))
    .pipe(shell([
      'theme upload <%= f(file.path) %>'
    ], {
      templateData: {
        f: function (s) {
          // cut away absolute path of working dir for 'theme' cmd to work
          return s.replace(process.cwd() + '/', '')
        }
      }
    }))
    .pipe(browserSync.stream());
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("assets/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("assets/"))
    .pipe(shell([
      'theme upload <%= f(file.path) %>'
    ], {
      templateData: {
        f: function (s) {
          // cut away absolute path of working dir for 'theme' cmd to work
          return s.replace(process.cwd() + '/', '')
        }
      }
    }))
    .pipe(browserSync.stream());
});

gulp.task('coffee', function() {
  gulp.src('cof/**/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true})
      .on('error', notify.onError(function(error) {
        return {title: "Coffee error", message: error.message + "\r\n" + error.filename + ':' + error.location.first_line, sound: 'Pop'};
      }))
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
    .pipe(shell([
      'theme upload <%= f(file.path) %>'
    ], {
      templateData: {
        f: function (s) {
          // cut away absolute path of working dir for 'theme' cmd to work
          return s.replace(process.cwd() + '/', '')
        }
      }
    }))
    .pipe(browserSync.stream());
});


// Compile stylus into CSS & auto-inject into browsers
gulp.task('stylus', function() {
  return gulp.src("sty/fjord.styl")
    .pipe(sourcemaps.init())
    .pipe(stylus({ rawDefine: { data: data } }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets/"))
    .pipe(shell([
      'theme upload <%= f(file.path) %>'
    ], {
      templateData: {
        f: function (s) {
          // cut away absolute path of working dir for 'theme' cmd to work
          return s.replace(process.cwd() + '/', '')
        }
      }
    }))
    .pipe(browserSync.stream());
});

gulp.task('liquid', function() {
  return gulp.src('**/*.liquid')
    .pipe(watch('**/*.liquid'))
    .pipe(filterChanged)
    .pipe(shell([
      'theme upload <%= f(file.path) %>'
    ], {
      templateData: {
        f: function (s) {
          // cut away absolute path of working dir for 'theme' cmd to work
          return s.replace(process.cwd() + '/', '')
        }
      }
    }))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'liquid']);
