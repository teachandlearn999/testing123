//Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

// coffeeType 
let regularLatte = "Latte";
let almondLatte = "Almond latte"
let americano = "Americano";
let icedCoffee = "Iced Coffee"

// setPrice 
let smallCup = "small";
let mediumCup = "medium";
let largeCup = "large";

function setPrice(cupSize, price = 3) {
   if (cupSize == smallCup) {
      return price;
   } else if (cupSize == mediumCup) {
      return price * 1.5;
   } else if (cupSize == largeCup) {
      return price * 2;
   }
}

// content 
const setWater = coffeeType => (coffeeType == icedCoffee) ? "cold water" : "hot water";
const setMilk = coffeeType => (coffeeType == regularLatte) ? "regular milk" : (coffeeType == almondLatte) ? "almond milk" : "";

// receipt 
function getReceipt(name, cupSize, coffeeType) {

   const getWelcomeMessage = name => `\t\t\t` + "** Welcome, " + name + "! **" + `\n`;
   let choice = "Your choice: " + cupSize + " " + coffeeType + `\n`;
   let content = "Please add coffee and " + setWater(coffeeType) + `\n`;
   let contentMilk = "Please add coffee, " + setMilk(coffeeType) + " and " + setWater(coffeeType) + `\n`;
   let orderPrice = "Your order price is " + setPrice(cupSize) + "$" + `\n`;
   let enjoy = "Enjoy!";

   if (coffeeType == americano || coffeeType == icedCoffee) {
      console.log(getWelcomeMessage(name) + choice + content + orderPrice + enjoy);
   } else {
      console.log(getWelcomeMessage(name) + choice + contentMilk + orderPrice + enjoy);
   }
}

getReceipt("John", mediumCup, almondLatte);

