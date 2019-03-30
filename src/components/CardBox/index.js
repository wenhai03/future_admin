import React from 'react'
import { Card, Col, Row } from 'antd'
import './index.less'

export default class CardBox extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {}
  render() {
  	const arr = this.props.cardData
    return (
      <div className='card'>
	      {
	      	arr.map((v, i) => {
	      	    return <Col span={8} key={i} className='card_item'>
			          <Card title={v.name} bordered={false} ><span className='val'>{v.val}</span></Card>
		          </Col>
	      	})
	      }
      </div>
    )
  }
}
