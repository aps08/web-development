// Random Image for first image//
var r1 = Math.floor(Math.random() * 6) + 1; //1-6
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + r1 + ".png");
//Random Image for second image//
var r2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + r2 + ".png");
//if it's win or draw
if (r1 > r2) {
  document.querySelectorAll("h3")[2].innerHTML = "🚩Player 1 Won!!";
}
else if (r2 == r1) {
  document.querySelectorAll("h3")[2].innerHTML = "🚩Draw!!🚩";
}
else {
  document.querySelectorAll("h3")[2].innerHTML = "🚩Player 2 Won!!";
}
