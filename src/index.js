import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import Router from './router'

/*import {Provider} from 'react-redux';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';*/

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('root')
)
/*ReactDOM.render(
		<Router />
	,
	document.getElementById('root')
)*/
