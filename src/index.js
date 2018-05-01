import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch, Redirect } from 'react-router-dom';
import { Navigation } from './jsx/component/Navigation';
import { Footer } from './jsx/component/Footer';

import Users from './jsx/Users';
import Posts from './jsx/Posts';
import PostDetail from './jsx/PostDetail';
import Albums from './jsx/Albums';
import AlbumDetail from './jsx/AlbumDetail';
import { Page404 } from './jsx/component/Page404';

const App = () =>(
    <Router history={browserHistory}>
        <div>
            <Navigation/>
            <Switch>
                <Route exact path={'/'} render={props => <Users {...props} />} />
                <Route exact path={'/posts/:username/:id'} render={props => <Posts {...props} />} />
                <Route exact path={'/postdetail/:id/comments'} render={props => <PostDetail {...props} />} />
                <Route exact path={'/albums/:username/:id'} render={props => <Albums {...props} />} />
                <Route exact path={'/photos/:id'} render={props => <AlbumDetail {...props} />} />
                <Route component={Page404}/>
            </Switch>
            <Footer />
        </div>
    </Router>
);


ReactDOM.render(<App/>, root);