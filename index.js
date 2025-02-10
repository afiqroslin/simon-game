
var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    console.log("random colour:" + randomChosenColour);
    
    gamePattern.push(randomChosenColour);
    console.log("game pattern " + gamePattern);

    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound (randomChosenColour);
};


$(".btn").click(function(){
        userChosenColour = this.id;
        console.log("chosen:" + userChosenColour);
        userClickedPattern.push(userChosenColour);
        
        console.log(userClickedPattern);
        playSound (userChosenColour);
    });

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


nextSequence();

