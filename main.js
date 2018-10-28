// JavaScript source code

//var twitch = window.Twitch.ext;

$(document).ready(function () {
    var button1TotalVotes;
    var button2TotalVotes;

    // Clear variables and set display to '0'
    function reset() {
        $("#button1count").html("0");
        $("#button2count").html("0");
        button1TotalVotes = 0;
        button2TotalVotes = 0;
    }

    reset();

    //ask for user input 
    var question = prompt("Please enter your Question?", "Question");
    var answer1 = prompt("Please enter answer 1?", "Answer 1");
    var answer2 = prompt("Please enter answer 2?", "Answer 2");

    if (question == null || answer1 == null || answer2 == null) {
        //exit();
    }
    $("#button1").prop('value', answer1);
    $("#button2").prop('value', answer2);
    $("#Question").html('' + question);

    $("#button1").click(function () {
        $("#button1").hide();
        $("#button2").hide();
        team = 1;
        button1TotalVotes = button1TotalVotes + 1;
        //update graphic
        $("#button1Count").html('' + button1TotalVotes);

        updateWar(team);
    });

    $("#button2").click(function () {
        $("#button1").hide();
        $("#button2").hide();
        team = 2;
        button2TotalVotes = button2TotalVotes + 1;
        //update graphic
        $("#button2Count").html('' + button2TotalVotes);

        updateWar(team);
    });

    function updateWar(team) {
        // Set initial variables to values that we'll animate over time
var x = 0;
var y = 0;

draw = function() {
    background(255, 255, 255);
    
    noStroke();
    fill(79, 255, 94);
    
    // Moves across the canvas, getting taller
    ellipse(x, 200, 30, 30+x/3);
    
    // Moves down the canvas, getting wider
    ellipse(200, y, 30+y/3, 30);
    
    // Add one to each of the variables
    x++;
    y++;
};
    };

});
