/**
 * 添加敏感词
 * @function RongCloud#addSensitiveWord
 * @param word
 * @param replaceWord
 * @return {Promise<*>}
 */
module.exports.addSensitiveWord = function (word, replaceWord) {
  const api = '/sensitiveword/add';
  return this.post(api, { form: { word, replaceWord } });
};

/**
 * 移除敏感词
 * @function RongCloud#removeSensitiveWord
 * @param word
 * @return {Promise<*>}
 */
module.exports.removeSensitiveWord = function (word) {
  const api = '/sensitiveword/delete';
  return this.post(api, { form: { word } });
};

/**
 * 查询敏感词列表
 * @function RongCloud#removeSensitiveWord
 * @param type
 * @return {Promise<*>}
 */
module.exports.getSensitiveWordList = function (type) {
  const api = '/sensitiveword/list';
  return this.post(api, { form: { type } });
};
