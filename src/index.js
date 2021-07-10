import './styles/style.scss'
import {allVoicesActivate} from "./allVoices";
import {activateMessage} from "./stream";
import {handleMicrophoneClick} from "./microphone";
import {mediaRec} from "./microphone";

mediaRec = "ewew"

const btnAllVoices = document.getElementById('all_voices')
const btnMicrophone = document.getElementById('microphone')
const btnStream = document.getElementById('stream')
const mainText = document.getElementById('main_text')
const allVoicesList = document.getElementById('allVoicesList')
const recordBtn = document.getElementById('recordButton')
const activeColor = "#7f34ad"

btnAllVoices.addEventListener('click', function() {
    recordBtn.hidden = true
    allVoicesList.innerHTML = ''
    mainText.innerText = 'Active: All voices mode'
    resetButtonColors()
    btnAllVoices.style.color = activeColor
    allVoicesActivate()
})

btnMicrophone.addEventListener('click', function() {
    recordBtn.hidden = false
    allVoicesList.innerHTML = ''
    mainText.innerText = 'Active: Speaker mode'
    resetButtonColors()
    btnMicrophone.style.color = activeColor
})

btnStream.addEventListener('click', function() {
    recordBtn.hidden = true
    allVoicesList.innerHTML = ''
    mainText.innerText = 'Active: Stream mode'
    resetButtonColors()
    btnStream.style.color = activeColor
    activateMessage()
})

recordBtn.addEventListener('click', function(){
    handleMicrophoneClick()
})

function resetButtonColors(){
    const color = "dimgray"
    btnAllVoices.style.color = color
    btnMicrophone.style.color = color
    btnStream.style.color = color
}

