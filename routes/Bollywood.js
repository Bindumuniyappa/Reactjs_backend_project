const exp=require('express')
const bollywoodApi=require('../Api/Bollywood');

const bollywood=exp.Router();
bollywood.route('/bollywood').get(bollywoodApi.apiController)

module.exports=bollywood;