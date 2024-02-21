// variables to calcualte winner
const playerScore=0;
const  computerScore=0;

// variables to store user selection
const selection = document.querySelectorAll('.rps');
selection.forEach((button)=>{
    button.addEventListener('click',()=>{
        const selection=button.innerHTML;
        playGame(selection);
    });
});

// To play the game
function playGame(playerSelection){
    const computerSelection=getComputerchoice();

    playRound(playerSelection, computerSelection);
}


// To play the round each time and return the winner point for each round
function playRound(playerSelection, computerSelection){
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