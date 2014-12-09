var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var remoteAddress = req.headers['x-forwarded-for'] || 
    				  req.connection.remoteAddress;
    var ipList = remoteAddress.split(",");
    var lastProxy = ipList[ipList.length - 1];
    res.json({ "ipAddress": lastProxy });
});

app.listen(process.env.PORT || 80);
