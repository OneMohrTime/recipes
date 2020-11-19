/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

const mix = require('laravel-mix');
// const dotenv = require('dotenv');

mix.setPublicPath('public/assets') // generate manifest in this directory

  // JavaScript ES6
  .js('src/scripts/app.js', 'scripts/main.js')
  // .extract([
  //   'fancybox',
  //   'jquery',
  // ])

  // SCSS to CSS
  .sass('src/styles/app.scss', 'styles/main.css')
  // .sourceMaps();

  // Process images + media
  .copyDirectory('src/images', 'images')

  // Live reload browser
  .browserSync({
    watch: true,
    // proxy: process.env.SITE_URL,
    proxy: 'https://recipes.onemohrti.local',
    // files: [
    //   '{*,**/*}.css',
    //   '{*,**/*}.js',
    //   '{*,**/*}.twig'
    // ],
    files: [
      'assets/scripts/*.js',
      'src/scripts/*.js',
      'src/scripts/**/*.js',
      'assets/styles/*.css',
      'src/styles/*.scss',
      'src/styles/**/*.scss',
      'templates/*.twig',
      'templates/**/*.twig'
    ]
  })

  // Additional config
  // .minify() // create sibling *.min file
  // .disableSuccessNotifications()
  // .version()
  .options({
    // autoprefixer: {
    //   options: {
    //     grid: "autoplace"
    //   }
    // },
    // postCss: [
    //   require('autoprefixer')
    // ],
    processCssUrls: false,
  })
;
