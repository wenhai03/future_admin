import React from 'react'
import { connect } from 'react-redux'
import { Table, Card, Button, Form, Select, message, Divider} from 'antd'
import action from '../../store/action/index'

class Power extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			chain: 'usdt',
			list:[ ]
		}
	}
	componentDidMount() {
		this.props.power({page: 1, size: 10, admin: true}) // 发送action，获取state中权限列表
	}

	onRowClick = () => {
	}
	handleRaiseImport = () => {
	}
	handleTab = (name) => {
	}
	componentWillMount() {}
	render() {
		const columns = [
			{title: '登录账号', dataIndex: 'account', key: 'account', render: value => value || '--',},
			{title: '手机号', dataIndex: 'phone', key: 'phone', render: value => value || '--',},
			{title: '邮箱', dataIndex: 'email', key: 'email', render: value => value || '--',},
			{title: '角色', dataIndex: 'roles', key: 'roles', render: value => (value.toString().indexOf('root') < 0 ? '普通管理员' : '超级管理员'),},
			{title: '状态', dataIndex: 'status', key: 'status', render: value => value || '--',},
			{title: '创建时间', dataIndex: 'created_at', key: 'created_at', render: value => value || '--',},
			{title: '操作', dataIndex: 'action', key: 'action',
				render: (value, item) => {
					return (
						<div>
							<a onClick={() => {/* showModal(value, item, 'editVisible');*/}}>编辑</a>
							<Divider type="vertical" />
							<a onClick={() => {/* showModal(value, item, 'visible');*/}}>删除权限</a>
							<Divider type="vertical" />
							<a onClick={() => {/* showModal(value, item, 'putPwdVisible');*/}}>修改登录密码</a>
						</div>
					);
				},
			},
		]
		let {powerList: {data: dataSource, total}} = this.props
		return (
			<div>
				<div className="content_wrap">
					<Card style={{marginTop:10}}>
						<Button type="primary" onClick={this.handleRaiseImport}>提升权限</Button>
					</Card>
					<Table
						total
						bordered
						columns={columns}
						dataSource={dataSource}
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

export default connect(state=>({...state.system}), action.system)(Power)
