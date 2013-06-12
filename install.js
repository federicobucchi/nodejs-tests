// Calling config file
var config = require('./config');

//Opening the connection
mongoose.connection.on('open', function(){
	// Create data
	var users = [{
		name: 'Federico',
		lastname: 'Bucchi'
	}, {
		name: 'Federico2',
		lastname: 'Bucchi2'
	}];

	// Insert data
	User.create(users, function (err) {
		if (err){
			console.warn(err.message);
			process.exit(0);
		} else {
			console.log('data created');
			process.exit(0);
		}
	});
});