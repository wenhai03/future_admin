import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Modal, Input, Button, Form, Select, message, Link, Divider} from 'antd'
import action from '../../store/action/index'
const FormItem = Form.Item
const Option = Select.Option

class Bonus extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			isVisible: false,
			bonusInfo: {}
		}
		this.init()
	}
	init = () => {
		this.props.fixedBonus({page: 1, size: 10}) // 固定分红
		this.props.achieveBonus() // 分销分红
		this.props.shareBonus() // 业绩分红
	}
	componentWillMount() {
	}
	handleModal = (item, type, title)  => {
		if (item) {
			this.setState({bonusInfo: item, type, title, isVisible: true})
		} else {
			this.setState({type, title, isVisible: true})
		}
	}
	handleSubmit = () => {

	}
	render() {
		const columns1 = [
			{title: '积分名称', dataIndex: 'symbol', key: 'symbol', render: value => value || '—',},
			{title: '数量', dataIndex: 'amount', key: 'amount', render: (value, item) => {return value || '0'},},
			{title: '操作', dataIndex: 'action', key: 'action',
				render: (text, item) => {
					return (
						<div>
							<a onClick={() => {
								this.handleModal(item, 'edit1', '编辑固定分红')
							}}>编辑</a>
						</div>
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
							<a onClick={() => {
								this.handleModal(item, 'edit2', '编辑分销分红')
							}}>编辑</a>
							<Divider type='vertical'/>
							<a>删除</a>
						</div>
					)
				},
			},
		]
		const columns3 = [
			{title: '积分名称', dataIndex: 'symbol', key: 'symbol', render: value => value || '—',},
			{title: '业绩等级', dataIndex: 'grade', key: 'grade', render: value => value || '-',},
			{title: '业绩分红比例', dataIndex: 'ratio', key: 'ratio', render: value => value || '-',},
			{title: '操作', dataIndex: 'action', key: 'action',
				render: (text, item) => {
					return (
						<div>
							<a onClick={() => {
								this.handleModal(item, 'edit3', '编辑业绩分红')
							}}>编辑</a>
							<Divider type='vertical'/>
							<a>删除</a>
						</div>
					)
				},
			},
		]
		console.log('tthis------', this)
		let dataSource1 = [this.props.bonus_fixed]
		let {bonus_share: dataSource2,
			bonus_achieve: {rows: dataSource3, count: total}} = this.props
		return (
			<div>
				<div className="content_wrap">
					<Card title='固定分红' extra={<a onClick={() => {
						this.handleModal('', 'create1', '新增固定分红')
					}}>添加</a>} style={{marginBottom: '15px'}}>
						<Table columns={columns1} dataSource={dataSource1} pagination={false}/>
					</Card>

					<Card title='分销分红' extra={<a onClick={() => {
						this.handleModal('', 'create2', '新增分销分红')
					}}>添加</a>} style={{marginBottom: '15px'}}>
						<Table columns={columns2} dataSource={dataSource2} pagination={false}/>
					</Card>
					<Card title='业绩分红' extra={<a onClick={() => {
						this.handleModal('', 'create3', '新增业绩分红')
					}}>添加</a>} style={{marginBottom: '15px'}}>
						<Table total columns={columns3} dataSource={dataSource3}/>
					</Card>
				</div>

				<Modal title={this.state.title} visible={this.state.isVisible} onOk={this.handleSubmit}
					onCancel={()=>{
						this.bonusForm.props.form.resetFields()
						this.setState({
							isVisible:false,
							bonusInfo:''
						})
					}}
				>
					<BonusForm bonusInfo={this.state.bonusInfo} type={this.state.type} wrappedComponentRef={(ref) => this.bonusForm = ref }/>
				</Modal>
				</div>
		)
	}
}

export default connect(state=>({...state.system}),action.system)(Bonus)

class BonusForm extends React.Component{
	render() {
		const { getFieldDecorator } = this.props.form
		const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 16}}
		const bonusInfo = this.props.bonusInfo || {}
		const type = this.props.type
		console.log('type66------', type)
		console.log('bonusInfo------', bonusInfo)
		if (type === 'edit1' || type === 'create1') {
			return(
				<Form layout='horizontal'>
					<FormItem label="积分种类" {...formItemLayout}>
						{getFieldDecorator('chain',{
								initialValue: bonusInfo.chain,
								rules: [{ required: true, message: '请选择积分种类!'}]
							})(<Select>
									<Option value={'PPTR'}>{'PPTR'}</Option>
									<Option value={'USDT'}>{'USDT'}</Option>
								</Select>)
						}
					</FormItem>
					<FormItem label="数量" {...formItemLayout}>
						{getFieldDecorator('amount',{
								initialValue: bonusInfo.amount,
								rules: [{ required: true, message: '请输入数量'}],
							})(<Input type="text" placeholder="请输入数量"/>)
						}
					</FormItem>
				</Form>
			)
		} else if (type === 'edit2' || type === 'create2'){
			return(
				<Form layout='horizontal'>
					<FormItem label="层级类型" {...formItemLayout}>
						{getFieldDecorator('username',{
								initialValue: bonusInfo.username
							})(<Input type="text" placeholder="有限层" disabled={type === 'edit2'?true:false}/>)
						}
					</FormItem>
					<FormItem label="层级名称" {...formItemLayout}>
						{getFieldDecorator('name',{
								initialValue: bonusInfo.name
							})(<Input type="text" placeholder="请输入层级名称"/>)
						}
					</FormItem>
					<FormItem label="分红比例(%)" {...formItemLayout}>
						{getFieldDecorator('rate',{
								initialValue: bonusInfo.rate
							})(<Input type="number" placeholder="请输入分红比例"/>)
						}
					</FormItem>
				</Form>
			)
		} else if (type === 'edit3' || type === 'create3') {
			return(
				<Form layout='horizontal'>
					<FormItem label="积分种类" {...formItemLayout}>
						{getFieldDecorator('symbol',{
							initialValue: bonusInfo.symbol,
							rules: [{ required: true, message: '请选择积分种类!'}]
						})(<Select>
							{/*<Option value={'PPTR'}>{'PPTR'}</Option>*/}
							<Option value={'USDT'}>{'USDT'}</Option>
						</Select>)
						}
					</FormItem>
					<FormItem label="业绩等级" {...formItemLayout}>
						{getFieldDecorator('grade ',{
							initialValue: bonusInfo.grade,
							rules: [{ required: true, message: '请输入业绩等级!'}]
						})(<Input type="text" placeholder="请输入业绩等级"/>)
						}
					</FormItem>
					<FormItem label="业绩分红比例(%)" {...formItemLayout}>
						{getFieldDecorator('ratio',{
							initialValue: bonusInfo.ratio,
							rules: [{ required: true, message: '请输入业绩分红比例!'}]
							})(<Input type="text" placeholder="请输入业绩分红比例"/>)
						}
					</FormItem>
				</Form>
			)
		}
	}
}
BonusForm = Form.create({})(BonusForm)
