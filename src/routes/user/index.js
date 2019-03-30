import React from 'react'
import { connect } from 'react-redux'
import { Card, Table, Form, Select, message, Divider, Link} from 'antd'
// import Link from 'react-router-dom'
import BaseForm from '../../components/FormSearch'
import action from '../../store/action/index'

const FormItem = Form.Item
const Option = Select.Option

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount() {
    this.props.user() // 发送action，获取state中用户列表
  }
  componentDidMount() {}
  params = {page: 1,}
  formList = [{ type: 'INPUT', placeholder: '手机号/ID/用户名', width: 250, field: 'search' }]
  handleFilter = () => {

  }
  onRowClick = () => {

  }
  changePage = (page, size) => {
    this.props.list({page, size})
  }
  render() {
    const columns = [
      {title: 'ID', dataIndex: 'id', key: 'id'},
      {title: '用户名', dataIndex: 'account', key: 'account',},
      {title: '手机号', dataIndex: 'phone', key: 'phone', render: value => value || '-',},
      {title: '会员等级', dataIndex: 'userLevel', key: 'userLevel', render: value => value || '0',},
      {title: '店铺等级', dataIndex: 'storeLevel', key: 'storeLevel', render: value => value || '-'},
      {title: '创建时间', dataIndex: 'created_at', key: 'created_at',
        render: value => {
          // return formatTime(value)
          return value
        },
      },
      {title: '操作', dataIndex: 'action', key: 'action',
        render: (text, item) => {
          const data = item.id || null
          const path = `/account/accountDetail?id=${data}&phone=${item.phone}&user=${
            item.userLevel
            }&store=${item.storeLevel}`
          return (
            <div>
              <span >查看</span>
              {/*<Divider type="vertical" />*/}
              <span>删除</span>
            </div>
          )
        },
      },
    ]
    let {userList: {data: dataSource, total}} = this.props

    /*dataSource.forEach((v, i)=>{
      v.key = i
    })*/
    return (
      <div>
        <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>

        <div className="content_wrap">
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            pagination={{
              total,
              onChange: this.changePage,
            }}
          />
        </div>
      </div>
    )
  }
}

export default connect(state =>({...state.user}), action.user)(User)
