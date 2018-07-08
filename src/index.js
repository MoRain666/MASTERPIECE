import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './components/util/registerServiceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './components/util/style/index.css';

import LandingPage from './components/landingPage/landingPage';
import IntroductionView from './components/intoductionView/introductionView';
import Game from './components/Game/mainGameView/index.jsx';
import FinalPage from './components/screen/finalPage/finalPage';
import Score from './components/scoreView/score';
import NotFound from './components/screen/notFoundPage/notfound';

ReactDOM.render(
    <Router>
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/pregame" component={IntroductionView} />
        <Route path="/win" component={FinalPage} />
        <Route path="/lost" component={FinalPage} />
        <Route path="/game" component={Game} />
        <Route path="/score" component={Score} />
        <Route component={NotFound} />
    </Switch>
</Router>,
     document.body);
registerServiceWorker();
