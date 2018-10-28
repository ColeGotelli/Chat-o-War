// JavaScript source code

var twitch = window.Twitch.ext;

$(document).ready(function () {
    var button1TotalVotes;
    var button2TotalVotes;
    var $displayButton1 = $(".button1count");
    var $displayButton2 = $(".button2count");

    // Clear variables and set display to '0'
    function reset() {
        $displayButton1.text("0");
        $displayButton2.text("0");
        button1TotalVotes = 0;
        button2TotalVotes = 0;
    }

    reset();

    $('.button1').click(function () {
        $displayButton1.text = 6;
        team = 1;
        updateVoteCount(team);
        updateWar(team);
    });

    $('.button2').click(function () {
        team = 2;
        updateVoteCount(team);
        updateWar(team);
    });

    function updateVoteCount(team) {
        if (team == 1) {
            button1TotalVotes = button1TotalVotes + 1;
            //update graphic
            $displayButton1.text = button1TotalVotes;
        }
        else if (team == 2) {
            button2TotalVotes = button2TotalVotes + 1;
            //update graphic
            $displayButton2.text = button2TotalVotes;
        }
        team = 0;
    };

    function updateWar(team) {
        //Cole
    };

});