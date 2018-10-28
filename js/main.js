// JavaScript source code

//var twitch = window.Twitch.ext;

$(document).ready(function () {
    var button1TotalVotes;
    var button2TotalVotes;
    var option1Width;
    var option2Width;
    var option2x;
    var question;
    var answer1;
    var answer2;

    // Clear variables and set display to '0'
    function reset() {
        $("#button1count").html('0');
        $("#button2count").html('0');
        button1TotalVotes = 0;
        button2TotalVotes = 0;
        option1Width = 100;
        option2Width = 100;
        option2x = 140;
        draw();

        $("#button1").show();
        $("#button2").show();

        $("#questionBox").show();
        $("#answer1Box").show();
        $("#answer2Box").show();
    }

    reset();

    $("#button5").click(function () {
        //ask for user input 
        question = document.getElementById("questionBox").value;
        answer1 = document.getElementById("answer1Box").value;
        answer2 = document.getElementById("answer2Box").value;

        $("#button1").prop('value', answer1);
        $("#button2").prop('value', answer2);
        $("#Question").html('' + question);

        $("#questionBox").hide();
        $("#answer1Box").hide();
        $("#answer2Box").hide();
    });

    $("#button1").click(function () {
        //$("#button1").hide();
        //$("#button2").hide();
        button1TotalVotes = button1TotalVotes + 1;
        //update graphic
        $("#button1Count").html('' + button1TotalVotes);

        option1Width = option1Width + 10;
        option2Width = option2Width - 10;
        option2x = option2x + 10;
        if (option1Width === 200) {
            option1Width = 190;
            option2Width = option2Width + 10;
            option2x = 230;
        }
        draw();
    });

    $("#button2").click(function () {
        //$("#button1").hide();
        //$("#button2").hide();
        button2TotalVotes = button2TotalVotes + 1;
        //update graphic
        $("#button2Count").html('' + button2TotalVotes);

        option1Width = option1Width - 10;
        option2Width = option2Width + 10;
        option2x = option2x - 10;
        if (option2Width === 200) {
            option2Width = 190;
            option1Width = option1Width + 10;
            option2x = 50;
        }
        draw();
    });

    $("#button3").click(function () {
        $("#button1").hide();
        $("#button2").hide();

        if (button1TotalVotes > button2TotalVotes) {
            $("#Question").html('The Winner is ' + answer1 + '!!!!');
        }
        else if (button2TotalVotes > button1TotalVotes) {
            $("#Question").html('The Winner is ' + answer2 + '!!!!');
        }
        else {
            $("#Question").html('It was a tie. Lame.');
        }
    });

    $("#button4").click(function () {
        reset();
        $("#button2Count").html('' + button2TotalVotes);
        $("#button1Count").html('' + button2TotalVotes);
    });

    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.beginPath();
            context.fillStyle = "#6441A4";
            context.fillRect(40, 40, option1Width, 20);
            context.fillStyle = "#ff0000";
            context.fillRect(option2x, 40, option2Width, 20);
            context.stroke();
        }
    };

});
