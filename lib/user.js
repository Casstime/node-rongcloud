module.exports.getUserToken = function (userId, name, portraitUri) {
  const api = '/user/getToken';
  return this.post(api, { form: { userId, name, portraitUri } });
};

module.exports.refreshUserToken = function (userId, name, portraitUri) {
  const api = '/user/refresh';
  return this.post(api, { form: { userId, name, portraitUri } });
};

module.exports.checkUserOnline = function (userId) {
  const api = '/user/checkOnline';
  return this.post(api, { form: { userId } });
};

module.exports.blockUser = function (userId, minutes) {
  const api = '/user/block';
  return this.post(api, { form: { userId, minute: minutes } });
};

module.exports.unblockUser = function (userId) {
  const api = '/user/unblock';
  return this.post(api, { form: { userId } });
};

module.exports.getBlockedUsers = function () {
  const api = '/user/block/query';
  return this.post(api);
};

module.exports.addUserToBlacklist = function (userId, blackUserId) {
  const api = '/user/blacklist/add';
  return this.post(api, { form: { userId, blackUserId } });
};

module.exports.removeUserFromBlacklist = function (userId, blackUserId) {
  const api = '/user/blacklist/remove';
  return this.post(api, { form: { userId, blackUserId } });
};

module.exports.getBlacklist = function (userId) {
  const api = '/user/blacklist/query';
  return this.post(api, { form: { userId } });
};
