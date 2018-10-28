// JavaScript source code

//var twitch = window.Twitch.ext;

$(document).ready(function () {
    var button1TotalVotes;
    var button2TotalVotes;
    var option1Width;
    var opiton2Width;

    // Clear variables and set display to '0'
    function reset() {
        $("#button1count").html("0");
        $("#button2count").html("0");
        button1TotalVotes = 0;
        button2TotalVotes = 0;
        option1Width = 0;
        option2Width = 0;
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

        updateWar(team);
    });

    $("#button2").click(function () {
        //$("#button1").hide();
        //$("#button2").hide();
        team = 2;
        button2TotalVotes = button2TotalVotes + 1;
        //update graphic
        $("#button2Count").html('' + button2TotalVotes);

        updateWar(team);
    });

    function updateWar(team) {
        if (team == 1) {
            option1Width = 45;
        }
        else if (team == 2) {
            option2Width = option2Width + 10;
        }
        draw();

        function draw() {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext) {
                var context = canvas.getContext('2d');
                context.beginPath();
                context.fillStyle = "#6441A4";
                context.fillRect(74, 75, 10, 20);
                context.moveTo(110, 75);
                context.fillStyle = "#ff0000";
                context.fillRect(150, 75, 10, 20);
                //context.rect(75, 75, option1Width, 50);
                //context.rect(75+option1Width,75, 100-option1Width, 50)
                context.stroke();
            }
        };
    };

});