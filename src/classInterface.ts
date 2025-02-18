interface User {
  name: string;
  age: number;
  gender: string;
  personName(): void;
}

class Person implements User {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  personName(): void {
      console.log(`Hello ${this.name}`)
  }
}

const personOne = new Person("Ashray", 21, 'M');
personOne.personName();