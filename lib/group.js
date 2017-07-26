/**
 * 同步用户组
 * @param userId
 * @param {Array} groups 用户加入的群组
 * @example
 *  syncGroup('testUser', [{id: '123', name: 'group1'},{id: '456', name: 'group2'} ])
 */
module.exports.syncGroup = function (userId, groups = []) {
  const data = { userId };
  groups.forEach(group => (data[`group[${group.id}]`] = group.name));
  const api = '/group/sync';
  return this.post(api, { form: data });
};

/**
 * 创建群组
 * @param {String | Array} userIds
 * @param groupId
 * @param groupName
 */
module.exports.createGroup = function (userIds, groupId, groupName) {
  const data = {
    userId: [].concat(userIds),
    groupId,
    groupName
  };

  const api = '/group/create';
  return this.post(api, { form: data });
};

/**
 * 将用户加入群组
 * @param {String | Array} userIds
 * @param groupId
 * @param groupName
 * @return {*}
 */
module.exports.joinGroup = function (userIds, groupId, groupName) {
  const data = {
    userId: [].concat(userIds),
    groupId,
    groupName
  };

  const api = '/group/join';
  return this.post(api, { form: data });
};

/**
 * 将用户退出群组
 * @param {String | Array} userIds
 * @param groupId
 * @return {*}
 */
module.exports.quitGroup = function (userIds, groupId) {
  const data = {
    userId: [].concat(userIds),
    groupId
  };

  const api = '/group/quit';
  return this.post(api, { form: data });
};

/**
 * 解散群组
 * @param userId
 * @param groupId
 * @return {*}
 */
module.exports.dismissGroup = function (userId, groupId) {
  const data = { userId, groupId };
  const api = '/group/dismiss';
  return this.post(api, { form: data });
};

/**
 * 刷新群组信息
 * @param groupId
 * @param groupName
 * @return {*}
 */
module.exports.refreshGroup = function (groupId, groupName) {
  const data = { groupId, groupName };
  const api = '/group/refresh';
  return this.post(api, { form: data });
};

/**
 * 查询群组成员
 * @param groupId
 * @return {*}
 */
module.exports.queryGroupUsers = function (groupId) {
  const data = { groupId };
  const api = '/group/user/query';
  return this.post(api, { form: data });
};

/**
 * 群组禁言
 * @param userIds
 * @param groupId
 * @param minute
 * @return {*}
 */
module.exports.addGroupGagUsers = function (userIds, groupId, minute) {
  const data = {
    userId: [].concat(userIds),
    groupId,
    minute
  };

  const api = '/group/user/gag/add';
  return this.post(api, { form: data });
};

/**
 * 取消群组禁言
 * @param userIds
 * @param groupId
 * @return {*}
 */
module.exports.removeGroupGagUsers = function (userIds, groupId) {
  const data = {
    userId: [].concat(userIds),
    groupId
  };

  const api = '/group/user/gag/rollback';
  return this.post(api, { form: data });
};

/**
 * 查询群组被禁言用户
 * @param groupId
 * @return {*}
 */
module.exports.queryGroupGagUsers = function (groupId) {
  const data = { groupId };
  const api = '/group/user/gag/list';
  return this.post(api, { form: data });
};