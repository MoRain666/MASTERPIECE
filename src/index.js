import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './js/registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/MainComponents/home.jsx';
import Game from './js/MainComponents/Game/index.jsx';
import NotFound from './js/MainComponents/notfound.jsx';
import PreGame from './js/MainComponents/PregameComponents/PreGame.jsx';
import Score from './js/MainComponents/score';

ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pregame" component={PreGame} />
<<<<<<< HEAD
=======
        <Route path="/win" component={FinalPage} />
        <Route path="/lost" component={FinalPage} />
>>>>>>> 968296d39158d3088ae792186458b5ed9f8dd085
        <Route path="/game" component={Game} />
        <Route path="/score" component={Score} />
        <Route component={NotFound} />
    </Switch>
</Router>,
     document.body);
registerServiceWorker();
