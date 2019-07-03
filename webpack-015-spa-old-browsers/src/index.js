console.log("index.js");

// import is ECMA6 so  we need npm install babel-loader babel-core babel-preset-env webpack

import style from "./main.css"
import Hello from './js/js_file_A'; // import is ECMA6
import Bye from './js/js_file_B'; // import is ECMA6


console.log(`I'm happy!`);

const arr = [1, 2, 3];
const doIt = () => console.log(...arr);

Hello();
window.doIt = doIt;
Bye();