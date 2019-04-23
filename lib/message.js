/**
 * @typedef {Object} PublishPrivateMessageParams
 * @property {string} fromUserId 发送人用户Id
 * @property {string} toUserId 接收用户Id
 * @property {string} objectName 消息类型
 * @property {string} content 发送消息内容
 * @property {string} [pushContent] 定义显示的 Push 内容
 * @property {string} [pushData] 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData
 * @property {string} [count] 针对 iOS 平台，Push 时用来控制未读消息显示数，只有在 toUserId 为一个用户 Id 的时候有效。
 * @property {(number|boolean)} [verifyBlacklist] 是否过滤发送人黑名单列表，0 表示为不过滤、 1 表示为过滤，默认为 0 不过滤
 * @property {(number|boolean)} [isCounted] 当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1
 * @property {(number|boolean)} [isIncludeSender] 	发送用户自已是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收，只有在 toUserId 为一个用户 Id 的时候有效
 */

/**
 * 发送私聊消息
 * @function RongCloud#publishPrivateMessage
 * @see {@link http://www.rongcloud.cn/docs/server.html#message_private_publish}
 * @see {@link http://www.rongcloud.cn/docs/server.html#发送单聊消息方法|发送单聊消息方法}
 * @param {PublishPrivateMessageParams} params
 * @return {Promise<*>}
 */
module.exports.publishPrivateMessage = function (params) {
  const api = '/message/private/publish';
  return this.post(api, { form: this.booleanPropsToNumber(params) });
};

/**
 * @typedef PublishPrivateTemplateParams
 * @property {string} fromUserId 发送人用户 Id。（必传）
 * @property {(string|string[])} toUserId	接收用户 Id，提供多个本参数可以实现向多人发送消息，上限为 1000 人。（必传）
 * @property {string} objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
 * @property {string} values	消息内容中，标识位对应内容。（必传）
 * @property {string} content	发送消息内容，内容中定义标识通过 values 中设置的标识位内容进行替换，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
 * @property {string} pushContent	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。如果为自定义消息，定义显示的 Push 内容，内容中定义标识通过 values 中设置的标识位内容进行替换。如消息类型为自定义不需要 Push 通知，则对应数组传空值即可。(必传)
 * @property {string} [pushData]	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
 * @property {boolean|number} [verifyBlacklist]	是否过滤发送人黑名单列表，0 为不过滤、 1 为过滤，默认为 0 不过滤。(可选)
 */

 /**
 * 发送单聊模板消息
 * @function RongCloud#publishPrivateTemplate
 * @param {PublishPrivateTemplateParams} params
 * @return {Promise<*>}
 */
module.exports.publishPrivateTemplate = function (params) {
  const api = '/message/private/publish_template';
  return this.post(api, { json: this.booleanPropsToNumber(params) });
};

/**
 * @typedef {Object} PublishSystemMessageParams
 * @property {string} fromUserId	发送人用户 Id。（必传）
 * @property {(string|string[])} toUserId	接收用户Id，提供多个本参数可以实现向多用户发送系统消息，上限为 100 人。（必传）
 * @property {string} objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
 * @property {string} content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
 * @property {string} [pushContent]	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
 * @property {string} [pushData]	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
 * @property {((number|boolean))} [isPersisted]	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
 * @property {((number|boolean))} [isCounted]	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
 */
/** 发送系统消息
 * @function RongCloud#publishSystemMessage
 * @param {PublishSystemMessageParams} params 参数，参考融云文档
 * @return {Promise<*>}
 * @see {@link http://www.rongcloud.cn/docs/server.html#message_system_publish}
 */
module.exports.publishSystemMessage = function (params) {
  const api = '/message/system/publish';
  return this.post(api, { form: this.booleanPropsToNumber(params) });
};


/**
 * @typedef {Object} PublishSystemTemplateParams
 * @property {string} fromUserId	发送人用户 Id。（必传）
 * @property {(string|string[])} toUserId	接收用户 Id，提供多个本参数可以实现向多人发送消息，上限为 100 人。（必传）
 * @property {string} objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
 * @property {string} values	消息内容中，标识位对应内容。（必传）
 * @property {string} content	发送消息内容，内容中定义标识通过 values 中设置的标识位内容进行替换，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
 * @property {string} pushContent	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。如果为自定义消息，定义显示的 Push 内容，内容中定义标识通过 values 中设置的标识位内容进行替换。如消息类型为自定义不需要 Push 通知，则对应数组传空值即可。(必传)
 * @property {string} [pushData]	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
 */
 /** 发送系统模板消息
 * @function RongCloud#publishSystemTemplate
 * @see {@link http://www.rongcloud.cn/docs/server.html#message_system_publish_template}
 * @param {PublishSystemTemplateParams} params
 * @return {Promise<*>}
 */
