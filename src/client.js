const io = require("socket.io-client")

const socket = io.connect('https://voicy-speaker.herokuapp.com/')

socket.on("connect", function () {
    alert("Client has connected to the server!");
});

socket.on("connect_error", function (e) {
    alert(e.data);
});