let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below: ********************************************** FUNCTIONS

// generating a random target number
const generateTarget = () =>{
  let target = Math.floor(Math.random() * Math.floor(10))
  return (target);
}

// comparing the human and computer guesses
const compareGuesses = (human, computer, target) => {
  
  let diff1 = Math.abs(human - target); // human target distance
  let diff2 = Math.abs(computer - target); // computer target distance
  
  // case 1: tie
  if (diff1 === diff2){
    return true;
  }
  
  // case 2: computer wins
  if (diff1 > diff2){
    return false;
  }
  
  // case 3: human wins
  if (diff1 < diff2){
    return true;
  }
}

// updating the score to global variables
const updateScore = (winner) =>{
  if (winner === 'human') {humanScore++;}
  else{computerScore++;} 
}

// advancing the round
const advanceRound = () =>{
  currentRoundNumber++;
}
