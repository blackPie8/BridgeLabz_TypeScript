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

  protected _courseCount = 1

  private readonly city: string = "Shimla"

  constructor(
    public email: string,
    public  name: string,
    // private userID: string
  ){
  }

  private deleteToken(){
    console.log("Token Deleted")
  }

  get getAppleEmail(): string{
    return `Your Apple is ${this.email}`
  }

  get courseCount(): number{
    return this._courseCount
  }

  set courseCount(courseNum){
    if(courseNum <= 1){
      throw new Error("course number should be > 1")
    }
    this._courseCount = courseNum
  }
}

class SubUser extends User{
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 8
  }
}

const Ashray = new User("stan@gmail.com", "Stan")
// Ashray.city