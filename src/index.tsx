import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from 'react-redux';
import {store} from './p2-homeworks/h10/bll/store'
import App from './p1-main/m1-ui/u1-app/App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')
)
