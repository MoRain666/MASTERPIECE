import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './js/registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/MainComponents/home.jsx';
import Game from './js/MainComponents/Game/index.jsx';
import NotFound from './js/MainComponents/notfound.jsx';
import PreGame from './js/MainComponents/PregameComponents/PreGame.jsx';
import translator from './js/MainComponents/riddles/translator';
import sequence from './js/MainComponents/riddles/sequence';
import arithmetic from './js/MainComponents/riddles/arithmetic';

ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pregame" component={PreGame} />
        <Route path="/riddles" component={sequence} />
        <Route path="/game" component={Game} />
        <Route component={NotFound} />
    </Switch>
</Router>,
     document.body);
registerServiceWorker();
