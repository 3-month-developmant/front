import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from './component/Head';

ReactDOM.render(
    <Head />,document.querySelector('#head')
);
ReactDOM.render(
    <App />,document.querySelector('#root')
);