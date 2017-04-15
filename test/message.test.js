const { expect } = require('chai');

const config = require('./config');
const RongCloud = require('../index');

const rongCloud = new RongCloud({
  appKey: config.appKey,
  appSecret: config.appSecret
});

describe('Message Test', () => {
  describe('Publish Message', () => {
    it('Publish TextMessage', (done) => {
      rongCloud.publishPrivateMessage({
        toUserId: config.message.toUserId,
        fromUserId: config.message.fromUserId,
        content: JSON.stringify({ content: config.message.textMsg }),
        objectName: 'RC:TxtMsg'
      })
        .then((result) => {
          expect(result).to.have.property('code', 200);
          done();
        })
        .catch(done);
    });
  });
});
