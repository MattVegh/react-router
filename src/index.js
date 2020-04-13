import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppTwo from './AppTwo'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <AppTwo />
  </Router>,
  document.getElementById('root')
);

