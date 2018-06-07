import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/components/home.jsx';
import Products from './js/components/products.jsx';
import NotFound from './js/components/notfound.jsx';

ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Products} />
        <Route component={NotFound} />
    </Switch>
</Router>,
     document.getElementById('root'));
registerServiceWorker();
