import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message} from 'antd'
import BaseForm from '../../components/FormSearch'
import action from '../../store/action/index'

class Integral extends React.Component {
  formList = [{type: 'INPUT', placeholder:'手机号/ID/用户名', width: 250, field:'search',}]
  constructor(props) {
    super(props)
    this.state = {currentPage: 1, pagination: {}}
    this.init({page: 1, size: 10, chain: this.state.chain})
  }
  componentWillMount() {
  }
  init = (params) => {
    const {page=1, size=10, chain = this.state.chain} = params
    this.props.integral({page, size, chain}) // 发送action，获取state中 积分记录
  }
  componentDidMount() {
  }
  handleFilter = () => {
  }
  onRowClick = () => {
  }
  handlePageChange = (page, pageSize) => {
    this.init({page, size: pageSize})
    this.setState({currentPage: page})
  }
  render() {
    const columns = [
      {title: '订单号', dataIndex: 'order_number', key: 'order_number',},
      {title: '用户ID', dataIndex: 'remote_account_id', key: 'remote_account_id', render: value => value || '-',},
      {title: '币种', dataIndex: 'name', key: 'name',
        render: (value, item) => {
          return item.IntegralKind.name || 'item.IntegralKind.name'
        },
      },
      {title: '变化类型', dataIndex: 'change_type', key: 'change_type', render: value => (+value === 1 ? '增加' : '减少'),},
      {title: '应用类型', dataIndex: 'operate_type', key: 'operate_type', render: value => value || '-',},
      {title: '数量', dataIndex: 'amount', key: 'amount',
        render: (value, item) => {
          // return 'ToolTip(minusDecimal(value, mainChainObj()[item.IntegralKind.chain_type]))'
          return value
        },
      },
      {title: '状态', dataIndex: 'status', key: 'status',
        render: value => {
          let type = {'-1': {status: 'error', text: '失败',}, 0: {status: 'warning', text: '等待',}, 1: {status: 'success', text: '成功',},}
          if ([-1, 0, 1].includes(value)) return type[value]
          return '--'
        },
      },
      {title: '交易时间', dataIndex: 'created_at', key: 'created_at',},
    ]
    let {integralList: {results: dataSource, count: total}} = this.props
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
              current: this.state.currentPage,
              onChange: this.handlePageChange,
              showTotal:()=>{
                return `共${total}条`
              },
            }}
          />
        </div>
      </div>
    )
  }
}

export default connect(state=>({...state.integral}), action.integral)(Integral)
