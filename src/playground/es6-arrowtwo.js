// arguments objects - no longer bond with arrow functions
const add = (a, b) => {
    //console.log(arguments);
    return a + b
};

console.log(add(55,1,1001));

//this keyword - no longer bond
const user = {
    name: 'Andrew',
    cities: ['Melbourne', 'Ipoh', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived())    

//Challenge area
const multiplier = {
    //number - array of numbers
    //multiplyBy - single number
    //multiply - return a new array where the numbers have been multiplied
    number: [2,4,5,10],
    multiply(multiplyBy) {
        return this.number.map((numbers) => numbers * multiplyBy);
    }
};

console.log(multiplier.multiply(3));