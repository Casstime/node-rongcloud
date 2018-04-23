/**
 * 获取历史消息下载连接
 * @function RongCloud#getHistoryMessagesUrl
 * @param {String} date 指定北京时间某天某小时，格式为2014010101，表示获取 2014 年 1 月 1 日凌晨 1 点至 2 点的数据。（必传）
 * @return {Promise}
 */
module.exports.getHistoryMessagesUrl = function (date) {
  const api = '/message/history';
  return this.post(api, { form: { date } });
};

/**
 * 删除指定时段的历史消息
 * @function RongCloud#removeHistoryMessages
 * @param {String} date 指定北京时间某天某小时，格式为2014010101，表示获取 2014 年 1 月 1 日凌晨 1 点至 2 点的数据。（必传）
 * @return {Promise}
 */
module.exports.removeHistoryMessages = function (date) {
  const api = '/message/history/delete';
  return this.post(api, { form: { date } });
};
