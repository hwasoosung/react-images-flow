import React from 'react';
import ReactDOM from 'react-dom';
import {ImageGrid} from './lib';

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <ImageGrid />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


