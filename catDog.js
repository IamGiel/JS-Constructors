

var dog = {
	"raining": true,
	"noise": "woof!",
	makeNoise: function (){
		if (this.raining == true) {
			console.log("its raining dogs!");
		}
	}
}
var cat = {
	"raining": true,
	"noise": "meow!",
	makeNoise: function (){
		if (this.raining == true) {
			console.log("its raining dogs!");
		}
	}
}

console.log(dog.noise);
console.log(cats.noise);