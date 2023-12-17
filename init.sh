#!/usr/bin/env bash


npm i  npm-check-updates node-sass
npm install
./node_modules/.bin/ncu -u
npm update
${SUDO} chmod -R a+x node_modules
${SUDO} chmod -R +x ./node_modules/.bin
npm rebuild node-sass

cp node_modules/requirejs/bin/r.js build/
cp node_modules/requirejs/require.js www/app/lib

cp node_modules/bootstrap/dist/css/bootstrap.min.css www/assets/css
cp node_modules/bootstrap/dist/js/bootstrap.min.js www/app/js
cp nocp node_modules/@popperjs/core/lib/popper.js www/app/lib

cp nocp node_modules/jquery/dist/jquery.min.js www/app/lib