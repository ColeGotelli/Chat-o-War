// JavaScript source code

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myHTML = document.querySelector('html');
myHTML.onclick = function () { };



var twitch = window.Twitch.ext;

var twitch = window.Twitch.ext;

$(document).ready(function () {
    var button1TotalVotes;
    var button2TotalVotes;
    var $display = $(".button1count");

    // Clear variables and set display to '0'
    function reset() {
        $display.text("0");
        button1TotalVotes = 0;
        button2TotalVotes = 0;
    }

    reset();
};

});

function updateBlock(hex) {
    $('#color').css('background-color', hex);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

$(function () {
    $('#cycle').prop('disabled', false);

    $('#button1').click(function () {
        updateBlock(getRandomColor());
    })

    $('#button2').click(function () {
        updateBlock(getRandomColor());
    });

    $('#button1').click(function () {
        display = document.querySelector("#button1Count");
        display.innerHTML = 6;
        team = true;
        updateVoteCount(team);
        updateWar(team);
    });

});

var myHTML = document.querySelector('html');
$('#button1').onclick = function update() {
    const display = document.querySelector('.button1Count');
    display.textContent = 6;
    team = true;
    updateVoteCount(team);
    updateWar(team);
};

$('#button2').onclick = function update() {
    team = true
    updateVoteCount(team);
    updateWar(team);
};

function updateVoteCount(team) {
    if (team === true) {
        button1TotalVotes = button1TotalVotes + 1;
        //update graphic
        const display = document.querySelector('.button1Count')
        display.textContent = 6
        $('#button1Count').textContent = 6;
    }
    else if (team === false) {
        button2TotalVotes = button2TotalVotes + 1;
        //update graphic
        $('#button2Count').textContent = button2TotalVotes;
    }
}

function updateWar(team) {
    //Cole
}



function updateBlock(hex) {
    $('#color').css('background-color', hex);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

$(function () {
    $('#cycle').prop('disabled', false);

    $('#cycle').click(function () {
        updateBlock(getRandomColor());
    });
});
