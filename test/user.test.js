const { expect } = require('chai');

const config = require('./config');
const RongCloud = require('../index');

const rongCloud = new RongCloud({
  appKey: config.appKey,
  appSecret: config.appSecret,
  logger: true
});

describe('test user api', () => {
  it('getUserToken', (done) => {
    rongCloud.getUserToken(config.token.userId, config.token.name, config.token.portraitUri)
      .then((result) => {
        expect(result).to.have.all.keys('code', 'userId', 'token');
        done();
      })
      .catch(done)
  });

  it('getUserToken', (done) => {
    rongCloud.checkUserOnline(config.token.userId)
      .then((result) => {
        expect(result).to.have.all.keys('code', 'status');
        done();
      })
      .catch(done)
  });
});
