const utils = require('../utils');
const {UserUtil} = utils;

const login = async (req, res) => {  
  const data = await UserUtil.login(req.body.values);
  res.json(data);
};

const register = async (req, res) => {  
  const data = await UserUtil.register(req.body.values);
  res.json(data);
};

module.exports = {
  login,
  register,
}

