import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message, Link} from 'antd'
import BaseForm from '../../components/FormSearch'
import action from '../../store/action/index'

class Distribution extends React.Component {
  formList = [{type: 'INPUT', placeholder:'手机号/ID/用户名', width: 250, field:'search',}]
  constructor(props) {
    super(props)
    this.state = {list: []}
  }
  componentWillMount() {
    this.props.distribution() // 发送action，获取state中 积分记录
  }
  componentDidMount() {
  }
  handleFilter = () => {
  }
  onRowClick = () => {
  }
  render() {
    const columns = [
      {title: 'ID', dataIndex: 'id', key: 'id', render: value => value || '—',},
      {title: '用户名', dataIndex: 'account', key: 'account', render: value => value || '—',},
      {title: '手机号', dataIndex: 'phone', key: 'phone', render: value => value || '—',},
      {title: '会员等级', dataIndex: 'level', key: 'level', render: value => value || '0',},
      {title: '分红比例', dataIndex: 'ratio', key: 'ratio', render: value => value || '—',},
      {title: '上级ID', dataIndex: 'parent_id', key: 'parent_id', render: value => value || '—',},
      {title: '直推人数', dataIndex: 'direct_active_count', key: 'direct_active_count', render: value => value || '0',},
      {title: '直推销售额(USDT)', dataIndex: 'child1', key: 'child1',
        render: (value, item) => item.child.sale,
      },
      {title: '直推奖励(PPTR)', dataIndex: 'child2', key: 'child2',
        /*render: (value, item) => (
          <Link to={`/distribution/workAward/direct/${item.id}`}>
            {/!*{minusDecimal(item.child.award, 18)}*!/}
            {item.child.award}
          </Link>
        ),*/
        render: (value, item) => item.child.award
      },
      {title: '伞下人数', dataIndex: 'active_count', key: 'active_count', render: value => value || '0',},
      {title: '伞下销售额(USDT)', dataIndex: 'grandchild1', key: 'grandchild1',
        render: (value, item) => value,
      },
      {title: '业绩奖励(PPTR)', dataIndex: 'grandchild2', key: 'grandchild2',
        /*render: (value, item) => (
          <Link to={`/distribution/workAward/dynamic/${item.id}`}>
            {item.performance.length ? value : '0'}
          </Link>
        ),*/
        render: (value, item) => value
      },
      {title: '操作', dataIndex: 'action', key: 'action',
        render: (value, item) => {
          /*return (
            <Link to={`/distribution/memberList/${item.id}`}>
              <span>查看下级</span>
            </Link>
          )*/
          return <span>查看下级</span>
        },
      },
    ]
    let {distributionList: {rows: dataSource, count: total}} = this.props
    return (
      <div>
        <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
        <div className="content_wrap">
          <Table
            className='Table'
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

// export default connect(state=>({...state.integral}), action.integral)(Distribution)
export default connect(state=>({...state.distribution}), action.distribution)(Distribution)
