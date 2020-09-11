// <--Sunder Ladki Way-->

var drumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var inHtml = this.innerHTML;

        makeSound(inHtml);  
        animatebutton(inHtml);  
    }

    )
}

document.addEventListener("keydown",function(event){

    makeSound(event.key);
    animatebutton(event.key);
})

function makeSound(key){


    switch (key) {
        case "w":

            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();

            break;
        case "a":

            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();

            break;
        case "s":

            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();

            break;
        case "d":

            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();

            break;
        case "j":

            var crash = new Audio("sounds/crash.mp3")
            crash.play();

            break;
        case "k":

            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();

            break;
        case "l":

            var snare = new Audio("sounds/snare.mp3")
            snare.play();

            break;

        default: console.log(inHtml)

    }

}

function animatebutton(key){
    var activebutton = document.querySelector("."+key)
    activebutton.classList.add("pressed");

    setTimeout(function(){ activebutton.classList.remove("pressed");
     }, 100);
}




// <--My Way-->

// function w(){
//     var tom1 = new Audio("sounds/tom-1.mp3")
//     tom1.play();
// }
// function a(){
//     var tom2 = new Audio("sounds/tom-2.mp3")
//     tom2.play();
// }
// function s(){
//     var tom3 = new Audio("sounds/tom-3.mp3")
//     tom3.play();
// }
// function d(){
//     var tom4 = new Audio("sounds/tom-4.mp3")
//     tom4.play();
// }
// function j(){
//     var crash = new Audio("sounds/crash.mp3")
//     crash.play();
// }
// function k(){
//     var kick = new Audio("sounds/kick-bass.mp3")
//     kick.play();
// }
// function l(){
//     var snare = new Audio("sounds/snare.mp3")
//     snare.play();
// }


// document.addEventListener('keydown', function(e) {
//     if (e.code == "KeyW") {
//         var tom1 = new Audio("sounds/tom-1.mp3")
//         tom1.play();
//     }
//     if (e.code == "KeyA") {
//         var tom2 = new Audio("sounds/tom-2.mp3")
//         tom2.play();
//     }
//     if (e.code == "KeyS") {
//         var tom3 = new Audio("sounds/tom-3.mp3")
//         tom3.play();
//     }
//     if (e.code == "KeyD") {
//         var tom4 = new Audio("sounds/tom-4.mp3")
//         tom4.play();
//     }
//     if (e.code == "KeyJ") {
//         var crash = new Audio("sounds/crash.mp3")
//         crash.play();
//     }
//     if (e.code == "KeyK") {
//         var kick = new Audio("sounds/kick-bass.mp3")
//         kick.play();
//     }
//     if (e.code == "KeyL") {
//         var snare = new Audio("sounds/snare.mp3")
//         snare.play();
//     }
//   });


