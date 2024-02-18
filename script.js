const playerSelection=prompt("Rock, Paper or Scissors?");
const computerSelection=getComputerchoice();

console.log(playRound(playerSelection,computerSelection));

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        return `Sorry!, It's a tie`;
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='scissors'){
        return `You Win! Rock beats Scissors`;
    }
    else if(playerSelection.toLowerCase()=='scissors' && computerSelection.toLowerCase()==='rock'){
        return `You Lose! Rock beats Scissors`;
    }
    else if(playerSelection.toLowerCase()=='paper' && computerSelection.toLowerCase()==='scissors'){
        return `You Lose! Scissors beats Paper`;
    }
    else if(playerSelection.toLowerCase()=='scissors' && computerSelection.toLowerCase()==='paper'){
        return `You Win! Scissors beats Paper`;
    }
    else if(playerSelection.toLowerCase()=='rock' && computerSelection.toLowerCase()==='paper'){
        return `You Lose! Rock beats Paper`;
    }
    else if(playerSelection.toLowerCase()=='paper' && computerSelection.toLowerCase()==='rock'){
        return `You Win! Rock beats Paper`;
    }
    else {
        return `Wrong Input`;
    }
}

function getComputerchoice(){
    const value = ['Rock', 'Paper', 'Scissors'];
    const number = Math.floor(Math.random()*3);
    return value[number];
}