function DigitalPai(hungry, sleepy, bored, age) {
  this.hungry = hungry;
  this.sleepy = sleepy;
  this.bored = bored;
  this.age = age;
  this.feed = function() {
    if (this.hungry === true) {
       console.log("That was yummy!");
     } else {
     this.hungry = false; 
     this.sleepy = false;
     console.log("No thanks! Im Full!");
     
    }
  };
  this.isSleepy = function() {//finish attack function, go through directions
    if (this.sleepy === true) {
       console.log("Zzzzzz");
     } else {
     this.bored = true; 
     this.sleepy = false;
     this.increaseAge();
     console.log("No way Im not tired");
    }
  };
  this.play = function() {//finish attack function, go through directions
    if (this.bored === true) {
       console.log("yay! Lets Play!");
     } else {
     this.bored = false; 
     this.hungry = true;
     increaseAge();
   
     console.log("-----------------\nNo way Im not tired");
    }
  };
  this.increaseAge = function() {
   
    this.age++;
    console.log("happy birthday to me! I am " + this.age + " years old");
   
  }
  this.printStats = function() {
    console.log("hungry: " + this.hungry + "\nsleepy: " + this.sleepy + "\nbored: " + this.bored + "\nage: " + this.age);

  };
}

var tamagochi = new DigitalPai(false, false, true, 0);
console.log("======= Current Status: ======")
tamagochi.printStats();
console.log("-----------------");
tamagochi.feed();
console.log("-----------------");
tamagochi.play();
console.log("-----------------");
tamagochi.isSleepy();


