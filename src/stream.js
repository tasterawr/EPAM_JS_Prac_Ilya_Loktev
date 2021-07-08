export function activateMessage(){
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
            if (xhr.response.length) {
                const audioBlob = new Blob([new
                Uint8Array(xhr.response[voicesLength-1].audioBlob[0].data).buffer]);
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl)
                audio.play()
            }
        }
    };
}