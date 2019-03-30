import React from 'react'
import {Button} from 'antd'
import './index.less'

export default class SubHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			btnArr: [{name: 'ETH', actived: false}, {name: 'EOS', actived: false}, {name: 'USDT', actived: false}]
		}
	}
	componentWillMount() {}
	handleClick = (name) => {
		if (['ETH', 'EOS', 'USDT'].includes(name)) {
			this.props.tab(name.toLowerCase())
		}
	}

	render() {
		const arr = this.state.btnArr
		return (
			<div className='sub_title'>
				{
					arr.map((v, i) => {
						return <Button
							type={v.actived ? 'primary' : 'default'}
							onClick={() => {
								this.handleClick(v.name)
							}}
							key={i}
						>{v.name}</Button>
					})
				}
			</div>
		)
	}
}
