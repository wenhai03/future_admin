import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Input, Modal, Form, Select, message, Link, Divider} from 'antd'
import action from '../../store/action/index'
const FormItem = Form.Item
const Option = Select.Option


class Level extends React.Component {
	formList = [{type: 'INPUT', placeholder:'手机号/ID/用户名', width: 250, field:'search',}]
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			levelInfo: {},
			isVisible: false
		}
	}
	componentWillMount() {
		this.props.level() // 发送action，获取state中 积分记录
	}
	componentDidMount() {
	}
	handleFilter = () => {
	}
	onRowClick = () => {
	}
	handleModal = (item, type, title)  => {
		if (item) {
			this.setState({levelInfo: item, type, title, isVisible: true})
		} else {
			this.setState({type, title, isVisible: true})
		}
	}
	render() {
		const columns = [
			{title: '等级', dataIndex: 'grade', key: 'grade', render: value => value || '—',},
			{title: '等级名称', dataIndex: 'name', key: 'name', render: value => value || '—',},
			{title: '直推人数', dataIndex: 'direct', key: 'direct', render: value => value || '0',},
			{title: '伞下人数', dataIndex: 'indirect', key: 'indirect', render: value => value || '0',},
			{title: '操作', dataIndex: 'action', key: 'action',
				render: (text, item) => {
					return (
						<div><a onClick={() => {
							this.handleModal(item, 'edit1', '编辑会员等级')
						}}>编辑</a><Divider type='vertical'></Divider><a>删除</a></div>
					);
				},
			},
		];
		let {levelList: {rows: dataSource, count: total}} = this.props
		return (
			<div>
				<div className="content_wrap">
					<Card title='会员等级' extra={<a onClick={() => {
						this.handleModal('', 'create1', '新增会员等级')
					}}>添加</a>} style={{marginBottom: '15px'}}>
						<Table
							total
							bordered
							columns={columns}
							dataSource={dataSource}
							// pagination={this.state.pagination}
						/>
					</Card>
				</div>

				<Modal title={this.state.title} visible={this.state.isVisible} onOk={this.handleSubmit}
		       onCancel={()=>{
			       this.levelForm.props.form.resetFields()
			       this.setState({
				       isVisible: false,
				       levelInfo: {}
			       })
		       }}
				>
					<LevelForm levelInfo={this.state.levelInfo} type={this.state.type} wrappedComponentRef={(ref) => this.levelForm = ref }/>
				</Modal>
			</div>
		)
	}
}

// export default connect(state=>({...state.integral}), action.integral)(Distribution)
export default connect(state=>({...state.system}), action.system)(Level)

class LevelForm extends React.Component{
	render() {
		const { getFieldDecorator } = this.props.form
		const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 16}}
		const levelInfo = this.props.levelInfo || {}
		const type = this.props.type

		console.log('type66------', type)
		console.log('levelInfo------', levelInfo)
		if (type === 'edit1' || type === 'create1' ) {
			return(
				<Form layout='horizontal'>
					<FormItem label="等级" {...formItemLayout}>
						{getFieldDecorator('grade',{
							initialValue: levelInfo.grade,
							rules: [{ required: true, message: '请输入等级!'}]
						})(<Input type="text" placeholder="请输入等级"/>)
						}
					</FormItem>
					<FormItem label="等级名称" {...formItemLayout}>
						{getFieldDecorator('name',{
							initialValue: levelInfo.name,
							rules: [{ required: true, message: '请输入等级名称!'}]
						})(<Input type="text" placeholder="请输入等级名称"/>)
						}
					</FormItem>
					<FormItem label="直推人数" {...formItemLayout}>
						{getFieldDecorator('direct',{
							initialValue: levelInfo.direct,
							rules: [{ required: true, message: '请输入直推人数!'}]
						})(<Input type="text" placeholder="请输入直推人数"/>)
						}
					</FormItem>
					<FormItem label="伞下人数" {...formItemLayout}>
						{getFieldDecorator('indirect',{
							initialValue: levelInfo.indirect,
							rules: [{ required: true, message: '请输入伞下人数!'}]
						})(<Input type="text" placeholder="请输入伞下人数"/>)
						}
					</FormItem>
				</Form>
			)
		}
	}
}

LevelForm = Form.create({})(LevelForm)
