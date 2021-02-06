// main.js

// TODO
var audio = document.getElementById("horn-sound");
var btn = document.getElementById("honk-btn");

var num = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");

// var radios = document.querySelectorAll("radio-sound");
var radios = document.getElementById("audio-selection").elements;

btn.addEventListener( "click", playSound );
num.addEventListener("input", updateSlider);
slider.addEventListener("input", updateNumber);

for(var i = 0; i < radios.length; i++){
   radios[i].addEventListener("input", updateHorn);
}


function playSound(event) {  
    audio.play();
    event.preventDefault();
}

// updates the volume number if the slider value has changed
function updateNumber(event) {
    num.value = slider.value;
    updateVolume();
    updateIcon();
}

// updates the slider value if the volume number has changed
function updateSlider(event) {
    slider.value = num.value;
    updateVolume();
    updateIcon();
}

// helper function to update volume and disable button if updated volume is 0
function updateVolume() {
    audio.volume = num.value / 100;
    if(num.value == 0){
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

// updates volume icon with the correct number of bars based on volume level
function updateIcon() { 
    var icon = document.getElementById("volume-image");
    if(num.value == 0){
        icon.src="./assets/media/icons/volume-level-0.svg";
    } else if (num.value <= 33){
        icon.src="./assets/media/icons/volume-level-1.svg";
    } else if (num.value <= 66){
        icon.src="./assets/media/icons/volume-level-2.svg";
    } else {
        icon.src="./assets/media/icons/volume-level-3.svg";
    }
}

// updates both the horn image and sound type
function updateHorn(event) {
    var img = document.getElementById("sound-image");
    var sound = document.getElementById("horn-sound");

    if(radios[0].checked == true){
        img.src="./assets/media/images/air-horn.svg";
        img.alt="Air Horn";
        sound.src="./assets/media/audio/air-horn.mp3";
    } 
    else if(radios[1].checked == true){
        img.src="./assets/media/images/car.svg";
        img.alt="Car Horn";
        sound.src="./assets/media/audio/car-horn.mp3";
    } 
    else {
        img.src="./assets/media/images/party-horn.svg";
        img.alt="Party Horn";
        sound.src="./assets/media/audio/party-horn.mp3";
    }
}