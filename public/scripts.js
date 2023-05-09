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

    console.log('HERE'); 
    
}

function startOver() {
    console.log('Starting over.'); 
    document.getElementById('userinput').reset(); 
    $('.results').hide(); 
    showHideShots(); 
}

async function playGame() {

    console.log('PLAYING')
    let game = $('input[type=radio][name=game]:checked').val(); 
    let shot = $('input[type=radio][name=shot]:checked').val(); 
    console.log(game); 
    console.log(shot); 


    let baseURL = window.location.href + 'app/'; 

    let check = document.getElementById('opponent'); 
    let url = ''; 

    if (check.checked==true) {
        url = baseURL + game + '/play/' + shot; 
    } else {
        url = baseURL + game + '/play/'; 
    } 
    console.log(url); 

    let response = await fetch(url); 
    $('.results').show(); 
    // stops working here. 
    let result = await response.json(); 

    console.log(result); 

}