const exp = require('express');
const technologyApi = require('../Api/Technology');

const technology = exp.Router();
technology.route('/technology').get(technologyApi.apiController);

module.exports = technology;