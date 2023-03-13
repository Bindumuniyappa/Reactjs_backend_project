const exp = require('express');
const hollywoodApi = require('../Api/Hollywood');

const hollywood = exp.Router();
hollywood.route('/hollywood').get(hollywoodApi.apiController);

module.exports = hollywood;