/**
 * @param {object} options
 * @param {string} options.appKey
 * @param {string} options.appSecret
 * @param {boolean} [options.usePrefix] 头部是否使用RC-前缀
 * @param {number} [options.timeout] 请求超时时间
 * @param {boolean|object} [options.logger] 日志工具，默认false,不打印日志
 * @constructor
 */
function RongCloud(options) {
  const { appKey, appSecret, usePrefix } = options;
  if (!appKey || !appSecret) {
    throw new Error('appKey 和 appSecret 必须传入');
  }

  this.appKey = appKey;
  this.appSecret = appSecret;
  this.usePrefix = usePrefix;
  this.timeout = options.timeout || 6000;

  this.setLogger(options.logger);
}

// 内置接口
Object.assign(
  RongCloud.prototype,
  require('./lib/util'),
  require('./lib/user'),
  require('./lib/message'),
  require('./lib/history'),
  require('./lib/sensitive-word'),
  require('./lib/group')
);

/**
 * 扩展接口
 * @param obj
 */
RongCloud.extend = function (obj) {
  Object.assign(RongCloud.prototype, obj);
};

module.exports = RongCloud;
