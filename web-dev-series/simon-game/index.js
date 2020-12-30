var gpattern=[];
var ppattern=[];
var buttoncolor=["red","blue","green","yellow"];
var start = false;
var level = 0;
var score = 0;
var god=0;
//detecting any key press to start the game
$(document).keypress(function(){
  if(!start){
    god++;
    $("h1").text("Level"+" "+level);
    $("h2").text("Your Score :"+" "+score);
    $("body").css("background-color","#111d5e");
    pattern();
    start=true;
  }
});
//next pattern for thr game
function pattern()
{
  ppattern=[];
  level++;
    $("h1").text("Level"+" "+level);
    $("h2").text("Your Score :"+" "+score);
  var noumber = Math.floor(Math.random()*4);
  var rcolor = buttoncolor[noumber];
  gpattern.push(rcolor);
  $("#" + rcolor).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(rcolor);
}
//function for checking if the answers are correct
function check(clevel)
{
  if(gpattern[clevel] == ppattern[clevel])
  { if(ppattern.length ==gpattern.length)
    {   score+=level+10;
        setTimeout(function(){
          pattern();
        },1000);
    }
  }else{
    // lastscore = score;
      sound("wrong");
      $("body").css("background-color","#a9294f");
      $("h1").text("Wrong! Press any key to restart.");
      $("h2").text("Total score :"+" "+score);
      setTimeout(function () {
      }, 200);
            over();
  }
}
//function when a button a pressed
$(".btn").click(function(){
  var chosencolor=$(this).attr("id");
  ppattern.push(chosencolor);
  sound(chosencolor);
  animate(chosencolor);
    if(god>0){
        check(ppattern.length-1);
    }
});
//function to play sound when a button is clicked
function sound(colour)
{
  var audio=new Audio("sounds/"+colour+".mp3");
  audio.play();
}
//function to add and remove animation effect after 1 seconds
function animate(colour)
{
  $("#" + colour).addClass("pressed");
   setTimeout(function(){
     $("#" + colour).removeClass("pressed");
   },80);
 }
// if the user is wrong assigning initail values to all
function over() {
     level = 0;
     gpattern=[];
     ppattern=[];
     start = false;
     score = 0;
     god=0;
   }
