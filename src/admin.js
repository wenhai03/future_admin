import React from 'react'
import {Row, Col} from 'antd'

import './static/css/common.less'
import Header from './components/Header'
import MenuLeft from './components/MenuLeft'

export default class Admin extends React.Component{

	render () {
		return (
			<Row className='container'>
				<Col span="4" className="nav-left">
					<MenuLeft />
				</Col>

				<Col span="20" className="main">
					<Header/>
					<Row className="content">
						{this.props.children}
					</Row>
				</Col>
			</Row>
		)
	}
}
