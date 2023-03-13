const exp = require('express');
const foodApi = require('../Api/Food');

const food = exp.Router();
food.route('/food').get(foodApi.apiController);

module.exports = food;