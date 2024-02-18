// Declare two variables to calcualte winner
const start=0;
let win=0

// Recursive function to play the game 5 times
for(let i=0; i<5; i++){
    playGame();
}
console.log(checkWinner(win));

// To play the game and collect the overall winner point
function playGame(){
    const playerSelection=prompt("Rock, Paper or Scissors?");
    const computerSelection=getComputerchoice();

    // collects the point overall
    win += playRound(playerSelection, computerSelection, start);
}


// To play the round each time and return the winner point for each round
function playRound(playerSelection, computerSelection, start){
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        console.log( "Sorry!, It's a tie");
        return 0;
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='scissors'){
        console.log( "You Win! Rock beats Scissors");
        return 1;
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='paper'){
        console.log( "You Lose! Paper beats Rock");
        return -1;
    }
    else if(playerSelection.toLowerCase()==='scissors' && computerSelection.toLowerCase()==='rock'){
        console.log( "You Lose! Rock beats Scissors");
        return -1;
    }
    else if(playerSelection.toLowerCase()==='scissors' && computerSelection.toLowerCase()==='paper'){
        console.log( "You Win! Scissors beats Paper");
        return 1;
    }
    else if(playerSelection.toLowerCase()==='paper' && computerSelection.toLowerCase()==='scissors'){
        console.log( "You Lose! Scissors beats Paper");
        return -1;
    }
    else if(playerSelection.toLowerCase()==='paper' && computerSelection.toLowerCase()==='rock'){
        console.log( "You Win! Paper beats Rock");
        return +1;
    }
    else {
        console.log( "Wrong Input");
    }
}

// to return the winner of the game
function checkWinner(win){
    if(win<0){
        return `Sorry!, Computer is the Winner`;
    }
    else if(win>0){
        return `Hurray!, You are the Winner`;
    }
    else{
        return `It's a tie.`
    }
}

// to generate the computer choice
function getComputerchoice(){
    const value = ['Rock', 'Paper', 'Scissors'];
    const number = Math.floor(Math.random()*3);
    return value[number];
}