import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers/index'
import './assets/css/main.scss'

import 'antd/dist/antd.css';
const store = createStore(reducer);
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root'));

