function require(path) {
    'use strict'
    var xhr = new XMLHttpRequest();

    if (path[0] === '.') path = path.substr(2);

    path += '.js';

    var module = {
        exports: {}
    };

    xhr.open('GET', path, false); // Synchronous XMLHttpRequest :)
    xhr.send();

    var code = xhr.responseText;

    console.log("code:", code);

    eval(code);

    return module.exports;
}