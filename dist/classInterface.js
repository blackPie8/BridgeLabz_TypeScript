"use strict";
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    personName() {
        console.log(`Hello ${this.name}`);
    }
}
const personOne = new Person("Ashray", 21, 'M');
personOne.personName();
