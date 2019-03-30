import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message, Link, Divider} from 'antd'
import action from '../../store/action/index'

class Withdraw extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			chain: 'usdt',
			list:[ ]
		}
		this.init()
	}
	init = () => {
		this.props.currencyToken({chain: this.state.chain})
		this.props.integralType({chain: this.state.chain})
	}
	componentWillMount() {
	}
	handleEdit=() =>{}
	render() {
		const columns1 = [
			{title: '币种名称', dataIndex: 'symbol', key: 'symbol', render: value => value || '—',},
			{title: '币种地址', dataIndex: 'address', key: 'address', render: value => value || '—',},
			{title: '精度', dataIndex: 'decimal', key: 'decimal', render: value => value || '0',},
		];
		const columns2 = [
			{title: '积分种类', dataIndex: 'token_name', key: 'token_name',},
			{title: '积分名称', dataIndex: 'name', key: 'name', render: value => value || '—',},
			{title: '操作', dataIndex: 'action', key: 'action',
				render: (text, item) => {
					return (
						<div>
							<a onClick={() => this.handleEdit(item)}>
								<span>修改</span>
							</a>
						</div>
					);
				},
			},
		];
		let {type_integralList: dataSource2, type_coinList: {rows: dataSource1}} = this.props
		console.log('THIS------', this)
		return (
			<div>
				<div className="content_wrap">
					<Card title='币种种类' extra={<a >添加</a>} style={{marginBottom: '15px'}}>
						<Table total columns={columns1} dataSource={dataSource1} pagination={false}
							onRow={(record, index) => {
								return {
									onClick: () => {
										this.onRowClick(record, index)
									}
								}
							}}
						/>
					</Card>

					<Card title='积分种类' extra={<a >添加</a>} style={{marginBottom: '15px'}}>
						<Table columns={columns2} dataSource={dataSource2} pagination={false}
						       onRow={(record, index) => {
							       return {
								       onClick: () => {
									       this.onRowClick(record, index)
								       }
							       }
						       }}
						/>
					</Card>
				</div>

			</div>
		)
	}
}

export default connect(state=>({...state.system}),action.system)(Withdraw)

