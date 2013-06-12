// Calling config file
var config = require('./config');

// Opening the connection
mongoose.connection.on('open', function(){
	// Drop all the tables from the db
	mongoose.connection.db.dropDatabase( function (err) {
		if (err){
			console.warn(err.message);
		} else {
			console.log('db dropped');
			process.exit(0);
		}
	});
});