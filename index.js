var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var forwardedIp = req.headers['x-forwarded-for'];
    var remoteAddress = req.connection.remoteAddress;
    res.json({ "ipAddress": remoteAddress, "x-forwarded-for": forwardedIp });
});

app.listen(process.env.PORT || 18080);
