const { expect } = require('chai');

const config = require('./config');
const rongCloud = require('../index');

describe('Message Test', () => {
  before(() => {
    rongCloud.init({
      appKey: config.appKey,
      appSecret: config.appSecret
    });
  });

  describe('Publish Message', () => {
    it('Publish TextMessage', (done) => {
      rongCloud.message.publishPrivate({
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
