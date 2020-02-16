const menu = {
  
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[],
  },
  
  get appetizers(){return(this._courses.appetizers)},
  get mains(){return(this._courses.mains)},
  get desserts(){return(this._courses.desserts)}, 
  
  set appetizers(info){this._courses.appetizers = info},
  set mains(info){this._courses.mains = info},
  set desserts(info){this._courses.desserts = info},
  
  // Can't you just return(_courses)? Is it best practice to utilized getter methods?
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    return this._courses[courseName].push(dish); // I don't understand why this needs to be returned here
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal(){
    let appetizers = this.getRandomDishFromCourse('appetizers');
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');
    
    //Calculates the total price
    const totalPrice = appetizers.price + mains.price + desserts.price; 
    return `${appetizers.name}, ${mains.name}, ${desserts.name} = \$${totalPrice}`;
  }  
};


// ******************************************** MAIN

// add appetizers
menu.addDishToCourse('appetizers','cococnut shrimp',7.00);
menu.addDishToCourse('appetizers','bruschetta',5.50);
menu.addDishToCourse('appetizers','cheesy fries',4.00);

// add mains
menu.addDishToCourse('mains','tacos',7.00);
menu.addDishToCourse('mains','ramen',5.50);
menu.addDishToCourse('mains','sushi',4.00);
menu.addDishToCourse('mains','pizza',4.00);

// add desserts
menu.addDishToCourse('desserts','mochi',7.00);
menu.addDishToCourse('desserts','thai ice cream',5.50);
menu.addDishToCourse('desserts','chocolate truffles',4.00);
menu.addDishToCourse('desserts','fried donut',4.00);

// generate a meal
const meal = menu.generateRandomMeal();
console.log(meal);


