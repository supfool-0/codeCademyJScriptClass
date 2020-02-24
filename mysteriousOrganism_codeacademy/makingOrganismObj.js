// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}

// factory function
const pAequorFactory= (int, dna) =>{

  const organism = {
    specimenNum: int,
    dna: dna,
  
    // mutates a healthy dna strand
    mutate(){
      const index = Math.floor(Math.random() * 15);
      const oriBase = this.dna[index]; // original base
      let mutBase = ''; // mutated base
      
      do { // make sure bases aren't the same
        mutBase = returnRandBase();
      } while (oriBase === mutBase);

      if (oriBase !== mutBase) {
        this.dna[index] = mutBase;
      }
      return(this.dna);
    },
    
    // compareDNA
    compareDNA(pAequor){
      
      let count = 0;
      for(let i = 0; i < 15; i++){
        if(this.dna[i] !== pAequor.dna[i]){
          count++;
        }
      }
      
      if (count === 0){
        console.log(`${this.specimenNum} and ${pAequor.specimenNum} have 100% DNA in common.`);
      }else{
        const percent = Math.floor(((15-count) / 15) * 100);
        console.log(`${this.specimenNum} and ${pAequor.specimenNum} have ${percent}% DNA in common.`);
      }
    },
    
    // calculate GC content
    willLikelySurvive(){
      let count = 0;
      for(let i = 0; i < 15; i++){
        if(dna[i] === 'C' || dna[i] === 'G'){count++;}
      }
      if((count/15)>=.6){return(true)}
      if((count/15)<.6){return(false)}
    }
  } // obj end
  return(organism);
}
  
    
  

//******************************************
const organismHolder = [];
let i = 0;
while(i<30){
  const newOrganism = pAequorFactory(i,mockUpStrand());
  if(newOrganism === true){
    organismHolder.push(newOrganism);
    i++;
  }
}


// double checking to make sure only 'true' organisms go into the array
organismHolder[0].compareDNA(organismHolder[1]);
console.log(organismHolder[29].willLikelySurvive());


