import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Snake from './components/Snake';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <Snake />
  </Provider>,
  document.querySelector('#root')
);