module.exports.publishSystemTemplate = function (params) {
  const api = '/message/system/publish_template';
  return this.post(api, { json: params });
};

/**
 * @typedef {Object} PublishGroupMessageParams
 * @property {string} fromUserId	发送人用户 Id 。（必传）
 * @property {(string|string[])} toGroupId	接收群Id，提供多个本参数可以实现向多群发送消息，最多不超过 3 个群组。（必传）
 * @property {string} objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
 * @property {string} content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
 * @property {string} pushContent	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
 * @property {string} pushData	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
 * @property {(number|boolean)} isPersisted	Int	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
 * @property {(number|boolean)} isCounted	Int	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
 * @property {(number|boolean)} isIncludeSender	Int	发送用户自己是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收。（可选）
 */

/**
 * 发送群组消息
 * @function RongCloud#publishGroupMessage
 * @see {@link http://www.rongcloud.cn/docs/server.html#message_group_publish}
 * @param {PublishGroupMessageParams} params
 * @return {Promise<*>}
 */
module.exports.publishGroupMessage = function (params) {
  const api = '/message/group/publish';
  return this.post(api, { form: this.booleanPropsToNumber(params) });
};

/**
 * @typedef {Object} PublishDiscussionMessageParams
 * @property {string} fromUserId	发送人用户 Id。（必传）
 * @property {string} toDiscussionId	接收讨论组 Id 。（必传）
 * @property {string} objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
 * @property {string} content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
 * @property {string} [pushContent]	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
 * @property {string} [pushData]	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
 * @property {(number|boolean)} [isPersisted]	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
 * @property {(number|boolean)} [isCounted]	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
 * @property {(number|boolean)} [isIncludeSender]	发送用户自己是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收。（可选）
 */
/**
 * 发送讨论组消息
 * @function RongCloud#publishDiscussionMessage
 * @see {@link http://www.rongcloud.cn/docs/server.html#message_discussion_publish}
 * @param {PublishDiscussionMessageParams} params
 * @return {Promise<*>}
 */
module.exports.publishDiscussionMessage = function (params) {
  const api = '/message/discussion/publish';
  return this.post(api, { form: this.booleanPropsToNumber(params) });
};

/**
 * @typedef {Object} PublishChatRoomMessageParams
 * @property {string} fromUserId	发送人用户 Id。（必传）
 * @property {(string|string[])} toChatroomId	接收聊天室Id，提供多个本参数可以实现向多个聊天室发送消息，建议最多不超过 10 个聊天室。（必传）
 * @property {string} objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
 * @property {string} content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
 */
/**
 * 广播聊天室消息[付费]
 * @function RongCloud#publishChatRoomMessage
 * @see {@link http://www.rongcloud.cn/docs/server.html#message_chatroom_publish}
 * @param {PublishChatRoomMessageParams} params
 * @return {Promise<*>}
 */
module.exports.publishChatRoomMessage = function(params) {
  const api = '/message/chatroom/publish';
  return this.post(api, { form: params });
};

/**
 * @typedef {Object} BroadcastChatRoomMessageParams
 * @property {string} fromUserId	发送人用户 Id。（必传）
 * @property {string} objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
 * @property {string} content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
 */
/**
 * 广播聊天室消息[付费]
 * @function RongCloud#broadcastChatRoomMessage
 * @params {BroadcastChatRoomMessageParams} params
 * @return {Promise<*>}
 */
module.exports.broadcastChatRoomMessage = function (params) {
  const api = '/message/chatroom/publish';
  return this.post(api, { form: params });
};

/**
 * @typedef {Object} BroadcastMessageParams
 * @property {string} fromUserId 发送人用户 Id。（必传）
 * @property {string} objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
 * @property {string} content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
 */
/**
 * 发送广播消息[付费]
 * @function RongCloud#broadcastMessage
 * @param {BroadcastMessageParams} params
 * @return {Promise<*>}
 */
module.exports.broadcastMessage = function (params) {
  const api = '/message/broadcast';
  return this.post(api, { form: params });
};

