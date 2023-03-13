const exp = require('express');
const fitnessApi = require('../Api/Fitness');

const fitness = exp.Router();
fitness.route('/fitness').get(fitnessApi.apiController);

module.exports = fitness;