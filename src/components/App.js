// App.js
import React from 'react';

const App = () => {
  return (
    <div id="main">
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
    </div>
  );
};

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
