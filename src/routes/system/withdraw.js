import React from 'react'
import {connect} from 'react-redux'
import moment from "moment"
import { Table, Card, Modal, Input, Button,DatePicker  , Form, Select, message, Link, Divider} from 'antd'
import action from '../../store/action/index'
const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker

class Withdraw extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			withdrawInfo: {}
		}
		this.init()
	}
	init = () => {
		this.props.withdrawFee({page: 1, size: 10}) //
		/*this.props.achieveBonus() // */
	}
	componentWillMount() {
	}
	handleModal = (item, type, title)  => {
		if (item) {
			this.setState({withdrawInfo: item, type, title, isVisible: true})
		} else {
			this.setState({type, title, isVisible: true})
		}
	}
	render() {
		const columns1 = [
			{title: '主链', dataIndex: 'chain_type', key: 'chain_type',
				render: value => {
					const type = {0: 'ETH', 1: 'EOS', 2: 'BTC', 3: 'USDT'}
					return type[value] || '-'
				},
			},
			{title: '币种名称', dataIndex: 'token_name', key: 'token_name', render: value => value || '-',},
			{title: '手续费', dataIndex: 'fee_rate', key: 'fee_rate',
				render: (value, item) => {
					// const isUsdt = item.chain_type === 3
					return value + '%' || '-'
					/*const isUsdt = item.chain_type === 3
					return isUsdt ? minusDecimal(value, item.decimal) : `${value}%`*/
				},
			},
			{title: '最小提币数量', dataIndex: 'min_pick_amount', key: 'min_pick_amount',
				render: (value, item) => {
					return value || '-'
					// return text ? minusDecimal(text, item.decimal || 18) : 0
				},
			},
			{title: '封顶金额', dataIndex: 'max_amount', key: 'max_amount',
				render: (value, item) => {
					return value || '-'
					// return text ? minusDecimal(text, item.decimal || 18) : 0
				},
			},
			{title: '开始时间', dataIndex: 'begin_time', key: 'begin_time', render: value => (value ||  '-'),},
			{title: '结束时间', dataIndex: 'end_time', key: 'end_time', render: value => (value || '-'),},
			{title: '操作', dataIndex: 'action', key: 'action',
				render: (text, item) => {
					return (
						<span>
							<a onClick={() => {
								this.handleModal(item, 'edit1', '编辑提币手续费')
							}}>编辑</a>
							<Divider type="vertical" />
							<a >删除</a>
							{/*<a onClick={() => showModal(item)}>修改</a>
            <Divider type="vertical" />
            <a onClick={() => deleteFun(item)}>
              <span>删除</span>
            </a>*/}
          </span>
					)
				},
			},
		]
		const columns2 = [
			{title: '分销等级', dataIndex: 'name', key: 'name', render: value => value || '—',},
			{title: '分红比例', dataIndex: 'rate', key: 'rate', render: value => value || '-',},
			{title: '操作', dataIndex: 'action', key: 'action',
				render: (text, item) => {
					return (
						<div>
							<a>编辑</a>
							<a>删除</a>
						</div>
					)
				},
			},
		]
		console.log('tthis------', this)
		let {withdrawFeeList: {rows: dataSource1, count: total}} = this.props
		return (
			<div>
				<div className="content_wrap">
					<Card title='提币手续费' extra={<a onClick={() => {
						this.handleModal('', 'create1', '新增提币手续费')
					}}>添加</a>} style={{marginBottom: '15px'}}>
						<Table total columns={columns1} dataSource={dataSource1} pagination={false}/>
					</Card>

					<Card title='提币额度管理' extra={<a >添加</a>} style={{marginBottom: '15px'}}>
						<Table columns={columns2} dataSource={null} pagination={false}/>
					</Card>
				</div>
				<Modal title={this.state.title} visible={this.state.isVisible} onOk={this.handleSubmit}
		       onCancel={()=>{
			       this.WithdrawForm.props.form.resetFields()
			       this.setState({
				       isVisible: false,
				       withdrawInfo: {}
			       })
		       }}
				>
					<WithdrawForm withdrawInfo={this.state.withdrawInfo} type={this.state.type} wrappedComponentRef={(ref) => this.WithdrawForm = ref }/>
				</Modal>
			</div>
		)
	}
}

export default connect(state=>({...state.system}),action.system)(Withdraw)

class WithdrawForm extends React.Component{

	handleTimeChange =(value) => {
	   console.log('value------', value)
	}
	render() {
		const { getFieldDecorator } = this.props.form
		const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 16}}
		const withdrawInfo = this.props.withdrawInfo || {}
		const type = this.props.type
		const chain_type = this.props.withdrawInfo.chain_type == '3'?'usdt':'eth'

		console.log('chain_type------', chain_type)
		console.log('type66------', type)
		console.log('withdrawInfo------', withdrawInfo)
		if (type === 'edit1' || type === 'create1' ) {
			return(
				<Form layout='horizontal'>
					<FormItem label="选择主链" {...formItemLayout}>
						{getFieldDecorator('chain_type',{
							initialValue: chain_type,
							rules: [{ required: true, message: '请输入选择主链!'}]
						})(<Select disabled={type==='edit1'?true: false}>
							<Option value={'usdt'}>{'usdt'}</Option>
							<Option value={'eth'}>{'eth'}</Option>
							<Option value={'eos'}>{'eos'}</Option>
						</Select>)
						}
					</FormItem>
					<FormItem label="选择币种" {...formItemLayout}>
						{getFieldDecorator('token_name',{
							initialValue: withdrawInfo.token_name,
							rules: [{ required: true, message: '请选择币种!'}]
						})(<Select>
							<Option value={'USDT'}>{'USDT'}</Option>
							<Option value={'PPTR'}>{'PPTR'}</Option>
						</Select>)
						}
					</FormItem>
					<FormItem label="手续费" {...formItemLayout}>
						{getFieldDecorator('fee_rate',{
							initialValue: withdrawInfo.fee_rate,
							rules: [{ required: true, message: '请输入手续费!'}]
						})(<Input type="text" placeholder="请输入手续费"/>)
						}
					</FormItem>
					<FormItem label="最小数量" {...formItemLayout}>
						{getFieldDecorator('min_pick_amount',{
							initialValue: withdrawInfo.min_pick_amount,
							rules: [{ required: true, message: '请输入最小数量!'}]
						})(<Input type="text" placeholder="请输入最小数量"/>)
						}
					</FormItem>
					<FormItem label="封顶金额" {...formItemLayout}>
						{getFieldDecorator('max_amount',{
							initialValue: withdrawInfo.max_amount,
							rules: [{ required: true, message: '请输入最小数量!'}]
						})(<Input type="text" placeholder="请输入最小数量"/>)
						}
					</FormItem>
					<FormItem label="时间段11" {...formItemLayout}>
						{getFieldDecorator('indirect',{
							rules: [{ required: true, message: '请输入封顶金额!'}]
						})(<RangePicker defaultValue={[moment("2019-3-25"), moment("2019-3-29")]} onChange={this.handleTimeChange} format={'YYYY-MM-DD'}/>)
						}
					</FormItem>
				</Form>
			)
		}
	}
}

WithdrawForm = Form.create({})(WithdrawForm)
