window.onload = function() {

    var messages = [];
    var socket = io.connect('http://localhost:3700');
    //var field = document.getElementById("field");
    //var field = $("#field");
    //var sendButton = document.getElementById("send");


    socket.on('message', function (data) {
        $('#messages').append($('<li>').text(data));


    });


    $('#chatbox').submit(function(){
        socket.emit('send', $('#field').val());
        $('#field').val('');
        return false;
    });

}