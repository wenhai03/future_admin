import React from 'react'
import {Menu} from 'antd'
import {NavLink} from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu

export default class MenuLeft extends React.Component {
  constructor(props) {
    super(props)
  }
	componentWillMount () {
		const menuTreeNode = this.renderMenu(MenuConfig)
		this.setState({menuTreeNode})
	}
	//菜单渲染
	renderMenu = (data) => {
		return data.map((v) => {
			if (v.children) {
				return (
					<SubMenu title={v.title} key={v.key}>
						{this.renderMenu(v.children)}
					</SubMenu>
				)
			}
			return <Menu.Item title={v.title} key={v.key}>
				<NavLink to={v.key}>{v.title}</NavLink>
			</Menu.Item>
		})
	}

  render() {
    return (
	    <div>
		    <div className='logo'>
			    {/*<img src="../../../public/logo.ico" alt=""/>*/}
			    <h1>全球贸易商城</h1>
		    </div>

		    <Menu theme='dark' mode="inline">
			    {this.state.menuTreeNode}
		    </Menu>
	    </div>
    )
  }
}
