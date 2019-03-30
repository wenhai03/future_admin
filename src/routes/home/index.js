import React, {Component} from 'react'
import {Tabs} from 'antd'
import SubHeader from '../../components/SubHeader'
import CardBox from '../../components/CardBox'
import { Chart, Tooltip, Axis, Legend, Line, Point } from "viser-react"
const {TabPane} = Tabs

const DataSet = require("@antv/data-set")

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cardData: [
				{name: 'USDT余额', val: '' || 0},
				{name: '待提币订单', val: '' || 0},
				{name: '失败订单', val: '' || 0}
			],
			sourceData: [
				{ dt: '2019-3-20', samedayRechargeAmount: '7.0', samedayTurnoutAmount: '3.9' },
				{ dt: '2019-3-21', samedayRechargeAmount: '6.9', samedayTurnoutAmount: '4.2' },
				{ dt: '2019-3-22', samedayRechargeAmount: '9.5', samedayTurnoutAmount: '5.7' },
				{ dt: '2019-3-23', samedayRechargeAmount: '14.5', samedayTurnoutAmount: '8.5' },
				{ dt: '2019-3-24', samedayRechargeAmount: '18.4', samedayTurnoutAmount: '11.9' },
				{ dt: '2019-3-25', samedayRechargeAmount: '21.5', samedayTurnoutAmount: '15.2' },
				{ dt: '2019-3-26', samedayRechargeAmount: '25.2', samedayTurnoutAmount: '17.0' },
			]
		}

		this.initChart()
	}
	initChart =() => {

	}
	render() {
		const dv = new DataSet.View().source(this.state.sourceData)
		dv.transform({
			type: "fold",
			fields: ["samedayRechargeAmount", "samedayTurnoutAmount"],
			key: "city",
			value: "temperature"
		})

		const data = dv.rows

		const scale = [{dataKey: "dt", min: 0, max: 1}]
		return (
			<div>
				<SubHeader/>
				<CardBox cardData={this.state.cardData}/>

				<div className='route_main'>
					<Chart forceFit height={400} data={data} scale={scale}>
						<Tooltip />
						<Axis />
						<Legend />
						<Line position="dt*temperature" color="city" />
						<Point
							position="dt*temperature"
							color="city"
							size={4}
							style={{ stroke: "#fff", lineWidth: 1 }}
							shape="circle"
						/>
					</Chart>
				</div>
			</div>
		)
	}
}
