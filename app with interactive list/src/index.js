import 'babel-polyfill'; // changes es6 to es5, // the elements that babel cant read alone
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // web[acl cam o,[prt css fo;es as well
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);