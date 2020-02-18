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

// compareDNA
const compareDNA = (pAequor) =>{
  
}

//*********************************************


const int = 1; // number of organisms to create
const organismHolder = [];

// factory function
const pAequorFactory = int =>{
  
  for(let i = 0; i < int; i++){
    
    // organism obj
    const organism = {
      specimenNum: i,
      dna: mockUpStrand(),
      
      // mutates a healthy dna strand
      mutate(){
        const index = Math.floor(Math.random() * 15);
        const oriBase = this.dna[index]; // original base
        const mutBase = ''; // mutated base

        do { // make sure bases aren't eq
          mutBase = returnRandBase();
        } while (oriBase === mutBase);
        
        if (oriBase !== mutBase) {
          dna[index] = mutBase;
        }
        return(dna); // returns mutated dna
      }
    } // obj end
    
    organismHolder.push(organism); // stores non-mutated dna here
  }
}
  
    
  

//****************************************** let's run some stuff
pAequorFactory(int);
console.log(organismHolder[0].dna);

// this is so crazy. It's literally what I used to do for a living, but oop. It's blowing my mind. I'm learning so much.

// Need to double check that the mutate function is working like it's supposed to...and make sure that splice isn't necessary


