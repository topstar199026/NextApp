const utils = require('../utils');
const {UserUtil, MessageUtil} = utils;

const login = async (req, res) => {  
  const data = await UserUtil.login(req.body.values);
  res.json(data);
};

const register = async (req, res) => {  
  const data = await UserUtil.register(req.body.values);
  res.json(data);
};

const userList = async (req, res) => {  
  const data = await UserUtil.userList(req.user);
  res.json(data);
};

const messageList = async (req, res) => {  
  const data = await MessageUtil.messageList(req.user);
  res.json(data);
};

module.exports = {
  login,
  register,
  userList,
  messageList,
}

