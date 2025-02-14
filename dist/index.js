"use strict";
// class User {
//   email: string
//   name: string
//   private readonly city: string = ""
//   constructor(email: string, name: string){
//     this.email = email
//     this.name = name
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Shimla";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `Your Apple is ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course number should be > 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 8;
    }
}
const Ashray = new User("stan@gmail.com", "Stan");
// Ashray.city
