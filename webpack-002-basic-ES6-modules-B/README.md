# Steps to start doing stuff

The main goal of this example **webpack-002-basic-ES6-modules-B** is to solve the problems that Arora WEB broser was raising and compare the results of the build with the previous example **webpack-002-basic-ES6-modules**.
In webpack.config.js **terser-webpack-plugin** was added and `compress` option was set to `false`.

Arora WEB browser was failing to load this example. In the console just **SyntaxError: Parse error** was found. Setting compress:false solves the problem.

## 1) Install node modules

`$ yarn install`

will create ./node_modules

## 2) Development

`$ npm run dev`

will execute the script available in package.json: webpack --mode development

    ./dist folder will be generated 
    ./dist/index.html will be created, taking as a swebpack-002-basic-ES6-modulesource ./src/index.template.ejs
    ./dist/main.js will be created, taking as a source ./src/index.js

## 3) in the case of: $ npm run build

This will be executed: $ webpack --mode production

    ./dist/main.js will be automatically minified out of the box by webpack 4
