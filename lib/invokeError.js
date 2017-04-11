const Boom = require('boom');

const errors = {
  InternalError: '服务器端内部逻辑错误',
  AppSecretError: 'App Key 与 App Secret 不匹配',
  ParameterError: '参数错误',
  NoDataError: '无POST任何数据',
  SignatureError: '验证签名错误',
  ParameterLengthLimitError: '参数长度超限',
  AppLocked: 'App 被锁定或删除',
  ApiLimitError: 'Api被限制调用	',
  FrequencyLimitError: 'Api调用频率超限',
  AppInvalid: '未开通该服务，请到开发者管理后台开通',
  Timeout: '内部服务响应超时',
  UserAccountLimitError: '测试用户数量超限',
  RequestError: '请求错误',
  Unauthorized: '未授权',
  Forbidden: '拒绝调用',
  NotFound: '服务器找不到请求的地址',
  MethodNotAllowed: '群容量超出上限，禁止调用',
  UnknownError: '未知错误'
};

const codeErrorTypes = {
  '1000': 'InternalError',
  '1001': 'AppSecretError',
  '1002': 'ParameterError',
  '1003': 'NoDataError',
  '1004': 'SignatureError',
  '1005': 'ParameterLengthLimitError',
  '1006': 'AppLocked',
  '1007': 'ApiLimitError',
  '1008': 'FrequencyLimitError',
  '1009': 'AppInvalid',
  '1050': 'Timeout',
  '2007': 'UserAccountLimitError'
};

const httpCodeErrorTypes = {
  '400': 'RequestError',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '404': 'NotFound',
  '405': 'MethodNotAllowed',
  '429': 'FrequencyLimitError',
  '500': 'InternalError',
  '504': 'Timeout'
};

module.exports = function createError(code, httpCode) {
  if (httpCode === 200) {
    return null;
  }

  const errorType = codeErrorTypes[code] || httpCodeErrorTypes[httpCode] || 'UnknownError';
  const message = errors[errorType];

  return Boom.create(httpCode, message);
};
