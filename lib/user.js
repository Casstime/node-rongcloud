/**
 * 获取用户token
 * @function RongCloud#getUserToken
 * @param {string} userId 用户 Id，最大长度 64 字节。是用户在 App 中的唯一标识码，必须保证在同一个 App 内不重复，重复的用户 Id 将被当作是同一用户。（必传）
 * @param {string} name 用户名称，最大长度 128 字节。用来在 Push 推送时显示用户的名称。（必传）
 * @param {string} portraitUri 用户头像 URI，最大长度 1024 字节。（必传）
 * @return {Promise}
 */
module.exports.getUserToken = function (userId, name, portraitUri) {
  const api = '/user/getToken';
  return this.post(api, { form: { userId, name, portraitUri } });
};

/**
 * 刷新用户token
 * @function RongCloud#refreshUserToken
 * @param {string} userId	用户 Id，最大长度 64 字节。是用户在 App 中的唯一标识码，必须保证在同一个 App 内不重复，重复的用户 Id 将被当作是同一用户。（必传）
 * @param {string} [name]	用户名称，最大长度 128 字节。用来在 Push 推送时，显示用户的名称，刷新用户名称后 5 分钟内生效。（可选，提供即刷新，不提供忽略）
 * @param {string} [portraitUri] 用户头像 URI，最大长度 1024 字节。用来在 Push 推送时显示。（可选，提供即刷新，不提供忽略）
 * @return {Promise}
 */
module.exports.refreshUserToken = function (userId, name, portraitUri) {
  const api = '/user/refresh';
  const data = { userId };
  if (name) {
    data.name = name;
  }

  if (portraitUri) {
    data.portraitUri = portraitUri
  }

  return this.post(api, { form: data });
};

/**
 * 检查用户在线状态
 * @function RongCloud#checkUserOnline
 * @param {string} userId 用户id
 * @return {Promise}
 */
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
