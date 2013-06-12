//this file contains the procedure to create your mongo localhost 'test' db
// Confing vars
var mongoose = require('mongoose');
// Db connect
var db = mongoose.connect('mongodb://localhost/test');
// Create Schema
var schema = mongoose.Schema({ name: 'string', lastname: 'string' });
var User = db.model('User', schema);

// Visible for each file that require config.js
global.mongoose = mongoose;
global.db = db;
global.schema = schema;
global.User = User;