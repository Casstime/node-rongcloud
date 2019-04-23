const utility = require('./lib/util');
const group = require('./lib/group');
const message = require('./lib/message');
const sensitiveWord = require('./lib/sensitive-word');
const history = require('./lib/history');
const user = require('./lib/user');

/**
 * 构造属性
 * @typedef {Object} Options
 * @property {string} appKey
 * @property {string} appSecret
 * @property {boolean} [usePrefix] - 头部是否使用RC-前缀
 * @property {number} [timeout] - 请求超时时间
 * @property {boolean|object} [logger] - 日志工具，默认false,不打印日志
 */

/**
 * @constructor
 * @param {Options} options
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
  utility,
  user,
  message,
  history,
  sensitiveWord,
  group
);

/**
 * 扩展接口
 * @param obj
 */
RongCloud.extend = function (obj) {
  Object.assign(RongCloud.prototype, obj);
};

module.exports = RongCloud;
