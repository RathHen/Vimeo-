import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Carousel from './Carousel';


ReactDOM.render(

    <div>
        <Carousel/>
        <App/>
    </div>,
    document.querySelector('#root')
);


