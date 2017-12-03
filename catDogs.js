


var dog = {
	"raining": true,
	noise: "woof!",
	makeNoise: function (){
		if (this.raining === true) {
			console.log(this.noise);
		}
	}
}
var cat = {
	"raining": true,
	noise: "meow!",
	makeNoise: function (){
		if (this.raining === true) {
			console.log(this.noise);
		}
	}
}

console.log(dog.makeNoise());
console.log(cat.makeNoise());
