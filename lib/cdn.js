class CDN {
  constructor() {
    this.origins = [
      "http://api-cn.ronghub.com/",
      "http://api2-cn.ronghub.com/",
    ];
    this.originIndex = 1;
  }
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
