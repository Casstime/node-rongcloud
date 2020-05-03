class CDN {
  origins = ['http://api-cn.ronghub.com/', 'http://api2-cn.ronghub.com/'];
  originIndex = 1;

  switchCdn() {
    this.originIndex += 1;
    if (!this.origins[this.originIndex]) {
      this.originIndex = 0;
    }
  }

  getOrigin() {
    return this.origins[this.originIndex];
  }
}


module.exports = new CDN();
