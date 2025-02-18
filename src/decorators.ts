function Logger(constructor: Function) {
  console.log(`Class ${constructor.name} is created`);
}

@Logger
class Human {
  constructor() {
    console.log("Person instance created");
  }
}

const p1 = new Human();
