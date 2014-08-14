var m_users = require("../models/users");

module.exports = function(io){
	io.sockets.on("connection", function(socket){

		socket.emit("S2C_SOCKET_CREATED", true);

		socket.on("C2S_GET_CONTACTS", function(idUser){

			m_users.find(function(err, contactos){

				socket.emit("S2C_CONTACT_LIST", contactos);
			});
		});
	});
};
