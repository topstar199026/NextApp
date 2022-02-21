const jwt  = require('jsonwebtoken');
const errorHandler = require('../helpers/dbErrorHandler');
const constants = require('../config/constant');
const User = require('../models/user.model');
const Message = require('../models/message.model');


const messageList = async (values) => {
    return Message.find({}).sort({created: 1});
}

const saveMessage = async (values) => {
    console.log('saveMessage', values)
    const message = new Message(values);
    await message.save();
}

module.exports = {
    messageList,
    saveMessage,
};