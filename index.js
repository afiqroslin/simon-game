
var userClickedPattern = [];
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var delayInMilliseconds = 100;

var started = false;

var level = 0;


//---Play sound---//
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


//---Animate button---//
function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+ currentColor).removeClass("pressed");
    }, delayInMilliseconds);
    
};


//---Generate random number---//
function nextSequence(){

    userClickedPattern = [];

    level++;
    $('#level-title').text("Level: " + (level)); 

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    // console.log("random colour:" + randomChosenColour);
    
    gamePattern.push(randomChosenColour);
    // console.log("game pattern " + gamePattern);

    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound (randomChosenColour);

};

// --- Check user input ---//
function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamePattern);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        console.log("success");

        if (gamePattern.length === userClickedPattern.length){

            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else{
        wrongAnswer();
        console.log("wrong");
    }

};

function wrongAnswer(){
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);

    $("h1").html("Game Over!<br>Press any key to restart");

    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    startOver();
}


//---Button click---//
$(".btn").click(function(){
        userChosenColour = this.id;

        userClickedPattern.push(userChosenColour);
        
        console.log("click pattern: " + userClickedPattern.length);
        
        playSound (userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);

    });



function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
    

// ---Main--//
$(document).on('keypress',function() {
    if(!started){
        $('#level-title').text("Level: " + (level)); 
        nextSequence();
        started = true;
    }
});



