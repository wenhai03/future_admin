import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Table, Card, Button, message, Divider} from 'antd'
import SubHeader from '../../components/SubHeader'
import action from '../../store/action/index'

class Wallet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      chain: 'usdt',
      list:[]
    }
    this.init({page: 1, size: 10, chain: this.state.chain})
  }
  componentDidMount() {
  }
  init = (params) => {
    const {page, size, chain=this.state.chain} = params
    this.props.wallet({page, size, chain}) // 发送action，获取state中币池钱包
  }
  onRowClick = () => {
  }
  handleImport = () => {
  }
  handleTab = (name) => {
    this.setState({chain: name}, ()=>{
      this.init({page: 1, size: 10, chain: this.state.chain})
    })
  }
  componentWillMount() {}
  handleRowClick(item) {
    const chain = this.state.chain
    // 1表示查询所有，包括代币
    this.props.history.push({
      pathname: '/admin/coinPool/walletProperty',
      state: {item, chain}
    })
    // this.props
    this.props.saveInfo({address: item.address, chain}) // 把地址保存到react-redux中
  }

  render() {
    const columns = [
      {title: 'ID', dataIndex: 'id', key: 'id', render: text => text || '—',},
      {title: '钱包名称', dataIndex: 'name', key: 'name', render: text => text || '—',},
      {title: '钱包地址', dataIndex: 'address', key: 'address', render: text => text || '—',},
      {title: '状态', dataIndex: 'is_freeze', key: 'is_freeze', render: text => 'IS_FREEZE[text]',},
      {title: '创建时间', dataIndex: 'created_at', key: 'created_at', render: value => {return value},},
      {title: '操作人', dataIndex: 'operator', key: 'operator', render: () => 'adminData.account',},
      {title: '操作', dataIndex: 'action', key: 'action',
        render: (text, item) => {
          return (
            <div>
              {/*<Link to={{pathname: '/admin/coinPool/walletProperty', state: {item, chain: this.state.chain}}} type="primary" size='small'>
                <Button type="primary" size='small'>资产管理</Button>
              </Link>*/}
              <Button onClick={()=>{this.handleRowClick(item)}} type="primary" size='small'>资产管理</Button>
              <Divider type="vertical" />
              <Button type="primary" size='small'>删除</Button>
            </div>
          )
        },
      },
    ]

    let {walletList: {result: dataSource, total}} = this.props
    return (
      <div>
        <SubHeader tab={this.handleTab}/>

        <div className="content_wrap">
          <Card style={{marginTop:10}}>
            <Button type="primary" onClick={this.handleImport}>导入钱包</Button>
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

export default connect(state=>({...state.coin}), action.coin)(Wallet)
