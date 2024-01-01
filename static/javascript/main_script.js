let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// let players = [];
let player1counter = 0;
let player2counter = 0;

function normal() {
    window.location.href = '/normal_mode'; 
}

function repeat() {
    window.location.href = '/repeat_mode';  
}

// function setField(numPlayers) {

// }

function incrementPlayer1() {
    player1counter ++;
    //update innerhtml
    let player1 = document.getElementById("player1");
    player1.innerHTML = "Player 1: " + player1counter;
}

function incrementPlayer2() {
    player2counter ++;
    //update innerhtml
    let player2 = document.getElementById("player2");
    player2.innerHTML = "Player 2: " + player2counter;
}

async function pickLetterNormal() {
    let displayLetter = document.getElementById("displayLetter");
    let displayLetterFinal = document.getElementById("displayLetterFinal");
    displayLetterFinal.innerHTML = "";        
    // console.log("letters: " + letters);
    if (letters.length > 0) {
        // simulate going through the selections
        //only go until there's one letter left in array
        if (letters.length > 1) {
            for (let i = 0; i < 75; i ++) {
                let randomIndex = Math.floor(Math.random() * letters.length);
                displayLetter.innerHTML = letters[randomIndex];
                await new Promise(resolve => setTimeout(resolve, 1 * (1 + i)));
            }
        }
        let randomIndex = Math.floor(Math.random() * letters.length);
        // console.log("picked: " + letters[randomIndex]);
        displayLetter.innerHTML = "";
        displayLetterFinal.innerHTML = letters[randomIndex];
        await new Promise(resolve => setTimeout(resolve, 2000));
        // displayLetterFinal.innerHTML = "";
        letters.splice(randomIndex, 1);
        for (let i = 5; i >= 1; i--) {
            displayLetter.innerHTML = i;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        displayLetter.innerHTML = "Time's Up!";

    }
    else {
        displayLetterFinal.innerHTML = "";
        displayLetter.innerHTML = "Game over - all out of letters!";
    }
}

async function pickLetterRepeat() {
    let displayLetter = document.getElementById("displayLetter");
    let displayLetterFinal = document.getElementById("displayLetterFinal");
    displayLetterFinal.innerHTML = "";        
    // console.log("letters: " + letters);
    if (letters.length > 0) {
        // simulate going through the selections
        for (let i = 0; i < 75; i ++) {
            let randomIndex = Math.floor(Math.random() * letters.length);
            displayLetter.innerHTML = letters[randomIndex];
            await new Promise(resolve => setTimeout(resolve, 1 * (1 + i)));
        }
        let randomIndex = Math.floor(Math.random() * letters.length);
        // console.log("picked: " + letters[randomIndex]);
        displayLetter.innerHTML = "";
        displayLetterFinal.innerHTML = letters[randomIndex];
        await new Promise(resolve => setTimeout(resolve, 2000));
        // displayLetterFinal.innerHTML = "";        
        for (let i = 5; i >= 1; i--) {
            displayLetter.innerHTML = i;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        displayLetter.innerHTML = "Time's Up!";
    }
    else {
        displayLetter.innerHTML = "Game over - all out of letters!";
    }
}

function endGame() {
    resetLetters();
    player1counter = 0;
    player2counter = 0;
    window.location.href = '/';  
}

function resetLetters() {
    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}

