export function allVoicesActivate(){
    const url = new URL('https://voicy-speaker.herokuapp.com/voices')
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url.toString())
    xhr.responseType = 'json'

    xhr.send()

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            const voicesLength = xhr.response.length;
            for (let i = voicesLength-5; i < voicesLength; i++) {
                if (xhr.response.length) {
                    //getting audio messages and creating audio file
                    const audio = document.createElement('audio');
                    audio.controls = true
                    const audioBlob = new Blob([new
                    Uint8Array(xhr.response[i].audioBlob[0].data).buffer]);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    audio.src = audioUrl

                    //attaching audio file to list object
                    const li = document.createElement('li');
                    li.classList.add('audioElement');
                    li.classList.add('voice_message');
                    li.innerHTML = xhr.response[i].timeStamp.substr(0, 24);
                    li.appendChild(audio)
                    document.getElementById('allVoicesList').appendChild(li);
                }
            }
        }
    };
}

