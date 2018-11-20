import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Router, Route, browserHistory } from 'react-router'


import ScoreContainer from './components/ScoreBoard/ScoreContainer'
import Page404 from './components/Page404'
import Contador from './components/Contador'



ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <Route path="/score" component={ScoreContainer} />
            <Route path="/contador" component={Contador} />
            <Route path="*" component={Page404} />
        </Route>
    </Router>
    , document.getElementById('app'));  
serviceWorker.unregister();
