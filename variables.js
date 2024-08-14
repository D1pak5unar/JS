// A variable is a name storage for data.
let firstName = 'Dipak'; 
let lastName = 'Sunar';

console.log(firstName + lastName);


// to declare constant value, use const to declare the value
const christmas_2024 = '12.25.2024';
const COLOR_GREEN = 'green'; //upper case can be used for const but not necessary

console.log(christmas_2024);


/*PRIMITIVE TYPES AND REFERENCE TYPES
Primitive types include: String, Number, Bigint, Boolean, undefined, null, Symbol, and 
object (which is reference data type). Primitive types can only hold single thing either string or number
However, object (reference type) is complex structure and holds key value pairs which enables us to store 
more than one variables all in one */

//Here are ways to initialize strings!!
let favoriteCar = 'Porshe';
let favoritePlace = "Home";
let favoriteActivity = `Nap`;

//Initialize numbers!!
let numberOfCars = 50;
let pie = 3.14;
let veryLargeNumber = 23487502894375n;

//Initialize boolean!!
let lovesCoding = true;
let lovesSwimming = false;

//Initialize undefined!! (you declare nothing it holds undefined as a value by default)
let favoriteColor;

console.log(favoriteColor);

//Initialize null!! we use it when we want to explicitly clear the value of a variable. 
favoriteFruit = null;

console.log(favoriteFruit);

//Initialize symbol!!
const uniqueKey = Symbol();

console.log(uniqueKey);

//Initialize object (reference type!)
let course = {
    name: 'Flying rocket to Mars',
    duration: 5
};

console.log(course);



