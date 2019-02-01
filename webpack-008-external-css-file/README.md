# Webpack example 007 basic config inline css and js

## Steps to start doing stuff

### 1) $ yarn install

will creatte ./node_modules

### 2) $ npm run dev

will execute the script available in package.json: webpack --mode development

    ./dist folder will be generated 
    ./dist/index.html will be created, taking as a source ./src/index.template.ejs
    ./dist/main.js will be created, taking as a source ./src/index.js

### 3) in the case of: $ npm run build

This will be executed: $ webpack --mode production

    ./dist/main.js will be automatically minified out of the box by webpack 4

## Notes

### What we use

npm install style-loader --save-dev
npm install css-loader --save-dev
npm install sass-loader node-sass --save-dev
npm install --save-dev mini-css-extract-plugin

### Important stuff

The styles will be in an external .css file

### Read more here

https://webpack.js.org/plugins/mini-css-extract-plugin/#advanced-configuration-example