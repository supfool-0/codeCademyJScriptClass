class School{
  constructor(name,level,numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){return this._name;}
  get level(){return this._level;}
  get numberOfStudents(){return this._numberOfStudents;}
  set numberOfStudents(value){
    if(isNaN(value)){
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }else{this._numberOfStudents = value;}
  }
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    const i = Math.floor(Math.Random()*substituteTeachers.length);
    return(substituteTeachers[i]);
  }
}

class Primary extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){return this._pickupPolicy;}
}

class Middle extends School{
  constructor(name,numberOfStudents){
    super(name, 'middle', numberOfStudents);
  }
}

class High extends School{
  constructor(name,numberOfStudents,sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){return this._sportsTeams;}
}

