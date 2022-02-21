
module.exports = (io, socket) => {
    const sendMessage = async (values) => {  
        socket.emit('message:send', values);
        socket.broadcast.emit('message:send', values);
    }

    socket.on('message:send', sendMessage);
}