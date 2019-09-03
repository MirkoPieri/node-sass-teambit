let mix = require('laravel-mix');


mix
.js('src/js/script.js', 'public/js/')
.sass('src/scss/master.scss', 'public/css/')
.copyDirectory('src/html', 'public/')
;
