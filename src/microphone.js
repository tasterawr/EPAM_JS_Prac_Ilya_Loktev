import io from 'socket.io-client'

let mediaRec = ""

export function handleMicrophoneClick() {
    let elems = document.getElementsByClassName('recording')
    const recordBtn = document.getElementById('recordButton')

    if (elems.length > 0){
        closeRecorder();
        recordBtn.classList.toggle('recording')
        recordBtn.style.color = 'dimgray'
    }
    else{
        recordBtn.style.color = '#7f34ad'
        recordBtn.classList.toggle('recording')
        recordMessage()
    }
}

function recordMessage() {
    const socket = io.connect('https://voicy-speaker.herokuapp.com')

    socket.on('connect', function(){
        console.log(socket.connected);
    })

    socket.on('audioMessage', function(){
        console.log('Abb');
    })

    navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream => {

            const mediaRecorder = new MediaRecorder(stream);
            mediaRec = mediaRecorder;
            mediaRecorder.start();

            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                socket.emit('audioMessage', audioChunks);
            });
        });
}

function closeRecorder(){
    mediaRec.stop();
}