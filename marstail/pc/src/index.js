import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
import Home from './js/component/pages/home';
import About from './js/component/pages/about';
import Community from './js/component/pages/community';
import Partnership from './js/component/pages/partnership';
import Contact from './js/component/pages/contact';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <div>
        <Home/>
        <About/>
        <Community/>
        <Partnership/>
        <Contact/>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
