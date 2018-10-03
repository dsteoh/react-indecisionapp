class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //Template string
        return `Welcome ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        return this.hasMajor() ? `${description}. Their Major is: ${this.major}` : description;
        
    }
}

//Traveller 
//Add support for homeLocation
//Override getGreeting
//1. Hi i am andrew. I'm visiting from Melbourne 
//2. Hi i am andrew.

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHome() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        return this.hasHome() ? `${greeting}. I am from ${this.homeLocation}` : greeting;
    }
}


const me = new Traveller('Andrew', 15, 'Australia');
console.log(me.getGreeting());

const other = new Traveller('Alex', 20);
console.log(other.getGreeting());