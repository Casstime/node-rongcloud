const invoke = require('./lib/invoke');
const message = require('./lib/message');

/**
 * @module node-rongcloud
 */

/**
 * 初始化
 * @function
 * @static
 * @param {object} options
 * @param {string} options.appKey
 * @param {string} options.appSecret
 * @param {boolean} options.usePrefix 头部是否使用RC-前缀
 */
module.exports.init = invoke.init;

/**
 * 融云请求接口
 * @see {@link module:invoke}
 */
module.exports.invoke = invoke;

/**
 * 消息相关接口
 * @see {@link module:message}
 */
module.exports.message = message;
