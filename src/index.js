import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'


import  BlogContextProvider  from './Context/BlogContext'


ReactDOM.render(
  <BlogContextProvider>
  <Router>
    <App />
  </Router>
  </BlogContextProvider>,
  document.getElementById('root')
);

