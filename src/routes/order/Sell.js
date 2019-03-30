import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message} from 'antd'
import FormSearch from "../../components/FormSearch"
import action from "../../store/action"

class Sell extends React.Component {
  formList = [
    {type: 'INPUT', placeholder:'商城订单编号/寄卖订单编号/买家ID/祖级ID', width: 250, field:'search',},
    {type: 'SELECT', placeholder:'全部',initialValue:'1',width: 100, field:'select',
      list: [{ id: '0', name: '全部状态' }, { id: '1', name: '已上架' }, { id: '2', name: '已发货' }, { id: '3', name: '已完成' }, { id: '4', name: '待上架' }]
    },
  ]
  constructor(props) {
    super(props)
    this.state = {list: [], chain: 'usdt'}
  }
  componentWillMount() {
    // 发送action，获取state中 寄卖订单列表
    this.props.sell({page: 1, size: 10})
  }
  handleItemTime = () => {

  }
  render() {
    const columns = [
      {title: '商城订单编号', dataIndex: 'shopping_order', key: 'shopping_order', render: value => value || '-'},
      {title: '寄卖订单编号', dataIndex: 'order_no', key: 'order_no', render: value => value || '-'},
      {title: '买家ID', dataIndex: 'user_id', key: 'user_id', render: value => value || '-'},
      {title: '原价', dataIndex: 'bought_price', key: 'bought_price', render: value => value || '-'},
      {title: '寄售价', dataIndex: 'sold_price', key: 'sold_price', render: value => value || '-'},
      {title: '手续费', dataIndex: 'sold_fee', key: 'sold_fee', render: value => value || '-'},
      {title: 'PPTR价格(RMB)', dataIndex: 'pptr_price', key: 'pptr_price', render: value => value || '-'},
      {title: '商品等级', dataIndex: 'goods_level', key: 'goods_level', render: value => `${value}级` || '-'},
      {title: '状态', dataIndex: 'status', key: 'status', render: value => value || '-'},
      {title: '祖级ID', dataIndex: 'parent_id', key: 'parent_id', render: value => value || '-'},
      {title: '寄卖天数', dataIndex: 'store_days', key: 'store_days', render: value => value || '-'},
      {title: '剩余天数', dataIndex: 'day2', key: 'day2', render: value => value || '-'},
      {title: '上架时间', dataIndex: 'created_at', key: 'created_at', render: value => value || '-'},
      {title: '结束时间', dataIndex: 'finished_at', key: 'finished_at', render: value => {return value;}},
      {title: '操作', dataIndex: 'action', key: 'action',
        render: (value, item) => {
          return <a onClick={(item) => {this.handleItemTime(item)}}>
            <span>修改时间</span>
          </a>
          /*return (
						<Fragment>
							<a disabled={item.status !== 'shelves'} onClick={() => deal(item)}>
								<span>成交</span>
							</a>
							<Divider type="vertical" />
							<a disabled={item.status !== 'shelves'} onClick={() => deliver(item)}>
								<span>发货</span>
							</a>
							<a onClick={(item) => {this.handleItemTime(item)}}>
								<span>修改时间</span>
							</a>
						</Fragment>
					);*/
        },
      }
    ]
    let {sellList: {rows: dataSource, count:total}} = this.props
    console.log('this------', this)
    return (
      <div className="">
        <FormSearch formList={this.formList} filterSubmit={this.handleFilter} rightContent={'show'}/>

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

export default connect(state=>({...state.order}), action.order)(Sell)
