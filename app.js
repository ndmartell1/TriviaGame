function check(){

var question1 =document.trivia.question1.value;
var question2 =document.trivia.question2.value;
var question3 =document.trivia.question3.value;
var question4 =document.trivia.question4.value;

var correct=0;

if(question1 == "1812") {
    correct++;
}
if(question2 == "Not Water") {
    correct++;
}
if(question3 == "No") {
    correct++;
}
if(question4 == "0") {
    correct++;
}


var messages = ["Wow, I underestimated you", "That isn't great", "Pitiful", "Why did you even try?"];
var range; 
if (correct <2 ) {
    range = 3;
} 
if (correct > 2 && correct < 3) {
    range = 2
}
if (correct >3 && correct <4) {
    range = 1
}
if (correct ==4) {
    range = 0
}



document.getElementById("numberCorrect").innerHTML = "Wow, you got " + correct + " correct. ";

function Timer()
    {
         alert("Too Slow!");
    }
  
  
var total_seconds = 60;
var seconds = parseInt (total_seconds%60);
function CheckTime (){
    document.getElementById ("quiz-time-left").innerHTML
    = 'Time Left: ' + seconds + ' seconds' ;
    if(total_seconds <=0) {
        setTimeout ('document.quiz.submit()', 1);
    } else{
        total_seconds = total_seconds -1;
        seconds = parseInt (total_seconds%60);
        setTimeout("CheckTime()",1000);}
    }
    setTimeout("CheckTime()", 1000);
}


