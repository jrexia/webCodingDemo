import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './transition.css'
import 'antd/dist/antd.css';
import Login from './page/login';
import { Provider } from 'react-redux';
import store from './store';
// Provider把store提供给Provider组件内所有的子组件,里面的每个组件都可以连接 store
const App=(
    <Provider store={store}>
        <Login />
    </Provider>
);
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
