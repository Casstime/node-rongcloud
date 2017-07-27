const { expect } = require('chai');

const config = require('./config');
const RongCloud = require('../index');

const rongCloud = new RongCloud({
  appKey: config.appKey,
  appSecret: config.appSecret,
  logger: true
});

describe('Message Test', () => {
  describe('Publish Private Message', () => {
    it('Publish TextMessage', (done) => {
      rongCloud.publishPrivateMessage({
        toUserId: config.message.toUserId,
        fromUserId: config.message.fromUserId,
        content: JSON.stringify({ content: config.message.textMsg }),
        objectName: 'RC:TxtMsg',
        isIncludeSender: true
      })
        .then((result) => {
          expect(result).to.have.property('code', 200);
          done();
        })
        .catch(done);
    });
  });

  describe('Publish System Message', () => {
    it('Publish Text Message', (done) => {
      rongCloud.publishSystemMessage({
        toUserId: config.message.toUserId,
        fromUserId: config.message.fromUserId,
        content: JSON.stringify({ content: config.message.textMsg }),
        objectName: 'RC:TxtMsg'
      })
        .then((result) => {
          expect(result).to.have.property('code', 200);
          done();
        })
        .catch(done)
    });
  });

  describe('Publish System Message to multi person', () => {
    it('Publish Text Message', (done) => {
      rongCloud.publishSystemMessage({
        toUserId: [config.message.toUserId, config.message.fromUserId],
        fromUserId: config.message.fromUserId,
        content: JSON.stringify({ content: config.message.textMsg }),
        objectName: 'RC:TxtMsg'
      })
        .then((result) => {
          expect(result).to.have.property('code', 200);
          done();
        })
        .catch(done)
    });
  });


  describe('Publish Private Template', () => {
    it('Publish Text Template', (done) => {
      rongCloud.publishPrivateTemplate({
        toUserId: [config.message.toUserId],
        fromUserId: config.message.fromUserId,
        objectName: 'RC:TxtMsg',
        content: JSON.stringify({ content: '{c}/{d}' }),
        values: [{'{c}': '测试', '{d}': '数据'}],
        pushContent: ['push{c}']
      })
        .then((result) => {
          expect(result).to.have.property('code', 200);
          done();
        })
        .catch(done)
    })
  });
});
