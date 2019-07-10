import "./components/sideMenu/sideMenu";
import preact from 'preact';

// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */

console.log("index.js");

// import is ECMA6 so  we need npm install babel-loader babel-core babel-preset-env webpack

import "./css/main.css"
import Hello from './js/js_file_A'; // import is ECMA6
window.sideMenu.init("sideMenu");
import Bye from './js/js_file_B'; // import is ECMA6
import App from './app.js';

console.log(`I'm happy!`);

const arr = [1, 2, 3];
const doIt = () => console.log(...arr);

Hello();
window.doIt = doIt;
Bye();
App.init();

const reactRootNode = document.getElementById("root");

import { h, render, Component } from 'preact';

class Clock extends Component {
    constructor() {
        super();
        // set initial time:
        this.state.time = Date.now();
    }

    componentDidMount() {
        // update time every second
        this.timer = setInterval(() => {
            this.setState({ time: Date.now() });
        }, 1000);
    }

    componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
    }

    render(props, state) {
        let time = new Date(state.time).toLocaleTimeString();
        return <span>{ time }</span>;
    }
}

// render an instance of Clock into <body>:
render(<Clock />, reactRootNode);