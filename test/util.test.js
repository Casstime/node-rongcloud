const { expect } = require("chai");
const nock = require("nock");
const config = require("./config");
const RongCloud = require("../");

const rongCloud = new RongCloud({
  appKey: config.appKey,
  appSecret: config.appSecret,
  logger: true
});

describe("Publish System Message FAILED", () => {
  let mock;
  beforeEach(() => {
    mock = nock("http://api-cn.ronghub.com/")
      .post(path => path.includes("fake"))
      .reply(500, "<html><body>error</body></html>");
  });
  it("Publish Text Message Failed", done => {
    rongCloud
      .post("/fake", {})
      .then(() => {
        done("error");
      })
      .catch(e => {
        done();
      });
  });
});
