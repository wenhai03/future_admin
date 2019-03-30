import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message} from 'antd'
import SubHeader from '../../components/SubHeader'
import action from "../../store/action"

class Collect extends React.Component {
  formList = [{type: 'INPUT', placeholder:'手机号/ID/用户名', width: 250, field:'search'}]
  constructor(props) {
    super(props)
    this.state = {list: [], chain: 'usdt'}
  }
  componentWillMount() {}
  componentDidMount() {
    // 发送action，获取state中 充币订单列表
    this.props.collect({page: 1, size: 10, type: [6], chain: this.state.chain })
  }

  handleFilter = () => {

  }
  render() {
    const columns = [
      {title: '订单编号', dataIndex: 'order_no', key: 'order_no', render: value => value || '—'},
      {title: '用户ID', dataIndex: 'receiver_id', key: 'order_id', render: value => value || '—'},
      {title: '接收地址', dataIndex: 'receive_address', key: 'receive_address', render: value => value || '—'},
      {title: '转出地址', dataIndex: 'send_address', key: 'send_address', render: value => value || '—'},
      {title: '来源', dataIndex: 'origin', key: 'origin', render: value => value || '—'},
      {title: '提币数量', dataIndex: 'amount', key: 'amount', render: (text, item) => 'item'},
      {title: '状态', dataIndex: 'status', key: 'status',
        render: text => {
          // return <Badge status={TX_STATUS[text].status} text={TX_STATUS[text].text} />
          return text
        }
      },
      {title: '创建时间', dataIndex: 'created_at', key: 'created_at',
        render: value => {
          return 'formatTime(value)'
        }
      },
      {title: '更新时间', dataIndex: 'updated_at', key: 'updated_at',
        render: value => {
          return 'formatTime(value)'
        }
      },
      {title: '操作人', dataIndex: 'operator', key: 'operator', render: text => text || '-'},
      {title: '操作', dataIndex: 'action',/* fixed: 'right',*/ key: 'action',
        render: (text, item) => {
          /*const { status, admin_limit: limit } = item
          const able = isSuperAdmin(login) || limit*/
          return (
            <span>转账
            {/*{status === 2 || status === 1 ? (
              queryTxHash(item.tx_hash)
            ) : status === -1 || status === 0 ? (
              <a
                className={styles.transferBtn}
                disabled={!able}
                onClick={() => (able ? showTransferAccountModal(item) : {})}
              >
                {status === -1 ? '重新' : ''}转账
              </a>
            ) : null}*/}
          </span>
          )
        }
      }
    ]
    console.log('this------', this)
    let {collectList: {rows: dataSource, count: total}} = this.props
    return (
      <div>
        <SubHeader/>

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

export default connect(state=>({...state.order}), action.order)(Collect)
