node-rongcloud
==============
融云服务Node.js封装库，需要Node.js版本 > 6

## 安装
```
npm install node-rongcloud
```


## 使用
```javascript
const rongCloud = require('node-rongcloud');

rongCloud.init({
  appKey: 'appKey',
  appSecret: 'appSecret'
});

const params = {
  toUserId: 'toUserId',
  fromUserId: 'fromUserId',
  content: JSON.stringify({ content: 'hello' }),
  objectName: 'RC:TxtMsg'
};

rongCloud.publishPrivateMessage(params).then((result) => {
  // {code: 200}
});
```

### API

- rongCloud.publishPrivateMessage(params) 发送单聊消息
- rongCloud.publishPrivateTemplate(params) 发送单聊模板消息
- rongCloud.publishSystemMessage(params) 发送系统消息
- rongCloud.publishSystemTemplate(params) 发送系统模板消息
- rongCloud.publishGroupMessage(params) 发送群组消息
- rongCloud.publishDiscussionMessage(params) 发送讨论组消息
- rongCloud.broadcastChatRoomMessage(params) 广播聊天室消息 (付费)
- rongCloud.broadcastMessage(params) 广播消息 (付费)
- rongCloud.getHistoryMessagesUrl(date) 获取指定时间的历史消息下载链接
- rongCloud.removeHistoryMessages(date) 删除指定时间的历史消息

### TODO

[] 文档

[] chatroom api
