import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<App />, rootEl)
});
