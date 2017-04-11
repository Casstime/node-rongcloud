const url = require('url');
const util = require('util');
const crypto = require('crypto');
const request = require('request');
const Boom = require('boom');

const invokeError = require('./invokeError');

const REQUEST_TIMEOUT = 3 * 1000;
const BASE_URL = 'http://api.cn.ronghub.com/';
const settings = {};

/** @module invoke */

/**
 * 调用接口,返回结果
 * @static
 * @param {String} api 接口url
 * @param {String} [method] GET | PUT | POST | DELETE
 * @param [options] request其他选项 [request]{@link https://github.com/request/request}
 * @return {Promise}
 */
function invoke(api, method = 'GET', options = {}) {

  if (!api) {
    throw new Error('必须传入 api');
  }

  const requestOpts = Object.assign({
    uri: createFullUrl(api),
    method,
    headers: getHeaders(),
    timeout: REQUEST_TIMEOUT
  }, options);

  return new Promise((resolve, reject) => {
    request(requestOpts, (err, res, body) => {
      if (err) {
        console.debug(`[node-rongcloud] 请求${api}出错`, err);
        return reject(Boom.create(500, '请求出错'));
      }

      let result = body;

      // 尽量返回JSON数据
      try {
        result = util.isString(body) ? JSON.parse(body) : body;
      } catch (e) {
        console.debug('[node-rongcloud] 返回的body不是json');
      }

      if (!result || !util.isObject(result)) {
        return reject(invokeError(null, res.statusCode));
      }

      if (res.statusCode === 200) {
        resolve(result);
      } else {
        reject(invokeError(result.code, res.statusCode));
      }
    });
  });
}

/**
 * @function get
 * @static
 * @param {String} url
 * @param [options]
 * @return {Promise}
 */

/**
 * @function post
 * @static
 * @param {String} url
 * @param {Object} [options]
 * @return {Promise}
 */

/**
 * @function put
 * @static
 * @param {String} url
 * @param [options]
 * @return {Promise}
 */

/**
 * @function del
 * @static
 * @param {String} url
 * @param [options]
 * @return {Promise}
 */

// 增加get,post,put,del方法
['get', 'post', 'put', 'del'].forEach((prop) => {
  invoke[prop] = (url, options) => {
    const method = prop === 'del' ? 'DELETE' : prop.toUpperCase();
    return invoke(url, method, options);
  }
});

/**
 * 初始化
 * @static
 * @param {Object} options
 * @param {String} options.appKey
 * @param {String} options.appSecret
 * @param {String} [options.usePrefix] 签名头部是否使用RC-前缀，默认为false
 */
function init(options) {
  settings.appKey = options.appKey;
  settings.appSecret = options.appSecret;
  settings.usePrefix = options.usePrefix || false;
}

function createFullUrl(api) {
  return url.resolve(BASE_URL, api);
}

function getHeaders() {
  const { appKey, appSecret, usePrefix } = settings;
  const nonce = parseInt(Math.random() * 0xffffff);
  const timestamp = parseInt(Date.now() / 1000);
  const signature = sha1(`${appSecret}${nonce}${timestamp}`);
  const values = [appKey, nonce, signature];
  let headKeys = ['App-Key', 'Nonce', 'Signature'];
  if (usePrefix) {
    headKeys = headKeys.map(key => `RC-${key}`);
  }
  const result = {};
  headKeys.forEach((key, index) => result[key] = values[index]);
  return result;
}

function sha1(input) {
  const shasum = crypto.createHash('sha1');
  shasum.update(input);
  return shasum.digest('hex');
}

module.exports = invoke;
module.exports.init = init;
module.exports.get = invoke.get;
module.exports.post = invoke.post;
module.exports.del = invoke.del;
module.exports.put = invoke.put;
