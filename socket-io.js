
module.exports = function(server){

	var io = require('socket.io').listen(server);

	require("./controllers/chat")(io);
	/*io.sockets.on("connection", function(socket){

		socket.emit("S2C_SOCKET_CREATED", true);

		socket.on("C2S_GET_CONTACTS", function(idUser){
			var contactos = [
				{ entry: 2, nombres: "Joan Manuel", apellidos: "Aguinaga Núñez", avatar: "" },
				{ entry: 3, nombres: "Ricardo", apellidos: "Aguinaga Núñez", avatar: "" },
				{ entry: 4, nombres: "Jose Armando", apellidos: "Aguinaga Núñez", avatar: "" },
				{ entry: 5, nombres: "Victor Enrique", apellidos: "Aguinaga Núñez", avatar: "" }
			];

			socket.emit("S2C_CONTACT_LIST", contactos);
		});
	});*/

};