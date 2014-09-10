//http://code.tutsplus.com/tutorials/real-time-chat-with-nodejs-socketio-and-expressjs--net-31708
var express = require("express");
var app = express();
var port = 3700;

app.set('views', __dirname + '/tpl');  // set template directory
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res){
    res.render("page");
});

var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port " + port);


io.sockets.on('connection', function (socket) {
    //socket.emit('message', 'ding');
    //socket.emit('message', "connect message.");


    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });



});