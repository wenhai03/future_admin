import React from 'react'
import {Button, Row, Col, Card, Modal, Divider } from 'antd';

export default class System extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {}
	render() {
		return (
			<div>
				<Card>
					<Button type='primary'>下发手续费</Button> &nbsp;&nbsp;&nbsp;
					<Button type='primary'>立即归集</Button>
				</Card>
			</div>
		)
	}
}
