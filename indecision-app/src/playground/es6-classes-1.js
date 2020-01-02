class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi my name is ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }        
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let description = super.getGreeting();

        if (this.homeLocation) {
            description += ` I am visiting from ${this.homeLocation}.`
        }

        return description;
    }
}

const me = new Traveler('John Fox', 6, 'computer science');
console.log(me.getGreeting());

const you = new Traveler();
console.log(you.getGreeting());
