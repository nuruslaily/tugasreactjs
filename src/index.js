import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import BlogpostMahasiswa from "./container/BlogpostMahasiswa/BlogpostMahasiswa";
import * as serviceWorker from 'register-service-worker';
import {render} from 'react-dom/cjs/react-dom.development';

ReactDOM.render( <BlogpostMahasiswa />,  document.getElementById('content'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
