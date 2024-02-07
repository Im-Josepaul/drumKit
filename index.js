function keychecker(keyvalue) {
    switch (keyvalue) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
    
        default:
            alert("Wrong Key pressed!");
            break;
    }
    document.querySelector("."+keyvalue).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+keyvalue).classList.remove("pressed");
    }, 120);
}

var noofButtons = document.querySelectorAll(".drum").length;
for (var index = 0; index < noofButtons; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",handleClick);
}

function handleClick() {
    var innerHTML = this.innerHTML;
    keychecker(innerHTML);
}

document.addEventListener("keypress",function(pressedKey){
    keychecker(pressedKey.key);
})








































// var crash = new Audio("sounds/crash.mp3");
// var kick = new Audio("sounds/kick-bass.mp3");
// var snare = new Audio("sounds/snare.mp3");
// var tom1 = new Audio("sounds/tom-1.mp3");
// var tom2 = new Audio("sounds/tom-2.mp3");
// var tom3 = new Audio("sounds/tom-3.mp3");
// var tom4 = new Audio("sounds/tom-4.mp3");