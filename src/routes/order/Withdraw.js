import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message, Badge} from 'antd'
import SubHeader from "../../components/SubHeader"
import FormSearch from "../../components/FormSearch"
import action from "../../store/action"

class Withdraw extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [],
      chain: 'usdt',
      loading: false,
    }
  }
  componentWillMount() {
    // 发送action，获取state中 充币订单列表  type
    this.props.withdraw({page: 1, size: 10, chain: this.state.chain, type: [2]})
  }
  formList = [
    {type: 'INPUT', placeholder:'订单编号/订单ID/币种地址/转入地址/转出地址', width: 250, field:'search',},
    {
      type: 'SELECT', placeholder:'全部',initialValue:'1',width: 100, field:'select',
      list: [{ id: '0', name: '全部状态' }, { id: '1', name: '交易成功' }, { id: '2', name: '交易失败' }, { id: '3', name: '处理中' }, { id: '4', name: '准备中' }]
    },
  ]
  start = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      })
    }, 1000)
  }
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }
  render() {
    const { loading, selectedRowKeys } = this.state
    const columns = [
      {title: '订单编号', dataIndex: 'order_no', key: 'order_no', render: value => value || '—',},
      {title: '用户ID', dataIndex: 'receiver_id', key: 'order_id', render: value => value || '—',},
      {title: '接收地址', dataIndex: 'receive_address', key: 'receive_address', render: value => value || '—',},
      {title: '转出地址', dataIndex: 'send_address', key: 'send_address', render: value => value || '—',},
      {title: '来源', dataIndex: 'origin', key: 'origin', render: value => value || '—',},
      {title: '提币数量', dataIndex: 'amount', key: 'amount', render: (text, item) => 'text',},
      {title: '状态', dataIndex: 'status', key: 'status',
        render: value => {
          const type = {'-1': {status: 'error', text: '交易失败',}, 0: {status: 'warning', text: '准备中　',}, 1: {status: 'processing', text: '处理中　',}, 2: {status: 'success', text: '交易成功'}}
          return <Badge status={type[value].status} text={type[value].text} />
        }
      },
      {title: '创建时间', dataIndex: 'created_at', key: 'created_at',
        render: value => {
          return value
        },
      },
      {title: '更新时间', dataIndex: 'updated_at', key: 'updated_at',
        render: value => {
          return value
        },
      },
      {title: '操作人', dataIndex: 'operator', key: 'operator', render: text => text || '-',},
      {title: '操作', dataIndex: 'action',/* fixed: 'right',*/ key: 'action',
        render: (text, item) => {
          const { status, admin_limit: limit } = item
          // const able = isSuperAdmin(login) || limit
          return (
            <span>
              {text}
            </span>
          //   {/*<span>
          //   {status === 2 || status === 1 ? (
          //     queryTxHash(item.tx_hash)
          //   ) : status === -1 || status === 0 ? (
          //     <a
          //       className={styles.transferBtn}
          //       disabled={!able}
          //       onClick={() => (able ? showTransferAccountModal(item) : {})}
          //     >
          //       {status === -1 ? '重新' : ''}转账
          //     </a>
          //   ) : null}
          // </span>*/}
          )
        },
      },
    ]
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      getCheckboxProps: record  => ({
        disabled: record.status == 2,
        name: record.status
      })
    }
    const hasSelected = this.state.selectedRowKeys.length > 0
    let {withdrawList: {rows: dataSource, count: total}} = this.props
    return (
      <div >
        <SubHeader/>
        <FormSearch formList={this.formList} filterSubmit={this.handleFilter} resetBtn={'hide'}/>

        <div className="content_wrap">
          <div className='mb15'>
            <Button
              type="primary"
              onClick={this.start}
              // disabled={!hasSelected}
              loading={loading}
            >批量转账
            </Button>
            <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选择批量转账 ${selectedRowKeys.length}` : ''}
          </span>
          </div>
          <Table
            className='Table'
            rowSelection={rowSelection}
            total
            bordered
            columns={columns}
            dataSource={dataSource}
            // pagination={this.state.pagination}
            // onRow={(record, index) => {
            //   return {
            //     onClick: () => {
            //       this.onRowClick(record, index)
            //     }
            //   }
            // }}
          />
        </div>
      </div>
    )
  }
}

export default connect(state=>({...state.order}), action.order)(Withdraw)
