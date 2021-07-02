import './styles/style.scss'

const btnAllVoices = document.getElementById('all_voices')
const btnMicrophone = document.getElementById('microphone')
const btnStream = document.getElementById('stream')
const mainText = document.getElementById('main_text')
const activeColor = "#7f34ad"

btnAllVoices.addEventListener('click', function() {
    mainText.innerText = 'Active: All voices mode'
    resetButtonColors()
    btnAllVoices.style.color = activeColor
})

btnMicrophone.addEventListener('click', function() {
    mainText.innerText = 'Active: Speaker mode'
    resetButtonColors()
    btnMicrophone.style.color = activeColor
})

btnStream.addEventListener('click', function() {
    mainText.innerText = 'Active: Stream mode'
    resetButtonColors()
    btnStream.style.color = activeColor
})

function resetButtonColors(){
    const color = "dimgray"
    btnAllVoices.style.color = color
    btnMicrophone.style.color = color
    btnStream.style.color = color
}