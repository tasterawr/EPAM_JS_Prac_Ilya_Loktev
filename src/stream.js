import io from "socket.io-client";

export function activateMessage(){
    const socket = io.connect('https://voicy-speaker.herokuapp.com')
    const mainText = document.getElementById('main_text')

    socket.on("audioMessage", function (audioChunks){
        if (mainText.innerText === 'Active: Stream mode'){
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        }
        else return;
    })
}