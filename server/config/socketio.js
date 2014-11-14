/**
 * Socket.io configuration
 */

'use strict';

var config = require('./environment');

// When the user disconnects.. perform this
function onDisconnect(socket) {
}

// When the user connects.. perform this
function onConnect(socket) {
    socket.on('info', function (data) {
        console.info('[%s] %s', socket.address, JSON.stringify(data, null, 2));
    });

    // Sockets
    // require('../api/abc/abc.socket').register(socket);
}

module.exports = function (socketio) {

    // Authentication
    // socketio.use(require('socketio-jwt').authorize({
    //   secret: config.secrets.session,
    //   handshake: true
    // }));

    socketio.on('connection', function (socket) {
        socket.address = socket.handshake.address !== null ?
                socket.handshake.address.address + ':' + socket.handshake.address.port :
                process.env.DOMAIN;

        socket.connectedAt = new Date();

        socket.on('disconnect', function () {
            onDisconnect(socket);
            console.info('[%s] DISCONNECTED', socket.address);
        });

        onConnect(socket);
        console.info('[%s] CONNECTED', socket.address);
    });
};
