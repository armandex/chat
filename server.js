#!/usr/bin/env node
var debug = require('debug')('my-application');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {

	require("./socket-io")(server);
	debug('Express server listening on port ' + server.address().port);
});
