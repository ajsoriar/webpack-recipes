console.log("index.js");

//import React from 'react';
//import ReactDOM from 'react-dom';
//import { Button } from '../lib/Button';
//import MyReactLibrary from './../lib/my-react-library';

/*
const App = () => (
  <div>
    <h1>My UI</h1>
    <h2>React Library</h2>
    <p>Here's an example of button.</p>
    <MyReactLibrary text="Hello man! I am here to stay."></MyReactLibrary>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
*/

/* DO NOT USE JSX */

class App extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(App, {toWhat: 'World'}, null),
  document.getElementById('root')
);

console.log("Library:", Library );

ReactDOM.render(
  React.createElement(Library, null, null),
  document.getElementById('root-2')
);
