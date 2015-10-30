var mongoose = require('mongoose');

//Flight is just a name
module.exports = mongoose.model('Flight', {
  from:String,
  to:String,
  date: String
});