const utils = require('../utils');
const {DataUtil} = utils;

const getData = async (req, res) => {  
  const data = await DataUtil.getTestData();
  res.json({ success : true, data: data});
};

module.exports = {
  getData,
}

