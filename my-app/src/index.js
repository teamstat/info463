import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Homepage from './Homepage'
import AF from './AF';
import GM from './GM';
import NT from './NT';
import UZ from './UZ';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="a-f" component={AF} />
      <Route path="g-m" component={GM} />
      <Route path="n-t" component={NT} />
      <Route path="u-z" component={UZ} />
    </Route>
  </Router>,
  document.getElementById('root')
);
