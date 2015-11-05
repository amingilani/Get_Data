var orderBook = require('./get_Json_Data.js').orderBooks;
var ticker = require('./get_Json_Data.js').ticker;
var trades = require('./get_Json_Data.js').trades;
var express = require('express');
var app = express();

app.get('/book', orderBook.post);
app.get('/ticker', ticker.post);
app.get('/trades', trades.post);

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});