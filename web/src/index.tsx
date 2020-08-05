import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// injeta algo em um elemento (nesse caso, injeta o App na div root)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);