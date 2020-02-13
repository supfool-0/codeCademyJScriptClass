let raceNumber = Math.floor(Math.random() * 1000);

// boolean to tell if a runner registered
let registeredEarly = false;
let runnerAge = 18;

// check if runner over 18 and registered early
if (runnerAge > 18 && registeredEarly === true){
  raceNumber += 1000;
}

// for runners over 18
if (runnerAge > 18 && registeredEarly === true){
  console.log(`Race starts at 9:30 for runner number ${raceNumber}`);
}else if (runnerAge >18 && registeredEarly === false){
  console.log(`Race starts at 11:00 for runner number ${raceNumber}`);
}else{
  console.log('See the registration desk.');
}

// for runners under 18
if (runnerAge < 18){
  console.log(`Race starts at 12:30 for runner number ${raceNumber}`);
}else {
  console.log('See the registration desk.');
}