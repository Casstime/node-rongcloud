node-rongcloud
==============

开发中，请不要用于生产环境，node>6.0

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

rongCloud.message.publishPrivate(params).then((result) => {
  // {code: 200}
});
```
