
function playsound(e){
    //see if an audio has the same keycode from above
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;//stop the function if there is no corresponding sound to the keycode
    audio.currentTime = 0; //rewind time of the audio to 0 To press multiple times
    audio.play();
    key.classList.add('playing');
}
function removetransition(e){
    if(e.propertyName !== 'transform') return //skip it if it's not transform in css
    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend',removetransition))
//Function to know which key was pressed
window.addEventListener('keydown',playsound);
keys.forEach(key => key.addEventListener('click' ,function(){
    let clicked = key.getAttribute("data-key")
    let audio = document.querySelector(`audio[data-key="${clicked}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}))