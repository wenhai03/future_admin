import React from 'react'
import { Table, DatePicker, Badge } from 'antd';
import FormSearch from '../../components/FormSearch'
// import './style.less'

// import {bigNumberFilter} from "../../../../future_mall_admin/src/utils/bigNumber";

export default class Bill extends React.Component {
	formList = [
		{type: 'INPUT', placeholder:'请输入搜索关键字', width: 200, field:'keyword'},
		{type: 'SINGLE_DATE', placeholder:'请选择时间', width: 200, field:'dt'},
		{
			type: 'SELECT', placeholder:'全部',initialValue:'0',width: 150, field:'keywordField',
			list: [
				{ id: '0', name: '源用户' },
				{ id: 'original_uid', name: '源用户ID' },
				{ id: 'target_uid', name: '目标用户ID'},
				{ id: 'original_address', name: '源地址' },
				{ id: 'target_address', name: '目标用户地址'},
				{ id: 'tx_hash', name: '交易哈希'},
				{ id: 'business_order_number', name: '订单号'},
				{ id: 'integral_order_umber', name: '积分流水号'},
			]
		},
		{
			type: 'SELECT', placeholder:'全部',initialValue:'2',width: 150, field:'symbol',
			list: [
				{ id: '2', name: '全部代币' },
				{ id: 'eth', name: 'eth' },
				{ id: 'eos', name: 'eos'},
				{ id: 'usdt', name: 'usdt' }
			]
		},
		{
			type: 'SELECT', placeholder:'全部',initialValue:'0',width: 150, field:'transactionType',
			list: [
				{ id: '0', name: '全部交易类型' },
				{ id: '1', name: '充币' },
				{ id: '2', name: '提币'},
				{ id: '3', name: '寄卖' },
				{ id: '4', name: '兑换'}
			]
		},
		{
			type: 'SELECT', placeholder:'全部',initialValue:'0',width: 150, field:'result',
			list: [
				{ id: '0', name: '全部对账结果' },
				{ id: 'normal', name: '对平' },
				{ id: 'abnormal', name: '差错'},
				{ id: 'mutual', name: '手动调账成功' }
			]
		}
	]
	constructor(props) {
		super(props)
	}
	componentWillMount() {}
	handleFilter = () => {

	}
	render() {
		const columns = [
			{title: '交易日期', dataIndex: 'dt', key: 'dt', render: value => value || '-',},
			{title: '代币', dataIndex: 'symbol', key: 'symbol', render: value => value || '-',},
			{title: '交易类型', dataIndex: 'transactionType', key: 'transactionType',
				render: value => {
					let type = {'0': '钱包转入', '1': '钱包转出', '2': '用户提币', '3': '用户充币', '4': '币池转入', '5': '币池转出', '6': '归集', '7': '手续费', '8': '积分转账',}
					return type[value] || '-'
				},
			},
			{title: '对账状态', dataIndex: 'result', key: 'result',
				render: value  => {
					let type = {normal: '正常', abnormal: '异常', manual: '手动调账成功'}
					return <Badge status={value==='normal'? 'success': 'error'} text={type[value]} />
				}
			},
			{title: '差错原因', dataIndex: 'abnormalReason', key: 'abnormalReason', render: value => value || '-',},
			{title: '源用户ID', dataIndex: '', key: '', render: value => value || '-',},
			{title: '目标用户ID', dataIndex: 'targetUid', key: 'targetUid', render: value => value || '-',},
			{title: '源地址', dataIndex: 'originalAddress', key: 'originalAddress', render: value => value || '-',},
			{title: '目标地址', dataIndex: 'targetAddress', key: 'targetAddress', render: value => value || '-',},
			{title: '交易哈希', dataIndex: 'txHash', key: 'txHash', render: value => value || '-',},
			{title: '订单号', dataIndex: 'businessOrderNumber', key: 'businessOrderNumber', render: value => value || '-',},
			{title: '积分流水号', dataIndex: 'integralOrderNumber', key: 'integralOrderNumber', render: value => value || '-',},
			{title: '订单数量', dataIndex: 'orderAmount', key: 'orderAmount', render: value => {return value || '-'},},
			{title: '积分数量', dataIndex: 'integralActualObtain', key: 'integralActualObtain',
				render: value => {
					// return bigNumberFilter(value, 8) || '-'
					return value || '-'
				},
			},
			{title: '手续费', dataIndex: 'fee', key: 'fee', render: value => {return value || '-'},},
			{title: '源积分', dataIndex: 'exOriginalSymbol', key: 'exOriginalSymbol', render: value => {return value || '-'},},
			{title: '目标积分', dataIndex: '', key: '', render: value => {return value || '-'},},
			{title: '源积分数量', dataIndex: 'exTargetSymbol', key: 'exTargetSymbol', render: value => {return value || '-'},},
			{title: '目标积分数量', dataIndex: 'exTargetObtain', key: 'exTargetObtain', render: value => {return value || '-'},},
			{title: '源积分价格', dataIndex: 'exOriginalPrice', key: 'exOriginalPrice', render: value => {return value || '-'},},
			{title: '目标积分价格', dataIndex: 'exTargetPrice', key: 'exTargetPrice', render: value => {return value || '-'},}
		]
		return (
			<div>
				<FormSearch formList={this.formList} filterSubmit={this.handleFilter}/>
				<div className="content_wrap">
					<Table
						className='Table'
						total
						bordered
						columns={columns}
						dataSource={null}
						// pagination={this.state.pagination}
						onRow={(record, index) => {
							return {
								onClick: () => {
									this.onRowClick(record, index)
								}
							}
						}}
					/>
				</div>
			</div>
		)
	}
}
