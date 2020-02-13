let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//*****************************************************
let storyArr = story.split(' '); // puts string into an array
//console.log(storyArr.length); // gets word count (188)

// remove unnecessary words
let betterWords = storyArr;
for(let i = 0; i < unnecessaryWords.length; i++){
  betterWords = betterWords.filter(word => word !== unnecessaryWords[i]);
}

// tallying overused words
let tallyArr = [0,0,0];
for(let i = 0; i < overusedWords.length; i++){
  for(let k = 0; k < betterWords.length; k++){
    if(overusedWords[i] === betterWords[k]){
      tallyArr[i]++;
    }
  }
}

// counting sentences
let sentenceCounter = 0;
for(let i = 0; i < betterWords.length; i++){
  if (betterWords[i].endsWith('.')) {sentenceCounter++}
  if (betterWords[i].endsWith('!')) {sentenceCounter++}
}




// *************************** Printing results
console.log(`Word count: ${betterWords.length}`); // gets word count (182)
console.log(`Sentence count: ${sentenceCounter}\n`); //(12)
// printing results from tallying overused words
for(let i = 0; i < tallyArr.length; i++){
  console.log(`'${overusedWords[i]}' is used ${tallyArr[i]} times`);
}
console.log('\n');
console.log(betterWords.join(' '));