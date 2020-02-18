const menu = {
  
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[],
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    return this._courses.appetizers = appetizers;
  },
  set mains(mains){
    return this._courses.mains = mains;
  },
  set desserts(desserts){
    return this._courses.desserts = desserts;
  }, 
  get courses(){
    return this._courses;
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name : dishName,
      price : dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dish = this._courses[courseName];
    const index = Math.floor(Math.random() * dish.length);
    return dish[index];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    
    // total price calc
    const total = appetizer.price +  main.price + dessert.price;
    return `${appetizer.name}, ${main.name}, ${dessert.name} = \$${total}`;
  }
}


menu.addDishToCourse('appetizers','cheesy fries', 2.00);
menu.addDishToCourse('appetizers','onion rings', 3.00);
menu.addDishToCourse('mains','tacos', 3.00);
menu.addDishToCourse('mains','ramen', 5.00);
menu.addDishToCourse('desserts','mochi', 2.50);
menu.addDishToCourse('desserts','cake', 2.00);




console.log(menu.generateRandomMeal());









