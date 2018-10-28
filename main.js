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
    $("#dialog").dialog();

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
        team = 1;
        button1TotalVotes = button1TotalVotes + 1;
        //update graphic
        $("#button1Count").html('' + button1TotalVotes);

        updateWar(team);
        $(".popup-overlay, .popup-content").removeClass("active");
    });

    $("#button2").click(function () {
        team = 2;
        button2TotalVotes = button2TotalVotes + 1;
        //update graphic
        $("#button2Count").html('' + button2TotalVotes);

        updateWar(team);
        $(".popup-overlay, .popup-content").removeClass("active");
    });

    function updateWar(team) {
        //Cole
    };

});