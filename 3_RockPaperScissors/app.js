//************************************ FUNCTIONS

// gets input and errs if not correct
const getUserChoice = (userInput) => {
  
  userInput = userInput.toLowerCase(); // changing input to lowercase
  
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput; 
  }else{
    console.log(`${userInput} is not a rock, paper, or scissors.`); // err message
  }
};

// gets computer input
const getComputerChoice = () =>{
  
  let computerChoice = Math.floor(Math.random()*4);

  // computer conversion
  switch(computerChoice){
    case (0):
      computerChoice = 'rock';
      break;
    case (1):
      computerChoice = 'paper';
      break;
    case (2):
      computerChoice = 'scissors';
      break;
    case (3):
      computerChoice = 'bomb';
      break;
  }
  return(computerChoice);
}

// function that determines a winner
const determineWinner = (userChoice,computerChoice) =>{
  
  // check if it's a tie (they can both potentially 'bomb')
  if(userChoice === computerChoice){
       return ('It\'s a tie.');
  }
  
  // bomb secret cheat code
  if(userChoice === 'bomb'){
    return('The user won!');
  }
  
  if(computerChoice === 'bomb'){
    return('The computer won!');
  }
  
  // case 1 - userChoice rock
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
       return('The computer won!');
     }else{
       return('The user won!');
     }
   }
  
  // case 2 - userChoice paper
  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return('The user won!');
    }else if (computerChoice === 'scissors'){
       return('The computer won!');
    }
   } 
  
  // case 3 - userChoice scissors
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return('The computer won!');
    }else if (computerChoice === 'paper'){
       return('The user won!');
    }
  }
  
}

// playing the actual game
const playGame = (userInput) =>{
  let userChoice = getUserChoice(userInput); // gets user choice
  let computerChoice = getComputerChoice(); // gets computer choice
  console.log(`user:${userChoice}, computer:${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}



//************************************ MAIN
let userInput = 'Paper'; // user input
playGame(userInput);



