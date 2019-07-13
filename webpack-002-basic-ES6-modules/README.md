# Steps to start doing stuff

The main goal of this example is mixing js/* files included by index.js in a bundle. 
This work is done by webpack during the building task, thanks to `npm install babel-loader babel-core babel-preset-env webpack`

## 1) $ yarn install

will creatte ./node_modules

## 2) $ npm run dev

will execute the script available in package.json: webpack --mode development

    ./dist folder will be generated 
    ./dist/index.html will be created, taking as a source ./src/index.template.ejs
    ./dist/main.js will be created, taking as a source ./src/index.js

## 3) in the case of: $ npm run build

This will be executed: $ webpack --mode production

    ./dist/main.js will be automatically minified out of the box by webpack 4
