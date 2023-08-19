console.log('first object\n')

var myPerson = {
    firstName: "Arthur", 
    lastName: "Morgan",
    age: "35"
}; 

console.log(`Name: ${myPerson.firstName} ${myPerson.lastName}\n Age: ${myPerson.age}`)

console.log('\n Our Array\n'); 

var icecreamFlavors: Array<string> = [
    "Tilamook Mudslide", 
    "Mint Chocolate Chip", 
    "Candy Bar", 
    "Green Tea Mochi",
    "Chocolate", 
    "Vanilla", 
    "Cookie and Cream"
]

icecreamFlavors.forEach((flavor, i) => {
    console.log(`${i + 1}. ${flavor}`)
})

console.log('\n An array of objects\n')
var people = [
    {
        firstName: "Arthur", 
        lastName: "Morgan", 
        age: 35
    }, 
    {
        firstName: "John", 
        lastName: "Marston", 
        age: 26
    }, 
    {
        firstName: "Sadie", 
        lastName: "Adler", 
        age: 35
    }
];

people.forEach((person) => {
    console.log(`Person's Info: ${person.firstName} ${person.lastName}, ${person.age}`);
})

console.log('\nAn Object with an array\n'); 

var myPersonWArray = {
    firstName: "Arthur", 
    lastName: "Morgan", 
    age: 35, 
    favoriteIcecreams: [
    "Tilamook Mudslide", 
    "Mint Chocolate Chip", 
    "Candy Bar", 
    "Green Tea Mochi",
    "Chocolate", 
    "Vanilla", 
    "Cookie and Cream"
    ]
}; 

console.log(`Person:`); 
console.log(`Name: "${myPersonWArray.firstName} ${myPersonWArray.lastName}"`)
console.log(`Age: ${myPersonWArray.age}`)
console.log(`Favorite Ice Cream: `)
myPersonWArray.favoriteIcecreams.forEach((flavor) => {
    console.log(`${flavor}`)
})