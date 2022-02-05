let mix = require('laravel-mix');

mix
    .js('assets/js/app.js', 'js')
    .postCss('assets/css/tailwind.css', 'css', [
        require('tailwindcss'),
    ])
    .sass('assets/css/app.scss', 'css')
    .setPublicPath('src');

