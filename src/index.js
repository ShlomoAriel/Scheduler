import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom'

import store from 'redux/store/configureStore';
import App from 'components/App';
import routes from 'routes';

import '../style/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App children={routes} />
        </HashRouter>
    </Provider>,
document.getElementById('app'));
