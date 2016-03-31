var express = require('express');
var compression = require('compression');
var app = express();
var staticAsset = require('static-asset');

/* Enables gzip compression for returned files */
app.use(compression());

app.use(staticAsset(__dirname + "/") );
app.use(express.static(__dirname + "/") );

// START THE SERVER
// ==============================================
app.listen(3000);
console.log('Project is running on port: 3000');
