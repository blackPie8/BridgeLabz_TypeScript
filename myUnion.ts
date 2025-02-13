let score: number | string = 33

score = "8"

type User = {
  name: string,
  id: number
}

type Admin = {
  username: string,
  id: number
}

let ashray : User | Admin = {name: 'Ashray', id: 34}

// function getDbId(id: number | string){
//   console.log(`DB id is ${id}`);
// }

getDbId(3)
getDbId("8")

function getDbId(id: number | string){
  if(typeof id === 'string'){
    id.toUpperCase()
  }
}

// array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]

const data3: (number | string | boolean)[] = [1,"2",false]