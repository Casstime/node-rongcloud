declare class RongCloud {
    /**
     * 
     * @param options
     */
    constructor(options: Options);

    /**
     * 同步用户组
     * @param userId
     * @param groups 用户加入的群组
     */
    syncGroup(userId: any, groups: any[]): void;

    /**
     * 创建群组
     * @param userIds
     * @param groupId
     * @param groupName
     */
    createGroup(userIds: string | string[], groupId: any, groupName: any): Promise<any>;

    /**
     * 将用户加入群组
     * @param userIds
     * @param groupId
     * @param groupName
     */
    joinGroup(userIds: string | string[], groupId: any, groupName: any): Promise<any>;

    /**
     * 将用户退出群组
     * @param userIds
     * @param groupId
     */
    quitGroup(userIds: string | string[], groupId: any): Promise<any>;

    /**
     * 解散群组
     * @param userId
     * @param groupId
     */
    dismissGroup(userId: string, groupId: string): Promise<any>;

    /**
     * 刷新群组信息
     * @param groupId
     * @param groupName
     */
    refreshGroup(groupId: string, groupName: string): Promise<any>;

    /**
     * 查询群组成员
     * @param groupId
     */
    queryGroupUsers(groupId: any): Promise<any>;

    /**
     * 群组禁言
     * @param userIds
     * @param groupId
     * @param minute
     */
    addGroupGagUsers(userIds: any, groupId: any, minute: any): Promise<any>;

    /**
     * 取消群组禁言
     * @param userIds
     * @param groupId
     */
    removeGroupGagUsers(userIds: any, groupId: any): Promise<any>;

    /**
     * 查询群组被禁言用户
     * @param groupId
     */
    queryGroupGagUsers(groupId: any): Promise<any>;

    /**
     * 获取历史消息下载连接
     * @param date 指定北京时间某天某小时，格式为2014010101，表示获取 2014 年 1 月 1 日凌晨 1 点至 2 点的数据。（必传）
     */
    getHistoryMessagesUrl(date: string): Promise<any>;

    /**
     * 删除指定时段的历史消息
     * @param date 指定北京时间某天某小时，格式为2014010101，表示获取 2014 年 1 月 1 日凌晨 1 点至 2 点的数据。（必传）
     */
    removeHistoryMessages(date: string): Promise<any>;

    /**
     * 发送私聊消息
     * @see
     * @see
     * @param params
     */
    publishPrivateMessage(params: PublishPrivateMessageParams): Promise<any>;

    /**
     * 发送单聊模板消息
     * @param params
     */
    publishPrivateTemplate(params: PublishPrivateTemplateParams): Promise<any>;

    /**
     * 发送系统消息
     * @param params 参数，参考融云文档
     * @see
     */
    publishSystemMessage(params: PublishSystemMessageParams): Promise<any>;

    /**
     * 发送系统模板消息
     * @see
     * @param params
     */
    publishSystemTemplate(params: PublishSystemTemplateParams): Promise<any>;

    /**
     * 发送群组消息
     * @see
     * @param params
     */
    publishGroupMessage(params: PublishGroupMessageParams): Promise<any>;

    /**
     * 发送讨论组消息
     * @see
     * @param params
     */
    publishDiscussionMessage(params: PublishDiscussionMessageParams): Promise<any>;

    /**
     * 广播聊天室消息[付费]
     * @see
     * @param params
     */
    publishChatRoomMessage(params: PublishChatRoomMessageParams): Promise<any>;

    /**
     * 广播聊天室消息[付费]
     */
    broadcastChatRoomMessage(): Promise<any>;

    /**
     * 发送广播消息[付费]
     * @param params
     */
    broadcastMessage(params: BroadcastMessageParams): Promise<any>;

    /**
     * 添加敏感词
     * @param word
     * @param replaceWord
     */
    addSensitiveWord(word: any, replaceWord: any): Promise<any>;

    /**
     * 移除敏感词
     * @param word
     */
    removeSensitiveWord(word: any): Promise<any>;

    /**
     * 查询敏感词列表
     * @param type
     */
    removeSensitiveWord(type: any): Promise<any>;

    /**
     * 获取用户token
     * @param userId 用户 Id，最大长度 64 字节。是用户在 App 中的唯一标识码，必须保证在同一个 App 内不重复，重复的用户 Id 将被当作是同一用户。（必传）
     * @param name 用户名称，最大长度 128 字节。用来在 Push 推送时显示用户的名称。（必传）
     * @param portraitUri 用户头像 URI，最大长度 1024 字节。（必传）
     */
    getUserToken(userId: string, name: string, portraitUri: string): Promise<{code: number, token: string, userId, string}>;

    /**
     * 刷新用户token
     * @param userId 用户 Id，最大长度 64 字节。是用户在 App 中的唯一标识码，必须保证在同一个 App 内不重复，重复的用户 Id 将被当作是同一用户。（必传）
     * @param name 用户名称，最大长度 128 字节。用来在 Push 推送时，显示用户的名称，刷新用户名称后 5 分钟内生效。（可选，提供即刷新，不提供忽略）
     * @param portraitUri 用户头像 URI，最大长度 1024 字节。用来在 Push 推送时显示。（可选，提供即刷新，不提供忽略）
     */
    refreshUserToken(userId: string, name?: string, portraitUri?: string): Promise<any>;

    /**
     * 检查用户在线状态
     * @param userId 用户id
     */
    checkUserOnline(userId: string): Promise<any>;

    /**
     * 校验签名是否正确
     * @param timestamp
     * @param nonce
     * @param signature
     * @returns
     */
    validateSignature(timestamp: number | string, nonce: string, signature: string): boolean;

    /**
     * 
     * @param logger
     */
    setLogger(logger: any): void;

    /**
     * 请求融云接口
     * @param api
     * @param method
     * @param options
     */
    request(api: string, method: string, options: any): Promise<any>;

    /**
     * 
     * @param api
     * @param options
     */
    get(api: string, options: any): Promise<any>;

    /**
     * 
     * @param api
     * @param options
     */
    post(api: string, options: any): Promise<any>;

    /**
     * 
     * @param api
     * @param options
     */
    put(api: string, options: any): Promise<any>;

    /**
     * 
     * @param api
     * @param options
     */
    del(api: string, options: any): Promise<any>;

    /**
     * 将bool值属性转换成0或1
     * @param params
     */
    booleanPropsToNumber(params: Object): Object;

    /**
     * 扩展接口
     * @param obj
     */
    static extend(obj: any): void;

}

