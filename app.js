// var express = require('express');
// var app = express();
// var path = require('path');
//
// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// app.listen(4200);


var express = require('express');
   var app = express();
   app.get('/', function(req, res){
       res.send('Type localhost:port/index.html');
   });
       app.use(express.static(__dirname + '/static'));

   app.listen(4200);
