//This part is for the clicking
var no = document.querySelectorAll(".drum").length;
for (var i = 0; i < no; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function mycall(){
      soundscall(this.innerHTML);
      animation(this.innerHTML);
    });
}
// This part is for keyboard input
document.addEventListener("keypress", function(e){
  soundscall(e.key);
  animation(e.key);
} );
// function for sounds
function soundscall(key) {
  var KEY=key.toUpperCase();
  switch (KEY) {
    case 'W':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 'A':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'S':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'D':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'J':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'K':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'L':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
  }}
// animation
function animation(key){
  KEY=key.toLowerCase();
  var actb=document.querySelector("."+KEY);
  actb.classList.add("pressed");
  setTimeout(function(){
    actb.classList.remove("pressed")
  },150)
}
