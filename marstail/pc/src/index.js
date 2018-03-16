import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
import Home from './js/component/pages/home';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
