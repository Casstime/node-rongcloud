/**
 * @constructor
 * @param {object} options
 * @param {string} options.appKey
 * @param {string} options.appSecret
 * @param {boolean} [options.usePrefix] 头部是否使用RC-前缀
 * @param {number} [options.timeout] 请求超时时间
 * @param {boolean|object} [options.logger] 日志工具，默认false,不打印日志
 */
export = class RongCloud {
  constructor(options: any);

  /**
   * 扩展接口
   * @param obj
   */
  static extend(obj: any): void;

  /**
   * 同步用户组
   * @async
   * @function RongCloud#syncGroup
   * @param userId
   * @param {Array} groups 用户加入的群组
   * @example
   *  syncGroup('testUser', [{id: '123', name: 'group1'},{id: '456', name: 'group2'} ])
   */
  syncGroup(userId: any, groups: any): void;

  /**
   * 创建群组
   * @async
   * @function RongCloud#createGroup
   * @param {String | Array} userIds
   * @param groupId
   * @param groupName
   * @return {Promise}
   */
  createGroup(userIds: any | any, groupId: any, groupName: any): any;

  /**
   * 将用户加入群组
   * @async
   * @function RongCloud#joinGroup
   * @param {string|string[]} userIds
   * @param groupId
   * @param groupName
   * @return {*}
   */
  joinGroup(userIds: string | string[], groupId: any, groupName: any): any;

  /**
   * 将用户退出群组
   * @async
   * @function RongCloud#quitGroup
   * @param {string|string[]} userIds
   * @param groupId
   * @return {*}
   */
  quitGroup(userIds: string | string[], groupId: any): any;

  /**
   * 解散群组
   * @async
   * @function RongCloud#dismissGroup
   * @param {string} userId
   * @param {string} groupId
   * @return {*}
   */
  dismissGroup(userId: string, groupId: string): any;

  /**
   * 刷新群组信息
   * @async
   * @function RongCloud#refreshGroup
   * @param groupId
   * @param groupName
   * @return {*}
   */
  refreshGroup(groupId: any, groupName: any): any;

  /**
   * 查询群组成员
   * @async
   * @function RongCloud#queryGroupUsers
   * @param groupId
   * @return {*}
   */
  queryGroupUsers(groupId: any): any;

  /**
   * 群组禁言
   * @async
   * @function RongCloud#addGroupGagUsers
   * @param userIds
   * @param groupId
   * @param minute
   * @return {*}
   */
  addGroupGagUsers(userIds: any, groupId: any, minute: any): any;

  /**
   * 取消群组禁言
   * @async
   * @function RongCloud#removeGroupGagUsers
   * @param userIds
   * @param groupId
   * @return {*}
   */
  removeGroupGagUsers(userIds: any, groupId: any): any;

  /**
   * 查询群组被禁言用户
   * @async
   * @function RongCloud#queryGroupGagUsers
   * @param groupId
   * @return {*}
   */
  queryGroupGagUsers(groupId: any): any;

  /**
   * 获取历史消息下载连接
   * @function RongCloud#getHistoryMessagesUrl
   * @param {String} date 指定北京时间某天某小时，格式为2014010101，表示获取 2014 年 1 月 1 日凌晨 1 点至 2 点的数据。（必传）
   * @return {Promise}
   */
  getHistoryMessagesUrl(date: any): any;

  /**
   * 删除指定时段的历史消息
   * @function RongCloud#removeHistoryMessages
   * @param {String} date 指定北京时间某天某小时，格式为2014010101，表示获取 2014 年 1 月 1 日凌晨 1 点至 2 点的数据。（必传）
   * @param date
   * @return {Promise}
   */
  removeHistoryMessages(date: any, date: any): any;

  /**
   * 发送私聊消息
   * @function RongCloud#publishPrivateMessage
   * @see {@link http://www.rongcloud.cn/docs/server.html#message_private_publish}
   * @param {object} params
   * @param {string} params.fromUserId 发送人用户Id
   * @param {string} params.toUserId 接收用户Id
   * @param {string} params.objectName 消息类型
   * @param {string} params.content 发送消息内容
   * @param {string} [params.pushContent] 定义显示的 Push 内容
   * @param {string} [params.pushData] 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData
   * @param {string} [params.count] 针对 iOS 平台，Push 时用来控制未读消息显示数，只有在 toUserId 为一个用户 Id 的时候有效。
   * @param {(number|boolean)} [params.verifyBlacklist] 是否过滤发送人黑名单列表，0 表示为不过滤、 1 表示为过滤，默认为 0 不过滤
   * @param {(number|boolean)} [params.isCounted] 当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1
   * @param {(number|boolean)} [params.isIncludeSender] 	发送用户自已是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收，只有在 toUserId 为一个用户 Id 的时候有效
   * @see {@link http://www.rongcloud.cn/docs/server.html#发送单聊消息方法|发送单聊消息方法}
   * @return {Promise<*>}
   */
  publishPrivateMessage(params: any): any;

  /**
   * 发送单聊模板消息
   * @function RongCloud#publishPrivateTemplate
   * @param {object} params
   * @param {string} params.fromUserId 发送人用户 Id。（必传）
   * @param {(string|string[])} params.toUserId	接收用户 Id，提供多个本参数可以实现向多人发送消息，上限为 1000 人。（必传）
   * @param {string} params.objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
   * @param {string} params.values	消息内容中，标识位对应内容。（必传）
   * @param {string} params.content	发送消息内容，内容中定义标识通过 values 中设置的标识位内容进行替换，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
   * @param {string} params.pushContent	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。如果为自定义消息，定义显示的 Push 内容，内容中定义标识通过 values 中设置的标识位内容进行替换。如消息类型为自定义不需要 Push 通知，则对应数组传空值即可。(必传)
   * @param {string} [params.pushData]	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
   * @param {boolean|number} [params.verifyBlacklist]	是否过滤发送人黑名单列表，0 为不过滤、 1 为过滤，默认为 0 不过滤。(可选)
   * @return {Promise<*>}
   */
  publishPrivateTemplate(params: any): any;

  /**
   * 发送系统消息
   * @function RongCloud#publishSystemMessage
   * @param {object} params 参数，参考融云文档
   * @param {string} params.fromUserId	发送人用户 Id。（必传）
   * @param {(string|string[])} params.toUserId	接收用户Id，提供多个本参数可以实现向多用户发送系统消息，上限为 100 人。（必传）
   * @param {string} params.objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
   * @param {string} params.content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
   * @param {string} [params.pushContent]	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
   * @param {string} [params.pushData]	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
   * @param {((number|boolean))} [params.isPersisted]	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
   * @param {((number|boolean))} [params.isCounted]	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
   * @return {Promise<*>}
   * @see {@link http://www.rongcloud.cn/docs/server.html#message_system_publish}
   */
  publishSystemMessage(params: any): any;

  /**
   * 发送系统模板消息
   * @function RongCloud#publishSystemTemplate
   * @see {@link http://www.rongcloud.cn/docs/server.html#message_system_publish_template}
   * @param {object} params
   * @param {string} params.fromUserId	发送人用户 Id。（必传）
   * @param {(string|string[])} params.toUserId	接收用户 Id，提供多个本参数可以实现向多人发送消息，上限为 100 人。（必传）
   * @param {string} params.objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
   * @param {string} params.values	消息内容中，标识位对应内容。（必传）
   * @param {string} params.content	发送消息内容，内容中定义标识通过 values 中设置的标识位内容进行替换，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
   * @param {string} params.pushContent	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。如果为自定义消息，定义显示的 Push 内容，内容中定义标识通过 values 中设置的标识位内容进行替换。如消息类型为自定义不需要 Push 通知，则对应数组传空值即可。(必传)
   * @param {string} [params.pushData]	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
   * @return {Promise<*>}
   */
  publishSystemTemplate(params: any): any;

  /**
   * 发送群组消息
   * @function RongCloud#publishGroupMessage
   * @see {@link http://www.rongcloud.cn/docs/server.html#message_group_publish}
   * @param {object} params
   * @param {string} params.fromUserId	发送人用户 Id 。（必传）
   * @param {(string|string[])} params.toGroupId	接收群Id，提供多个本参数可以实现向多群发送消息，最多不超过 3 个群组。（必传）
   * @param {string} params.objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
   * @param {string} params.content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
   * @param {string} params.pushContent	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
   * @param {string} params.pushData	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
   * @param {(number|boolean)} params.isPersisted	Int	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
   * @param {(number|boolean)} params.isCounted	Int	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
   * @param {(number|boolean)} params.isIncludeSender	Int	发送用户自己是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收。（可选）
   * @return {Promise<*>}
   */
  publishGroupMessage(params: any): any;

  /**
   * 发送讨论组消息
   * @function RongCloud#publishDiscussionMessage
   * @see {@link http://www.rongcloud.cn/docs/server.html#message_discussion_publish}
   * @param {object} params
   * @param {string} params.fromUserId	发送人用户 Id。（必传）
   * @param {string} params.toDiscussionId	接收讨论组 Id 。（必传）
   * @param {string} params.objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
   * @param {string} params.content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
   * @param {string} [params.pushContent]	定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
   * @param {string} [params.pushData]	针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
   * @param {(number|boolean)} [params.isPersisted]	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
   * @param {(number|boolean)} [params.isCounted]	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
   * @param {(number|boolean)} [params.isIncludeSender]	发送用户自己是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收。（可选）
   * @return {Promise<*>}
   */
  publishDiscussionMessage(params: any): any;

  /**
   * 广播聊天室消息[付费]
   * @function RongCloud#publishChatRoomMessage
   * @see {@link http://www.rongcloud.cn/docs/server.html#message_chatroom_publish}
   * @param {object} params
   * @param {string} params.fromUserId	发送人用户 Id。（必传）
   * @param {(string|string[])} params.toChatroomId	接收聊天室Id，提供多个本参数可以实现向多个聊天室发送消息，建议最多不超过 10 个聊天室。（必传）
   * @param {string} params.objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
   * @param {string} params.content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
   * @return {Promise<*>}
   */
  publishChatRoomMessage(params: any): any;

  /**
   * 广播聊天室消息[付费]
   * @function RongCloud#broadcastChatRoomMessage
   * @param {string} params.fromUserId	发送人用户 Id。（必传）
   * @param {string} params.objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
   * @param {string} params.content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
   * @return {Promise<*>}
   */
  broadcastChatRoomMessage(params: any): any;

  /**
   * 发送广播消息[付费]
   * @function RongCloud#broadcastMessage
   * @param {object} params
   * @param {string} params.fromUserId 发送人用户 Id。（必传）
   * @param {string} params.objectName	消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
   * @param {string} params.content	发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
   * @return {Promise<*>}
   */
  broadcastMessage(params: any): any;

  /**
   * 添加敏感词
   * @function RongCloud#addSensitiveWord
   * @param word
   * @param replaceWord
   * @return {Promise<*>}
   */
  addSensitiveWord(word: any, replaceWord: any): any;

  /**
   * 移除敏感词
   * @function RongCloud#removeSensitiveWord
   * @param word
   * @return {Promise<*>}
   */
  removeSensitiveWord(word: any): any;

  /**
   * 获取用户token
   * @function RongCloud#getUserToken
   * @param {string} userId 用户 Id，最大长度 64 字节。是用户在 App 中的唯一标识码，必须保证在同一个 App 内不重复，重复的用户 Id 将被当作是同一用户。（必传）
   * @param {string} name 用户名称，最大长度 128 字节。用来在 Push 推送时显示用户的名称。（必传）
   * @param {string} portraitUri 用户头像 URI，最大长度 1024 字节。（必传）
   * @return {Promise}
   */
  getUserToken(userId: string, name: string, portraitUri: string): any;

  /**
   * 刷新用户token
   * @function RongCloud#refreshUserToken
   * @param {string} userId	用户 Id，最大长度 64 字节。是用户在 App 中的唯一标识码，必须保证在同一个 App 内不重复，重复的用户 Id 将被当作是同一用户。（必传）
   * @param {string} [name]	用户名称，最大长度 128 字节。用来在 Push 推送时，显示用户的名称，刷新用户名称后 5 分钟内生效。（可选，提供即刷新，不提供忽略）
   * @param {string} [portraitUri] 用户头像 URI，最大长度 1024 字节。用来在 Push 推送时显示。（可选，提供即刷新，不提供忽略）
   * @return {Promise}
   */
  refreshUserToken(userId: string, name?: string, portraitUri?: string): any;

  /**
   * 检查用户在线状态
   * @function RongCloud#checkUserOnline
   * @param {string} userId 用户id
   * @return {Promise}
   */
  checkUserOnline(userId: string): any;

  /**
   * 校验签名是否正确
   * @function RongCloud#validateSignature
   * @param {number|string} timestamp
   * @param {string} nonce
   * @param {string} signature
   */
  validateSignature(timestamp: number | string, nonce: string, signature: string): void;

  /**
   * 将bool值属性转换成0或1
   * @function RongCloud#booleanPropsToNumber
   * @param {Object} params
   * @return {Object}
   */
  booleanPropsToNumber(params: any): any;

  /**
   * 生成接口请求所需要的头部信息
   * @return {{}}
   */
  headers(): any;

  /**
   * 生成签名
   * @param {number|string} timestamp
   * @param {string} nonce
   * @return {string}
   */
  sign(timestamp: number | string, nonce: string): string;

  /**
   * @param logger
   */
  setLogger(logger: any): void;

  /**
   * 请求融云接口
   * @param api
   * @param method
   * @param options
   * @return {Promise}
   */
  request(api: any, method: any, options: any): any;
}
