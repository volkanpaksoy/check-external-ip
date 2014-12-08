var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || 
     		 req.connection.remoteAddress || 
     		 req.socket.remoteAddress ||
     		 req.connection.socket.remoteAddress;
    res.json({ ipAddress: ip });
});

app.listen(process.env.PORT || 80);