declare interface PublishPrivateMessageParams {
    /**
     * 发送人用户Id
     */
    fromUserId: string;
    /**
     * 接收用户Id
     */
    toUserId: string;
    /**
     * 消息类型
     */
    objectName: string;
    /**
     * 发送消息内容
     */
    content: string;
    /**
     * 定义显示的 Push 内容
     */
    pushContent?: string;
    /**
     * 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData
     */
    pushData?: string;
    /**
     * 针对 iOS 平台，Push 时用来控制未读消息显示数，只有在 toUserId 为一个用户 Id 的时候有效。
     */
    count?: string;
    /**
     * 是否过滤发送人黑名单列表，0 表示为不过滤、 1 表示为过滤，默认为 0 不过滤
     */
    verifyBlacklist?: number | boolean;
    /**
     * 当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1
     */
    isCounted?: number | boolean;
    /**
     * 发送用户自已是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收，只有在 toUserId 为一个用户 Id 的时候有效
     */
    isIncludeSender?: number | boolean;
}

declare interface PublishPrivateTemplateParams {
    /**
     * 发送人用户 Id。（必传）
     */
    fromUserId: string;
    /**
     * 接收用户 Id，提供多个本参数可以实现向多人发送消息，上限为 1000 人。（必传）
     */
    toUserId: string | string[];
    /**
     * 消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
     */
    objectName: string;
    /**
     * 消息内容中，标识位对应内容。（必传）
     */
    values: string;
    /**
     * 发送消息内容，内容中定义标识通过 values 中设置的标识位内容进行替换，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
     */
    content: string;
    /**
     * 定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。如果为自定义消息，定义显示的 Push 内容，内容中定义标识通过 values 中设置的标识位内容进行替换。如消息类型为自定义不需要 Push 通知，则对应数组传空值即可。(必传)
     */
    pushContent: string;
    /**
     * 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
     */
    pushData?: string;
    /**
     * 是否过滤发送人黑名单列表，0 为不过滤、 1 为过滤，默认为 0 不过滤。(可选)
     */
    verifyBlacklist?: boolean | number;
}

declare interface PublishSystemMessageParams {
    /**
     * 发送人用户 Id。（必传）
     */
    fromUserId: string;
    /**
     * 接收用户Id，提供多个本参数可以实现向多用户发送系统消息，上限为 100 人。（必传）
     */
    toUserId: string | string[];
    /**
     * 消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
     */
    objectName: string;
    /**
     * 发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
     */
    content: string;
    /**
     * 定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
     */
    pushContent?: string;
    /**
     * 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
     */
    pushData?: string;
    /**
     * 当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
     */
    isPersisted?: number | boolean;
    /**
     * 当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
     */
    isCounted?: number | boolean;
}

