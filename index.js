var request = require('request');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));
app.use('/api/*', function(req, res, next) {
	request('http://em-ng-workshop.herokuapp.com' + req.baseUrl, function(err, response, body) {
		if(!err) {
			res.send(body);
		}
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.use('/*', function(req, res) {
  res.redirect('/')
});
