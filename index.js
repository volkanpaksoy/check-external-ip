var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var ip = req.connection.remoteAddress;
    res.json({ ipAddress: ip });
});

app.listen(process.env.PORT || 80);
