import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './Components/NavMenu/NavMenu';



ReactDOM.render(
    <React.StrictMode>
        <NavMenu></NavMenu>
    </React.StrictMode>,
    document.getElementById('root')
);

//serviceWorker.unregister();