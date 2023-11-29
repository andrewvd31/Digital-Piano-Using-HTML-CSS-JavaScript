const pianoKeys = document.querySelectorAll('.piano-keys .key')
const volumeSilder = document.querySelector('.volume-slider input')
const keysCheckBox = document.querySelector('.keys-checkbox input')

let allKeys = []
let audio = new Audio(`tunes/c.wav`)

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play()
    const clickedKey = document.querySelector(`[data-key=$(key)]`)
    clickedKey.classList.add('active');
    setTimeout(()=>{
        clickedKey.classList.remove('active')
    },150)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener('click',()=>playTune(key.dataset.key))
})

const handleVolume = (e) => {
    audio.volume = e.target.value
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

const pressedKeys = (e) => {
    if (allKeys.includes(e.key)){
        playTune(e.key)
    }
}

keysCheckBox.addEventListener('click',showHideKeys)
volumeSilder.addEventListener('input',handleVolume)
document.addEventListener('keydown',pressedKeys)