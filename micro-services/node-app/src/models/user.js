const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String},
  initialBalance: {type: Number},
});


module.exports.User = mongoose.model('User', userSchema);