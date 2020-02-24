iclass Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings =[];
  }
  get title(){return this._title;}
  get isCheckedOut(){return this._isCheckedOut;}
  get ratings(){return this._ratings;}
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  //By having or not having getters and setters you are 
  //choosing access rights. There is not reason raw properties
  //should be accessed anywhere outside the constructor,
  //getters, and setters - this is best practice
  
  getAverageRating(){
    const total = this.ratings.reduce((a, b) => a + b, 0);
    return total / this.ratings.length;
  }
  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut;
  }
  addRating(rating){
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){return this._author;}
  get pages(){return this._pages;}
}

class Movie extends Media {
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){return this._director;}
  get runTime(){return this._runTime;}
}

class CD extends Media{
  constructor(artist,title,songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist(){return this._artist;}
  get songs(){return this._songs;}
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.addRating(1);
historyOfEverything.addRating(2);
historyOfEverything.addRating(3);
console.log(historyOfEverything.getAverageRating());
