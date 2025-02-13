// const User: (string | number)[] = ["1", 2, 3]

let tUser : [string, number, boolean]
tUser = ["Ashray", 8, true]

let rgb : [number, number, number] = [255, 255, 255]

type User = [number, string]

const newUser: User = [122, 'stanashray@gmail.com']

newUser[0] = 123
newUser.push(88)

export {}