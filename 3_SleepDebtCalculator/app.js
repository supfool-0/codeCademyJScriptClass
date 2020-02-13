//************************************ FUNCTIONS

// how much sleep I get on any given weekday
const getSleepHours = day =>{
  
  switch (day.toLowerCase()){
    case 'monday':
      return (4);
      break;
    case 'tuesday':
      return (5);
      break;
    case 'wednesday':
      return (6);
      break;
    case 'thursday':
      return (7);
      break;
    case 'friday':
      return (4);
      break;
    case 'saturday':
      return (5);
      break;
    case 'sunday':
      return (5);
      break;
    default:
      return ("That is not a day of the week.");
  }
}

// summing up sleep hours for the week
const getActualSleepHours = () =>{
  
  let sum = 4;
  sum += 5;
  sum += 6;
  sum += 7;
  sum += 4;
  sum += 5;
  sum += 5;
  
  return sum;
}

// calculating my ideal sleep hours
const getIdealSleepHours = (hours) => {
  //const idealHours = ;
  return (hours*7);
}

// calculating sleep debt
const calculateSleepDebt = (hours) => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(hours);
  
  if (actualSleepHours === idealSleepHours){
      console.log("The user got the perfect amount of sleep.");
  }
  
  if (actualSleepHours > idealSleepHours){
      let diff = actualSleepHours - idealSleepHours;
      console.log(`The user got ${diff} hours more sleep than needed.`);
  }
  
  if (actualSleepHours < idealSleepHours){
      let diff = idealSleepHours - actualSleepHours;
      console.log(`The user slept ${diff} hours less than the ideal sleep and should get some rest.`);
  }
}



//************************************ MAIN
calculateSleepDebt(9);








