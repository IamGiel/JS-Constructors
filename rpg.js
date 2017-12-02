// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function character(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
  this.stats = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nage: " + this.age + "\nstrength: " + this.strength + "\nhitpoints: " + this.hitpoints);

  };
  this.isAlive = function() {
    if (this.hitpoints > 0) {
      console.log(this.name + " is Alive");
    }
  };
  this.attack = function() {//finish attack function, go through directions
    if (CharacterB.hitpoints -  CharacterA.strength) {
      console.log(CharacterA.name + " update strength: " + CharacterA.strength);
    }
  };
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var CharacterA = new character("Alpha", "swordsman", "male", 99, 80, 8);
var CharacterB = new character("Giel", "sharpshooter", "male", 120, 90, 9);

console.log("----------------------");
CharacterA.stats();
console.log("----------------------");
CharacterB.stats();
console.log("----------------------");
CharacterA.isAlive();
CharacterB.isAlive();
console.log("----------------------");
CharacterA.attack();

// calling dogs and cats makeNoise methods
// dogs.makeNoise();
// cats.makeNoise();

// if we want, we can change an objects properties after they're created
// cats.raining = true;
// cats.makeNoise();

// var massHysteria = function(dogs, cats) {
//   if (dogs.raining === true && cats.raining === true) {
//     console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
//   }
// };

// massHysteria(dogs, cats);