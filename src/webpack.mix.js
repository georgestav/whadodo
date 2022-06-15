require("dotenv").config();
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: "source-map",
    }).sourceMaps();
} else {
    mix.version();
}
console.log(process.env.MODE);
mix.options({
        processCssUrls: false,
    }).browserSync({
        notify: false,
        open: false,
        host: "localhost",
        port: 3000,
        proxy: 'laravel',
    }).version();


mix.ts("resources/js/app.js", "public/js").react();
// mix.sass("resources/scss/index.scss", "public/css")
mix.webpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    }
  });

