// 接口的配置文件
const currentNet = 'test';
// 开发环境
const dev = {
  url: 'http://47.244.20.24:8889',
  queryDetailUrl: {
    test: {
      eth: 'https://rinkeby.etherscan.io',
      usdt: 'https://test-insight.bitpay.com',
    },
    main: {
      eth: 'https://etherscan.io',
      usdt: 'https://insight.bitpay.com/',
    },
  },
  account: '/account', // 帐户模块
  integral: '/api_integral', // 积分模块
  dictionary: '/api_dictionary', // 字典
  wallet_system: '/wallet_system', // 版本管理 钱包
  api_ticpush: '/api_ticpush', // 推动

  // 以下为未来商场的
  api_order: '/api_order', // 订单模块
  wallet: '/walletandtoken', // 币池模块
  distribution: '/api_split', // 分账模块
  integralChain: '/api_integral', // 积分模块
  token: '/walletandtoken', // 代币模块
  blockChain: '/api_blockchain',
  futureShop: '/api_futureshop',
};

// 生产环境
const prod = {
  // url: 'http://sc.tichain.com.cn:8889',
  // url: 'http://sc.tichain.pro:8889',
  url: 'http://47.104.156.13:8889',
  queryDetailUrl: {
    test: {
      eth: 'https://rinkeby.etherscan.io',
      usdt: 'https://test-insight.bitpay.com',
    },
    main: {
      eth: 'https://etherscan.io',
      usdt: 'https://insight.bitpay.com/',
    },
  },
  account: '/account', // 帐户模块
  integral: '/api_integral', // 积分模块
  dictionary: '/api_dictionary', // 字典
  wallet_system: '/wallet_system', // 版本管理 钱包
  api_ticpush: '/api_ticpush', // 推动

  // 以下为未来商场的
  api_order: '/api_order', // 订单模块
  wallet: '/walletandtoken', // 币池模块
  distribution: '/api_split', // 分账模块
  integralChain: '/api_integral', // 积分模块
  token: '/walletandtoken', // 代币模块
  blockChain: '/api_blockchain',
  futureShop: '/api_futureshop',
};

export const config = {
  currentNet,
  dev,
  prod,
};
