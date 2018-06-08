import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './js/registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/components/home.jsx';
import Game from './js/components/game';
import NotFound from './js/components/notfound.jsx';

ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route component={NotFound} />
    </Switch>
</Router>,
     document.getElementById('root'));
registerServiceWorker();
