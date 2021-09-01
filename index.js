'usestrict';
var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

var bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak); // Fido says WOOF WOOF when he wants to fetch balls

console.log(delete dog.dogYears); // true

dog.dogYears = 35;
console.log(dog.dogYears); // 35

console.log(delete dog.dogYears); // true
console.log(dog.dogYears); // undefined