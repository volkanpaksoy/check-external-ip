var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var remoteAddress;
    var forwardedIp = req.headers['x-forwarded-for'];
    if (forwardedIp) 
    {
    	remoteAddress = forwardedIp;
    };
    remoteAddress = req.connection.remoteAddress;
    res.json({ "ipAddress": remoteAddress });
});

app.listen(process.env.PORT || 80);
