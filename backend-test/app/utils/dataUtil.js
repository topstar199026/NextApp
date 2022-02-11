var { Op, NOW, Sequelize } = require('sequelize');
const models = require('../models');
const {Test} = models;

const getTestData = async () => {
    var res =  await Test.findAll();
    return res;
}

module.exports = {
    getTestData,
};