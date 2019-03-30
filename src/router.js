import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import Login from './routes/login'

import Home from './routes/home'
import User from './routes/user'

import CoinPool from './routes/coinPool/wallet'
import WalletProperty from './routes/coinPool/walletProperty'
import DealRecord from './routes/coinPool/dealRecord'

import Integral from './routes/integral/record'
import Recharge from './routes/order/Recharge'
import Sell from './routes/order/Sell'
import Collect from './routes/order/Collect'
import Withdraw from './routes/order/Withdraw'

import DistributionUser from './routes/distribution/user'

import Property from './routes/data/property'
import Distribution from './routes/data/distribution'

import Everyday from './routes/bill/everyday'
import BillFilter from './routes/bill/billFilter'

import Power from './routes/system/power'
import SystemCollect from './routes/system/collect'
import Bonus from './routes/system/bonus'
import Level from './routes/system/level'
import Deal from './routes/system/deal'
import SystemWithdraw from './routes/system/withdraw'
import Type from './routes/system/type'

import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import Versions from './routes/versions'

import Admin from "./admin"

export default class ERouter extends React.Component {
	render() {
		return (
			<HashRouter>
				<LocaleProvider locale={zh_CN}>
					<div>
						<Switch>
							<Route path='/login' component={Login}/>
							<Route path='/' render={() =>
								<Admin>
									<Switch>
										<Route exact path='/admin/home' component={Home}/>
										<Route exact path='/admin/user' component={User}/>
										<Route exact path='/admin/coinPool/wallet' component={CoinPool}/>
										<Route exact path='/admin/coinPool/walletProperty' component={WalletProperty}/>
										<Route exact path='/admin/coinPool/dealRecord' component={DealRecord}/>
										<Route exact path='/admin/integral/record' component={Integral}/>
										<Route exact path='/admin/order/recharge' component={Recharge}/>
										<Route exact path='/admin/order/withdraw' component={Withdraw}/>
										<Route exact path='/admin/order/sell' component={Sell}/>
										<Route exact path='/admin/order/collect' component={Collect}/>

										<Route exact path='/admin/distribution/user' component={DistributionUser}/>{/*分销管理*/}

										<Route exact path='/admin/data/property' component={Property}/>{/*数据管理 - 资产统计*/}
										<Route exact path='/admin/data/distribution' component={Distribution}/>{/*数据管理 - 分销统计*/}

										<Route exact path='/admin/bill/everyday' component={Everyday}/>{/*对账管理 - 每日对账*/}
										<Route exact path='/admin/bill/billFilter' component={BillFilter}/>{/*对账管理 - 对账筛选*/}

										<Route exact path='/admin/system/power' component={Power}/>{/*系统管理 - 权限设置*/}
										<Route exact path='/admin/system/collect' component={SystemCollect}/>{/*系统管理 - 归集设置*/}
										<Route exact path='/admin/system/bonus' component={Bonus}/>{/*系统管理 - 分红设置*/}
										<Route exact path='/admin/system/level' component={Level}/>{/*系统管理 - 等级设置*/}
										<Route exact path='/admin/system/withdraw' component={SystemWithdraw}/>{/*系统管理 - 提币设置*/}
										<Route exact path='/admin/system/deal' component={Deal}/>{/*系统管理 - 交易设置*/}
										<Route exact path='/admin/system/type' component={Type}/>{/*系统管理 - 种类设置*/}

										<Route exact path='/admin/versions/' component={Versions}/>{/*版本管理*/}

									</Switch>
								</Admin>
							}>
							</Route>
						</Switch>
					</div>
				</LocaleProvider>
			</HashRouter>
		)
	}
}
