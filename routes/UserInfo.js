const exp = require('express');
const userApi = require('../Api/UserInfo');

const userinfo = exp.Router();
userinfo.route('/userinfo').get(userApi.apiController);

module.exports = userinfo;
