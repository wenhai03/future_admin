import React from 'react'
import { Table, Card, Button, message, Divider, Tooltip, Link} from 'antd'
import { connect } from 'react-redux'
import {bigNumberFilter} from '../../utils/bigNumber'
import action from '../../store/action/index'

class WalletProperty extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // chain: this.props.location.state.chain
    }
    this.init()
  }
  init = () => {
    const {address, chain} = this.props
    this.props.property({address, chain, extra: 1}) // extra:1 表示查询所有，包括代币
  }
  componentWillMount() {
  }
  render() {
	  const {walletList} = this.props
	  const dataSource = [walletList]
	  const columns = [
      {title: '资产名称', dataIndex: 'chain', key: 'chain', render: text => text || '—',},
      {title: '数量', dataIndex: 'balance', key: 'balance'},
      {title: '操作', dataIndex: 'action', key: 'action',
        render: (value, item) => (
          <span>
            <Button type="primary" size='small'>转入</Button><Divider type='vertical'/>
            <Button type="primary" size='small'>转出</Button><Divider type='vertical'/>
            <Button type="primary" size='small'>交易记录</Button>
            {/*<Link to={{pathname: '/admin/coinPool/dealRecord', state: {item, chain: this.state.chain}}}><Button>交易记录</Button></Link>*/}
        </span>
        ),
      },
    ];
    return (
      <div>
        <div className="content_wrap">
          <Table total bordered columns={columns} dataSource={dataSource}
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

export default connect(state=>({...state.coin}), action.coin)(WalletProperty)
