// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() {
    let check = document.getElementById('opponent');
    let radiorpsls = document.getElementById('rpsls');

    // Check if checked is checked. 
    if (check.checked == true) {
        $('.shots').show();

        if (radiorpsls.checked == true) {
            $('.rpsls').show();
        } else {
            // Since using radio, else means that radiorps.checked == true. 
            $('.rpsls').hide();
        }
    } else {
        $('.shots').hide();
    }
}

function startOver() {
    $(".hideDuringResults").css({
        display: "block",
        visibility: "visible"
    });

    $(".inlineBlock").css({
        display: "inline-block"
    });

    document.getElementById('userinput').reset();
    $('.results').hide();
    showHideShots();
}

async function playGame() {
    $(".hideDuringResults").css({
        display: "none",
        visibility: "hidden"
    });
    let game = $('input[type=radio][name=game]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();

    let baseURL = window.location.href + 'app/';

    let check = document.getElementById('opponent');
    let url = '';

    if (check.checked == true) {
        url = baseURL + game + '/play/' + shot;
    } else {
        url = baseURL + game + '/play/';
    }
    console.log(url);


    await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);
            if (check.checked==false) {
                document.getElementById("playerChoice").innerHTML = result.player;
            } else {
                document.getElementById("playerChoice").innerHTML = "You: " + result.player;
            }
            document.getElementById("opponentChoice").innerHTML = "Opponent: " + result.opponent;
            document.getElementById("gameResult").innerHTML = "Result: you " + result.result;
        });


    $('.playerChoice').show();

    if (check.checked) {

        $('.rpslsOutput').show();

    } else {
        $('.rpslsOutput').hide();
    }

    $('.results').show();
    console.log(results); 
}