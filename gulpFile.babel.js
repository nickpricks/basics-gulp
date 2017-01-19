'use strict';

import gulp from 'gulp';
import gUtil from 'gulp-util';
import gulpDebug from 'gulp-debug';
import gulpLoadPlugins from 'gulp-load-plugins';

import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

import config from './config';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Lint JavaScript
gulp.task('lint', () => gulp.src([config.APP_PATHS.GULP_SCRIPTS, '!node_modules/**'])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.if(!browserSync.active, $.eslint.failAfterError()))
);

// Optimize images
gulp.task('images', () => gulp.src(config.APP_PATHS.GULP_IMAGES)
  .pipe($.cache($.imagemin({
    progressive: true,
    interlaced: true
  })))
  .pipe(gulp.dest('build/images'))
  .pipe($.size({ title: 'images' }))
);

// Copy all files at the root level (app)
gulp.task('copy', () =>
  gulp.src([
    'app/*',
    '!app/*.html',
    'node_modules/apache-server-configs/build/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('build'))
    .pipe($.size({ title: 'copy' }))
);

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];
  return gulp.src([
    config.APP_PATHS.GULP_SCSS,
    config.APP_PATHS.GULP_CSS
  ])
    // .pipe($.newer('.tmp/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    // .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({ title: 'styles' }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('build/styles'));
    // .pipe(gulp.dest('.tmp/styles'));
});

// Concatenate and minify JavaScript.
gulp.task('scripts', () =>
  gulp.src([
    './app/scripts/main.js'
  ])
    // .pipe($.newer('.tmp/scripts'))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    // .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.concat('main.min.js'))
    .pipe($.uglify({ preserveComments: 'some' }))
    // Output files
    .pipe($.size({ title: 'scripts' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('build/scripts'))
    // .pipe(gulp.dest('.tmp/scripts'))
);

// Scan your HTML for assets & optimize them
gulp.task('html', () => {
  return gulp.src(config.APP_PATHS.GULP_HTML)
    .pipe($.useref({
      // searchPath: '{.tmp,app}',
      noAssets: true
    }))

    // Minify any HTML
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    })))
    // Output files
    .pipe($.if('*.html', $.size({ title: 'html', showFiles: true })))
    .pipe(gulp.dest('build'));
});

// Clean output directory
gulp.task('clean', () => del(['.tmp', 'build/*', '!build/.git'], { dot: true }));

// gulp.task('debug', ['default'], cb, () => {
//  gUtil.log('Gulp is debugging!');
//  runSequence(
//    'styles',
//    ['lint', 'html', 'scripts', 'images', 'copy'],
//    cb
//  );
//  return gulp.src('foo.js')
//    .pipe(gulpDebug({title: 'unicorn:'}))
//    .pipe(gulp.dest('build'));
// });

// Watch files for changes & reload
gulp.task('serve', ['scripts', 'styles'], () => {
  gUtil.log('Gulp is serving and watching !');
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'Nick-gulp-basics',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    server: ['build'],
    port: 3000
  });

  gulp.watch([config.APP_PATHS.GULP_HTML], reload);
  gulp.watch([config.APP_PATHS.GULP_SCSS, config.APP_PATHS.GULP_CSS], ['styles', reload]);
  gulp.watch([config.APP_PATHS.GULP_SCRIPTS], ['lint', 'scripts', reload]);
  gulp.watch([config.APP_PATHS.GULP_IMAGES], reload);
});

// Build and serve the output from the build build
gulp.task('serve:build', ['default'], () => {
  gUtil.log('Gulp is building for prod!');
  browserSync({
    notify: false,
    logPrefix: 'Nick-gulp-basics',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    server: 'build',
    port: 3001
  });
});

// Build production files, the default task
gulp.task('default', ['clean'], cb => {
  gUtil.log('Gulp is building!');
  runSequence(
    'styles',
    ['lint', 'html', 'scripts', 'images', 'copy'],
    cb
  );
});
