/**
 * 发送私聊消息
 * @see {@link http://www.rongcloud.cn/docs/server.html#发送单聊消息方法|发送单聊消息方法}
 * @param {Object} params
 * @param {String} params.fromUserId 发送人用户Id
 * @param {String} params.toUserId 接收用户Id
 * @param {String} params.objectName 消息类型
 * @param {String} params.content 发送消息内容
 * @param {String} [params.pushContent] 定义显示的 Push 内容
 * @param {String} [params.pushData] 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData
 * @param {String} [params.count] 针对 iOS 平台，Push 时用来控制未读消息显示数，只有在 toUserId 为一个用户 Id 的时候有效。
 * @param {Number|Boolean} [params.verifyBlacklist] 是否过滤发送人黑名单列表，0 表示为不过滤、 1 表示为过滤，默认为 0 不过滤
 * @param {Number|Boolean} [params.isCounted] 当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1
 * @param {Number|Boolean} [params.isIncludeSender] 	发送用户自已是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收，只有在 toUserId 为一个用户 Id 的时候有效
 */
module.exports.publishPrivateMessage = function (params) {
  const api = '/message/private/publish';
  return this.post(api, { form: params });
};

/**
 * 发送系统消息
 * @see {@link http://www.rongcloud.cn/docs/server.html#发送系统消息方法|发送系统消息}
 * @param {object} params 参数，参考融云文档
 * @return {*}
 */
module.exports.publishSystemMessage = function (params) {
  const api = '/message/system/publish';
  return this.post(api, { form: params });
};

module.exports.publishPrivateTemplate = function (params) {
  const api = '/message/private/publish_template';
  return this.post(api, { json: params });
};
