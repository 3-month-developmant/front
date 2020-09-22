import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from './component/Head';

const show = () => {
  if (window.location.pathname !== '/Signin' && window.location.pathname !== '/Signup') {
    ReactDOM.render(
      <Head />, document.querySelector('#head'),
    );
  }
};

ReactDOM.render(
  <App />, document.querySelector('#root'),
);

export default show;
