#!/bin/bash
#Gulp project creation

  # Running this file from inside the folder your project will be builds a working gulp enviroment

mkdir app dist &&
cd app && mkdir css scss images fonts js jade && cd .. &&
touch index.html &&

  # Here you replace 'foldername' to match your project folder name

cd .. && cp default/gulpfile.js foldername &&
cp default/index.html foldername && cp default/jquery-3.1.1.min.js foldername/app/js && cd foldername && 
cd css && touch style.css && cd .. &&
cd scss && touch style.sass _reset.sass _variables.sass && cd .. &&
cd js && touch main.js && cd .. &&

# Uncomment to create jade file and folder
# cd jade && touch index.jade && cd ../.. &&

npm init &&
# npm install gulp &&
npm install gulp-sass --save-dev &&

# Uncomment to install jade
# npm install gulp-jade --save-dev &&

npm install browser-sync --save-dev &&
gulp watch
