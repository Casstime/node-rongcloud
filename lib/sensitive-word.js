/**
 * 添加敏感词
 * @param word
 * @param replaceWord
 * @return {*}
 */
module.exports.addSensitiveWord = function (word, replaceWord) {
  const api = '/sensitiveword/add';
  return this.post(api, { form: { word, replaceWord } });
};

/**
 * 移除敏感词
 * @param word
 * @return {*}
 */
module.exports.removeSensitiveWord = function (word) {
  const api = '/sensitiveword/delete';
  return this.post(api, { form: { word } });
};

/**
 * 查询敏感词列表
 */
module.exports.getSensitiveWordList = function (type) {
  const api = '/sensitiveword/list';
  return this.post(api, { form: { type } });
};
