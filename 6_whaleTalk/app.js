let input = 'I love Guap!'; // i,o,e,u,a
const vowels = ['a','e','i','o','u']; // all lowercase
let resultArray = [];
input = input.toLowerCase(); // makes all letters lowercase
input = input.split(''); // seperate out characters

// nested 'for' loop in a 'for' loop
for (let i = 0; i < input.length; i++){
  for(let k = 0; k < vowels.length; k++){
    if(input[i] === vowels[k]){
      
      // if 'e' push in twice
      if(vowels[k] === 'e'){
        resultArray.push(vowels[k]);
        resultArray.push(vowels[k]);
      }else if (vowels[k] === 'u'){ // if 'u'push in twice
        resultArray.push(vowels[k]);
        resultArray.push(vowels[k]);
      }else{
        resultArray.push(vowels[k]); // otherwise push once
      }
    }
  }
}

// final whale talk formatting
let whaleTalk = resultArray.join('');
whaleTalk = whaleTalk.toUpperCase();
console.log(whaleTalk);

