
const utils = require('../utils');
const {UserUtil, MessageUtil} = utils;

module.exports = (io, socket) => {
    const sendMessage = async (values) => {  
        MessageUtil.saveMessage(values);
        socket.emit('message:send', values);
        socket.broadcast.emit('message:send', values);
    }

    socket.on('message:send', sendMessage);
}