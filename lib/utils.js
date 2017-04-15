const crypto = require('crypto');
const util = require('util');
const url = require('url');
const request = require('request');
const Boom = require('boom');

const BASE_URL = 'http://api.cn.ronghub.com/';

/**
 * 生成接口请求所需要的头部信息
 * @return {{}}
 */
module.exports.headers = function () {
  const nonce = parseInt(Math.random() * 0xffffff);
  const timestamp = parseInt(Date.now() / 1000);
  const signature = this.sha1(`${this.appSecret}${nonce}${timestamp}`);
  const values = [this.appKey, nonce, timestamp, signature];
  let headKeys = ['App-Key', 'Nonce', 'Timestamp', 'Signature'];
  if (this.usePrefix) {
    headKeys = headKeys.map(key => `RC-${key}`);
  }
  const result = {};
  headKeys.forEach((key, index) => result[key] = values[index]);
  return result;
};

module.exports.sha1 = function (input) {
  const shasum = crypto.createHash('sha1');
  shasum.update(input);
  return shasum.digest('hex');
};

module.exports.setLogger = function (logger) {
  let _logger = {};

  ['debug', 'info', 'warn', 'error'].forEach((level) => {
    if (!logger) {
      _logger[level] = () => {};
      return;
    }

    logger = util.isObject(logger) ? logger : console;
    _logger[level] = logger[level].bind(logger, '[node-rongcloud] ');
  });

  this.logger = _logger;
};

/**
 * 请求融云接口
 * @param api
 * @param method
 * @param options
 * @return {Promise}
 */
module.exports.request = function (api, method = 'GET', options = {}) {
  if (!api) {
    throw new Error('必须传入 api');
  }

  const logger = this.logger;

  const headers = Object.assign(this.headers(), options.headers);

  const requestOpts = Object.assign({
    uri: resolveUrl(api),
    method,
    timeout: this.timeout
  }, options, {headers});

  logger.debug(`开始 ${method} ${api}`, options);

  return new Promise((resolve, reject) => {
    request(requestOpts, (err, res, body) => {
      if (err) {
        logger.debug(`请求${api}出错`, err);
        return reject(Boom.create(500, '请求失败'));
      }

      logger.debug(`${method} ${api} 结束`, body);

      let result = body;

      // 尽量返回JSON数据
      try {
        result = util.isString(body) ? JSON.parse(body) : body;
      } catch (e) {
        logger.debug('返回的body不是json');
      }

      // 校验返回数据的格式，返回数据必须为json
      if (!result || !util.isObject(result)) {
        return reject(Boom.create(res.statusCode, '返回数据格式错误，非JSON格式', result));
      }

      if (res.statusCode < 400) {
        resolve(result);
      } else {
        reject(Boom.create(res.statusCode, result.errorMessage || '未知错误', result));
      }
    });
  });
};


// 增加get,post,put,del方法
['get', 'post', 'put', 'del'].forEach((prop) => {
  module.exports[prop] = function (url, options) {
    const method = prop === 'del' ? 'DELETE' : prop.toUpperCase();
    return this.request(url, method, options);
  };
});

function resolveUrl(api) {
  const apiObj = url.parse(api);
  if (!apiObj.protocol) {
    return url.resolve(BASE_URL, api);
  }
  return api;
}
