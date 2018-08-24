###Steps to start doing stuff

Dependencies
This is everything you’ll need:

// For showcasing our docs
yarn add react react-dom
// For bundling our library and docs
yarn add webpack parcel-bundler webpack-cli webpack-node-externals "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env webpack-node-externals -D

####1) $ yarn install

will creatte ./node_modules

####2) $ npm run dev

will execute the script available in package.json: webpack --mode development

    ./dist folder will be generated 
    ./dist/index.html will be created, taking as a source ./src/index.template.ejs
    ./dist/main.js will be created, taking as a source ./src/index.js

####3) in the case of: $ npm run build

This will be executed: $ webpack --mode production

    ./dist/main.js will be automatically minified out of the box by webpack 4

####4) Read

https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai