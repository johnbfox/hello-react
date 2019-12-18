const add = function (a, b) {
    console.log(arguments)
    return a + b;
}

console.log(add(5, 6));

const user = {
    name: 'John',
    cities: ['Boston', 'Amherst'],
    printPlacesLived () {
        const cityMessages = this.cities.map(city => this.name + ' has lived in ' + city);
        return cityMessages;
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map(num => num * 5);
    }
}

console.log(multiplier.multiply());

