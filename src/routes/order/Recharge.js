import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message} from 'antd'
import FormSearch from "../../components/FormSearch"
import action from "../../store/action"

class Recharge extends React.Component {
  formList = [{type: 'INPUT', placeholder:'手机号/ID/用户名', width: 250, field:'search'}]
  constructor(props) {
    super(props)
    this.state = {list: [], chain: 'usdt'}
  }
  componentWillMount() {}
  componentDidMount() {
    // 发送action，获取state中 充币订单列表
    this.props.recharge({page: 1, size: 10, type: [3], chain: this.state.chain })
  }

  handleFilter = () => {

  }
  render() {
    const columns = [
      {title: '订单编号', width: 200,dataIndex: 'order_no', key: 'order_no', render: value => value || '—',},
      {title: '用户ID', width: 80,dataIndex: 'receiver_id', key: 'order_id', render: value => value || '—',},
      {title: '转出地址', dataIndex: 'send_address', key: 'send_address', render: value => value || '—',},
      {title: '转入地址', dataIndex: 'receive_address', key: 'receive_address', render: value => value || '—',},
      {title: '充值数量', dataIndex: 'amount', key: 'amount',
        render: (text, item) => {
          // return ToolTip(minusDecimal(text, mainChainObj()[item.chain_type]))
          return 'text'
        },
      },
      {title: '状态', dataIndex: 'status', key: 'status',
        render: text => {
          // return <Badge status={TX_STATUS[text].status} text={TX_STATUS[text].text} />
          return text
        },
      },
      {title: '更新时间', dataIndex: 'updated_at', key: 'updated_at',
        render: value => {
          // return formatTime(value)
          return value
        },
      },
      {title: '操作', dataIndex: 'action', key: 'action', render: (text, item) => {return 'queryTxHash(item.tx_hash)'},},
    ]
    let {rechargeList: {rows: dataSource, count:total}} = this.props
    console.log('this------', this)
    return (
      <div>
        <FormSearch formList={this.formList} filterSubmit={this.handleFilter}/>

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

export default connect(state=>({...state.order}), action.order)(Recharge)
