// Calling config file
var config = require('./config');
var http = require('http');

http.createServer(function (request, response) {

    // Query get all users
    User.find( function(err, data) {
        if (data) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });

            //var results = response.end(JSON.stringify(data));
            for (var i = 0; i < data.length; i++ ) {
                val = data[i];
                response.write('name= ' + val.name + ' lastname= ' +
                    val.lastname + '<br />');
            }

        } else {
            // No data
            console.log('problem');
            process.exit(0);
        }

        response.end();
    });

}).listen(8888);