declare interface PublishSystemTemplateParams {
    /**
     * 发送人用户 Id。（必传）
     */
    fromUserId: string;
    /**
     * 接收用户 Id，提供多个本参数可以实现向多人发送消息，上限为 100 人。（必传）
     */
    toUserId: string | string[];
    /**
     * 消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
     */
    objectName: string;
    /**
     * 消息内容中，标识位对应内容。（必传）
     */
    values: string;
    /**
     * 发送消息内容，内容中定义标识通过 values 中设置的标识位内容进行替换，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
     */
    content: string;
    /**
     * 定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。如果为自定义消息，定义显示的 Push 内容，内容中定义标识通过 values 中设置的标识位内容进行替换。如消息类型为自定义不需要 Push 通知，则对应数组传空值即可。(必传)
     */
    pushContent: string;
    /**
     * 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
     */
    pushData?: string;
}

declare interface PublishGroupMessageParams {
    /**
     * 发送人用户 Id 。（必传）
     */
    fromUserId: string;
    /**
     * 接收群Id，提供多个本参数可以实现向多群发送消息，最多不超过 3 个群组。（必传）
     */
    toGroupId: string | string[];
    /**
     * 消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
     */
    objectName: string;
    /**
     * 发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
     */
    content: string;
    /**
     * 定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
     */
    pushContent: string;
    /**
     * 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
     */
    pushData: string;
    /**
     * Int	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
     */
    isPersisted: number | boolean;
    /**
     * Int	当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
     */
    isCounted: number | boolean;
    /**
     * Int	发送用户自己是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收。（可选）
     */
    isIncludeSender: number | boolean;
}

declare interface PublishDiscussionMessageParams {
    /**
     * 发送人用户 Id。（必传）
     */
    fromUserId: string;
    /**
     * 接收讨论组 Id 。（必传）
     */
    toDiscussionId: string;
    /**
     * 消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
     */
    objectName: string;
    /**
     * 发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
     */
    content: string;
    /**
     * 定义显示的 Push 内容，如果 objectName 为融云内置消息类型时，则发送后用户一定会收到 Push 信息。 如果为自定义消息，则 pushContent 为自定义消息显示的 Push 内容，如果不传则用户不会收到 Push 通知。(可选)
     */
    pushContent?: string;
    /**
     * 针对 iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData。(可选)
     */
    pushData?: string;
    /**
     * 当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行存储，0 表示为不存储、 1 表示为存储，默认为 1 存储消息。(可选)
     */
    isPersisted?: number | boolean;
    /**
     * 当前版本有新的自定义消息，而老版本没有该自定义消息时，老版本客户端收到消息后是否进行未读消息计数，0 表示为不计数、 1 表示为计数，默认为 1 计数，未读消息数增加 1。(可选)
     */
    isCounted?: number | boolean;
    /**
     * 发送用户自己是否接收消息，0 表示为不接收，1 表示为接收，默认为 0 不接收。（可选）
     */
    isIncludeSender?: number | boolean;
}

declare interface PublishChatRoomMessageParams {
    /**
     * 发送人用户 Id。（必传）
     */
    fromUserId: string;
    /**
     * 接收聊天室Id，提供多个本参数可以实现向多个聊天室发送消息，建议最多不超过 10 个聊天室。（必传）
     */
    toChatroomId: string | string[];
    /**
     * 消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
     */
    objectName: string;
    /**
     * 发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
     */
    content: string;
}

declare interface BroadcastChatRoomMessageParams {
    /**
     * 发送人用户 Id。（必传）
     */
    fromUserId: string;
    /**
     * 消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
     */
    objectName: string;
    /**
     * 发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
     */
    content: string;
}

declare interface BroadcastMessageParams {
    /**
     * 发送人用户 Id。（必传）
     */
    fromUserId: string;
    /**
     * 消息类型，参考融云消息类型表.消息标志；可自定义消息类型，长度不超过 32 个字符，您在自定义消息时需要注意，不要以 "RC:" 开头，以避免与融云系统内置消息的 ObjectName 重名。（必传）
     */
    objectName: string;
    /**
     * 发送消息内容，参考融云消息类型表.示例说明；如果 objectName 为自定义消息类型，该参数可自定义格式。（必传）
     */
    content: string;
}

/**
 * 生成接口请求所需要的头部信息
 */
declare function headers(): Object;

/**
 * 生成签名
 * @param timestamp
 * @param nonce
 */
declare function sign(timestamp: number | string, nonce: string): string;

/**
 * 构造属性
 */
declare interface Options {
    appKey: string;
    appSecret: string;
    /**
     * 头部是否使用RC-前缀
     */
    usePrefix?: boolean;
    /**
     * 请求超时时间
     */
    timeout?: number;
    /**
     * 日志工具，默认false,不打印日志
     */
    logger?: boolean | object;
}

export = RongCloud
