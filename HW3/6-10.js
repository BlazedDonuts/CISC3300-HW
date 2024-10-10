const cats = [
    {
        name: "Charlie",
        adoptionStatus: "available"
    },
    {
        name: "Lily",
        adoptionStatus: "not-available"
    },
    {
        name: "Coco",
        adoptionStatus: "available"
    },
    {
        name: "Oreo",
        adoptionStatus: "not-available"
    },
    {
        name: "Luna",
        adoptionStatus: "available"
    },
    {
        name: "Milo",
        adoptionStatus: "available"
    },
    {
        name: "Lola",
        adoptionStatus: "not-available"
    },
    {
        name: "Leo",
        adoptionStatus: "available"
    },
    {
        name: "Willow",
        adoptionStatus: "available"
    },
    {
        name: "Bella",
        adoptionStatus: "not-available"
    },
    {
        name: "Max",
        adoptionStatus: "available"
    },
    {
        name: "Cleo",
        adoptionStatus: "available"
    },
    {
        name: "Lucy",
        adoptionStatus: "not-available"
    },
    {
        name: "Daisy",
        adoptionStatus: "available"
    },
];

//cute cats
const cuteCats = cats.map(cat => `${cat.name} is cute!`);
console.log(cuteCats);


//available cats
let availableCats = [];

cats.forEach(cat => {
    if (cat.adoptionStatus === "available") {
        availableCats.push(cat.name);
    }
});

let newSentence = `You have adopted these cats: ${availableCats.join(", ")}`;

console.log(newSentence); 

//cat object properties
const cat = {
    name: "Pinecone",
    age: 13,
    type: "Munchkin",
    cuteness: 9001
};

for (let prop in cat) {
    console.log(cat[prop]);
}

//comparison
const num = 1;
const string = "1";

if (num == string) {
    console.log('1 and "1" are equal (using ==)');
}

if (num === string) {
    console.log('1 and "1" are equal (using ===)');
}
else {
    console.log('1 and "1" are not equal (using ===)');
}

//random number
const randomNumber = Math.random() * 10;
const result = randomNumber > 5 ? "greater than five!" : "less than five!";

console.log(result);


