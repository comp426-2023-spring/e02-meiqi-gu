// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() {
    let check = document.getElementById('opponent'); 
    let radiorps = document.getElementById('rps'); 
    let radiorpsls = document.getElementById('rpsls'); 

    // Check if checked is checked. 
    if (check.checked==true) {
        $('.shots').show(); 

        if (radiorpsls.checked==true) {
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
    document.getElementById('userinput').requestFullscreen(); 
    showHideShots(); 
}

async function playGame() {
    let game = $('input[type=radio][name=game]: checked').val(); 
    let shot = $('input[type=radio][name=shot]: checked').val(); 

    let baseURL = window.location.href + 'app/'; 

    let check = document.getElementById('opponent'); 
    let url = ''; 
    if (check.checked==true) {
        url = baseURL + game + '/play/' + shot; 
    } else {
        url = baseURL + game + '/play/'; 
    }
    
    // TO DO: Other versions. 


    let response = await fetch(url); 
    let result = await responsejson(); 

    // Need something to tell if Opponent box is checked. Must be able to select. 
    // Depending on game. append something different to url. SHOT >> PULLED OUT OF NAME GROUP (done). 
}