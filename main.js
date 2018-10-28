// JavaScript source code

//var twitch = window.Twitch.ext;

$(document).ready(function () {
    var button1TotalVotes;
    var button2TotalVotes;
    var width;

    // Clear variables and set display to '0'
    function reset() {
        $("#button1count").html("0");
        $("#button2count").html("0");
        button1TotalVotes = 0;
        button2TotalVotes = 0;
        width = 50;
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
        //$("#button1").hide();
        //$("#button2").hide();
        team = 1;
        button1TotalVotes = button1TotalVotes + 1;
        //update graphic
        $("#button1Count").html('' + button1TotalVotes);

        width = width + 10;
        draw();
    });

    $("#button2").click(function () {
        //$("#button1").hide();
        //$("#button2").hide();
        team = 2;
        button2TotalVotes = button2TotalVotes + 1;
        //update graphic
        $("#button2Count").html('' + button2TotalVotes);

        width = width - 10;
        draw();
    });

    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.beginPath();
            context.fillStyle = "#6441A4";
            context.fillRect(40, 40, width, 20);
            context.moveTo(110, 75);
            context.fillStyle = "#ff0000";
            context.fillRect(140, 40, 100-width, 20);
            context.stroke();
        }
    };

});