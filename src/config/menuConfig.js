const menuLlist = [
	{
		title: '首页',
		key: '/admin/home'
	},
	{
		title: '用户管理',
		key: '/admin/user'
	},
	{
		title: '币池管理',
		key: '/admin/coinPool',
		children: [
			{
				title: '币池钱包',
				key: '/admin/coinPool/wallet'
			}
		]
	},
	{
		title: '积分管理',
		key: '/admin/integral',
		children: [
			{
				title: '积分记录',
				key: '/admin/integral/record'
			}
		]
	},
	{
		title: '订单管理',
		key: '/admin/order',
		children: [
			{
				title: '充币订单',
				key: '/admin/order/recharge'
			},
			{
				title: '提币订单',
				key: '/admin/order/withdraw'
			},
			{
				title: '寄卖订单',
				key: '/admin/order/sell'
			},
			{
				title: '归集订单',
				key: '/admin/order/collect'
			}
		]
	},
	{
		title: '分销管理',
		key: '/admin/distribution',
		children: [
			{
				title: '分销用户',
				key: '/admin/distribution/user'
			}
		]
	},
	{
		title: '数据管理',
		key: '/admin/data',
		children: [
			{
				title: '资产统计',
				key: '/admin/data/property'
			},
			{
				title: '分销统计',
				key: '/admin/data/distribution'
			}
		]
	},
	{
		title: '对账管理',
		key: '/admin/bill',
		children: [
			{
				title: '每日对账',
				key: '/admin/bill/everyday'
			},
			{
				title: '对账筛选',
				key: '/admin/bill/billFilter'
			}
		]
	},
	{
		title: '系统管理',
		key: '/admin/system',
		children: [
			{
				title: '权限设置',
				key: '/admin/system/power'
			},
			{
				title: '归集设置',
				key: '/admin/system/collect'
			},
			{
				title: '分红设置',
				key: '/admin/system/bonus'
			},
			{
				title: '等级设置',
				key: '/admin/system/level'
			},
			{
				title: '提币设置',
				key: '/admin/system/withdraw'
			},
			{
				title: '交易设置',
				key: '/admin/system/deal'
			},
			{
				title: '种类设置',
				key: '/admin/system/type'
			}
		]
	},
	{
		title: '版本管理',
		key: '/admin/versions',
	}
]

export default menuLlist
