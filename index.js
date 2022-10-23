
//adding an event listener for cancelIdleCallback
// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("BUTTON IS CLICKED");
// }

/* adding anonymous function to oue event listener
document.querySelectorAll("button").addEventListener("click",function(){
    alert("Event generated using anonymous function");
});

this way can not be used because query selector is pointing towards an array
of button elements
*****************WORKING**************
var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
*****************************************
var audio=new Audio("sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3,"sounds/tom-2.mp3,"sounds/tom-3.mp3,"sounds/tom-4.mp3);
        audio[i].play();

*/
var n=document.querySelectorAll(".drum");
// var audio=new Array("sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3");

for(var i=0;i<n.length ;i++){
    n[i].addEventListener("click",function(){
        // alert("Event listener generated using anonymous function");
        var char=this.innerHTML;
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
        makeSound(char);
        buttonAnimattion(char);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimattion(event.key);
});
function buttonAnimattion(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log(char);
}
}