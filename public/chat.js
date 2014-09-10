window.onload = function() {

    var messages = [];
    var socket = io.connect('http://localhost:3700');

    socket.on('message', function (data) {
        msgstring = data['name'] +" : " + data['message'];
        $('#messages').append($('<li>').text(msgstring));
    });


    $('#chatbox').submit(function(){
        na = $('#name').val();
        msg = $('#field').val();
        socket.emit('send', {name : na, message : msg});
        $('#field').val('');
        return false;
    });

};