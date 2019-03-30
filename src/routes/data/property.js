import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message} from 'antd'
import BaseForm from '../../components/FormSearch'
import action from '../../store/action/index'

class Property extends React.Component {
  formList = [{type: 'INPUT', placeholder:'手机号/ID/用户名', width: 250, field:'search',}]
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      chain: 'usdt'
    }
  }
  componentWillMount() {
    this.props.distribution({page: 1, size: 10, chain: this.state.chain}) // 发送action，获取state中 分销统计
  }
  componentDidMount() {
  }
  handleFilter = () => {
  }
  onRowClick = () => {
  }
  render() {
    const columns = [
      {title: '日期', dataIndex: 'dt', key: 'dt', render: value => value || '--',},
      {title: '充币总额', dataIndex: 'totalRecharge', key: 'totalRecharge', render: value => value || '--',},
      {title: '今日充币额', dataIndex: 'samedayRechargeAmount', key: 'samedayRechargeAmount', render: value => value || '--',},
      {title: '提币总额', dataIndex: 'totalTurnout', key: 'totalTurnout', render: value => value || '--',},
      {title: '今日提币额', dataIndex: 'samedayTurnoutAmount', key: 'samedayTurnoutAmount', render: value => value || '--',},
      {title: '现有积分', dataIndex: 'balance', key: 'balance', render: value => value || '--',},
      {title: '增加积分', dataIndex: 'samedayIncrement', key: 'samedayIncrement', render: value => value || '--',},
      {title: '减少积分', dataIndex: 'samedayDecrement', key: 'samedayDecrement', render: value => value || '--',},
    ];
    let {distributionList: {rows: dataSource, count}} = this.props
    return (
      <div>

        <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
        <div className="content_wrap">
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

export default connect(state=>({...state.data}), action.data)(Property)

/*
import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message, Link} from 'antd'
import BaseForm from '../../components/FormSearch'
import action from '../../store/action/index'

class Property extends React.Component {
  formList = [{type: 'INPUT', placeholder:'手机号/ID/用户名', width: 250, field:'search',}]
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      chain: 'usdt'
    }
  }
  componentWillMount() {
    this.props.property({page: 1, size: 10, chain: this.state.chain}) // 发送action，获取state中 资产统计
  }
  componentDidMount() {
  }
  handleFilter = () => {
  }
  onRowClick = () => {
  }
  render() {
    const columns = [
      {title: '日期', dataIndex: 'statistics_date', key: 'statistics_date', render: value => (value ? value : '--'),},
      {title: '高定销售额', dataIndex: 'sale_amount', key: 'sale_amount', render: value => value || '0',},
      {title: '高定上架额', dataIndex: 'shelf_amount', key: 'shelf_amount',
        render: (value, item) => {
          // const date = moment(item.date).format('YYYY-MM-DD');
          const path = `/statistics/senior/filterSenior/shelves/`;
          return value
          /!*return (
            (+value && (
              <Link to={path}>
                <span>{value}</span>
              </Link>
            )) ||
            '0'
          );*!/
        },
      },
      {title: '高定成交额', dataIndex: 'deal_amount', key: 'deal_amount',
        render: (value, item) => {
          // const date = moment(item.date).format('YYYY-MM-DD');
          const path = `/statistics/senior/filterSenior/finish/}`;
          return value
          /!*return (
            (+value && (
              <Link to={path}>
                <span>{value}</span>
              </Link>
            )) ||
            '0'
          );*!/
        },
      },
      {title: '高定发货额', dataIndex: 'consignment_amount', key: 'consignment_amount',
        render: (value, item) => {
          // const date = moment(item.date).format('YYYY-MM-DD');
          const path = `/statistics/senior/filterSenior/consignment/`;
          return value
          /!*return (
            (+value && (
              <Link to={path}>
                <span>{value}</span>
              </Link>
            )) ||
            '0'
          );*!/
        },
      },
      {title: '固定分红额', dataIndex: 'signin_amount', key: 'signin_amount',
        render: value => {
          const path = '/statistics/bonus/fixed';
          return value
          /!*return (
            (+value && (
              <Link to={path}>
                <span>{value}</span>
              </Link>
            )) ||
            '0'
          );*!/
        },
      },
      {title: '直推分红额', dataIndex: 'direct_amount', key: 'direct_amount',
        render: value => {
          const path = '/statistics/bonus/directPush';
          return value
          /!*return (
            (+value && (
              <Link to={path}>
                <span>{value}</span>
              </Link>
            )) ||
            '0'
          );*!/
        },
      },
      {title: '业绩分红额', dataIndex: 'working_amount', key: 'working_amount',
        render: value => {
          const path = '/statistics/bonus/achievement';
          return value
          /!*return (
            (+value && (
              <Link to={path}>
                <span>{value}</span>
              </Link>
            )) ||
            '0'
          );*!/
        },
      },
    ]
    let {propertyList: {rows: dataSource, count}} = this.props
    console.log('this------', this)
    return (
      <div>
        <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
        <div className="content_wrap">
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

export default connect(state=>({...state.data}), action.data)(Property)
*/
