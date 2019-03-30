import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message, Link, Divider} from 'antd'
import action from '../../store/action/index'

class Deal extends React.Component {
	constructor(props) {
		super(props)
		this.init()
	}
	init = () => {
    this.props.price({page: 1, size: 10}) // 设置价格
    this.props.exchange() // 兑换手续费
    this.props.tranferFee() // 转账手续费
    this.props.saleFee() // 寄卖手续费
	}
	componentWillMount() {
	}
	/*add = () => {
		render(){
			return (<a href="">添加</a>)
		}
	}*/
	render() {
		const columns1 = [
			{title: '主链', dataIndex: 'chain', key: 'chain', render: value => value || '—',},
			{title: '币种', dataIndex: 'symbol', key: 'symbol', render: value => value || '—',},
			{title: '价格(CNY)', dataIndex: 'price', key: 'price', render: value => value || '—',},
			{title: '可售数量', dataIndex: 'sold', key: 'sold', render: value => value || '—',},
			{title: '操作', dataIndex: 'grade', key: 'grade',
				render: (text, item) => {
					return (
						<div><a>删除</a><Divider type='vertical' /><a>修改</a><Divider type='vertical' /><a>出售明细</a>{/*<a onClick={() => editAction(item)}> <span>编辑</span> </a> <Divider type="vertical" /> <a onClick={() => deleteAction(item)}> <span>删除</span> </a>*/}</div>
					);
				},
			},
		]
		const columns2 = [
			{title: '交易手续费', dataIndex: 'feeRatio', key: 'data_exchange', render: value => value || '—',},
			{title: '操作',
				render: (text, item) => {
					return (<div><a>修改</a></div>);
				},
			},
		]
		const columns3 = [
			{title: '交易手续费', dataIndex: 'feeRatio', key: 'deal_tranferFee', render: value => value || '—',},
			{title: '操作',
				render: (text, item) => {
					return (<div><a>修改</a></div>);
				},
			},
		]
		const columns4 = [
			{title: '寄卖手续费', dataIndex: 'feeRatio', key: 'deal_saleFee', render: value => value || '—',},
			{title: '操作',
				render: (text, item) => {
					return (
						<div><a>修改</a>{/*<a onClick={() => editAction(item)}> <span>编辑</span> </a> <Divider type="vertical" /> <a onClick={() => deleteAction(item)}> <span>删除</span> </a>*/}</div>
					);
				},
			},
		]
		let {deal_price: {rows: dataSource1, count: total}, deal_exchange: data_exchange,} = this.props
		let dataSource2 = [data_exchange]
		let dataSource3 = [{feeRatio: this.props.deal_tranferFee}]
		let dataSource4 = [{feeRatio: this.props.deal_saleFee}]

		return (
			<div>
				<div className="content_wrap">
					<Card title='设置价格' extra={<a >添加</a>} style={{marginBottom: '15px'}}>
						<Table
							columns={columns1}
							dataSource={dataSource1}
							// pagination={this.state.pagination}
							onRow={(record, index) => {
								return {
									onClick: () => {
										this.onRowClick(record, index)
									}
								}
							}}
						/>
					</Card>

					<Card title='兑换手续费' style={{marginBottom: '15px'}}>
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
					<Card title='转账手续费' style={{marginBottom: '15px'}}>
						<Table columns={columns3} dataSource={dataSource3} pagination={false}
							onRow={(record, index) => {
								return {
									onClick: () => {
										this.onRowClick(record, index)
									}
								}
							}}
						/>
					</Card>
					<Card title='寄卖手续费'>
						<Table columns={columns4} dataSource={dataSource4} pagination={false}
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

export default connect(state=>({...state.system}),action.system)(Deal)
