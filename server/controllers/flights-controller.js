var Flight = require('../models/flights');

//search flight and return random entry 
module.exports.search = function (req, res) {
  var flight = new Flight(req.body);
   Flight.find({}, function (err, results) {
   	//Find random record
   	var rand = results[Math.floor(Math.random() * results.length)];
    res.json(rand);
  });
}

//get all flights
module.exports.list = function (req, res) {
  var flight = new Flight(req.body);
   Flight.find({}, function (err, results) {
    res.json(results);
  });
}
