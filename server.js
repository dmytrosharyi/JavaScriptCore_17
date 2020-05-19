var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, response) {
    console.log('Server');
    response.send('<h1>Lesson 17</h1>')
});


server.post('/user-data', function (request, response) {
    console.log(request.body);
    var obj = request.body.firstName+request.body.lastName+'@gmail.com';
    response.send(obj);
});
server.listen(3000);