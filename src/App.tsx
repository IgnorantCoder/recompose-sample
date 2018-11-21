import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import Fetch from './components/Fetch';
import Handler from './components/Handler';
import HandlerWithLifecycle from './components/HandlerWithLifecycle';

const component: React.SFC = () => {
    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/fetch'} component={Fetch} />
                <Route
                    exact
                    path={'/handler'}
                    render={() => (<Handler text={'Hello world.'}/>)} />
                <Route
                    exact
                    path={'/handler-with-lifecycle'}
                    render={() => (<HandlerWithLifecycle text={'Hello world2.'}/>)} />
            </Switch>
        </Router>
    );
};

export default component;
