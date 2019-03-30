import React from 'react'
import {connect} from 'react-redux'
import { Table, Card, Button, Form, Select, message, Link} from 'antd'
import action from '../../store/action/index'

class Everyday extends React.Component {
  formList = [{type: 'INPUT', placeholder:'手机号/ID/用户名', width: 250, field:'search',}]
  constructor(props) {
    super(props)
    this.state = {list: []}
  }
  componentWillMount() {
    this.props.everyday() // 发送action，获取state中 积分记录
  }
  componentDidMount() {
  }
  handleFilter = () => {
  }
  onRowClick = () => {
  }
  render() {
    const columns = [
      {title: '日期', dataIndex: 'dt', key: 'dt', render: value => value || '-',},
      {title: '对账总笔数', dataIndex: 'count', key: 'count', render: value => value || '-',},
      {title: '对平', dataIndex: 'countNormal', key: 'countNormal', render: value => value || '-',},
      {title: '差错', dataIndex: 'countAbnormal', key: 'countAbnormal', render: value => value || '-',},
      {title: '手动调账成功', dataIndex: 'countManual', key: 'countManual', render: value => value || '-',},
      {title: '未对账', dataIndex: 'countNtyt', key: 'countNtyt', render: value => value || '-',},
      {title: '对账数据结果', dataIndex: 'result', key: 'result',
        render: value => value==='normal'?'正常': '异常' || '-',
        /*render: value => {
          return <Badge status={value==='normal'? 'success': 'error'} text={type[value]} />;
        },*/
      },
      {title: '对账功能结果', dataIndex: 'result', key: 'result1',
        /*render: value => {
          return value==='normal'? '执行正常' : <a >执行异常，重新对账</a> || '-'
        }*/
        render: (value, item) => {
          return (
            value==='normal'? '执行正常' :
              <a onClick={() => {this.handleErr(item)}}>
                执行异常，重新对账
              </a>
              || '-'
          );
        },
      },
    ]
    let {everydayList: {rows: dataSource, count: total}} = this.props
    console.log('this------', this)
    return (
      <div>
        {/*<BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>*/}
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

// export default connect(state=>({...state.integral}), action.integral)(Distribution)
export default connect(state=>({...state.bill}), action.bill)(Everyday)
