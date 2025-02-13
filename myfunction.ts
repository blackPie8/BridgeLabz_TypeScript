function addTwo(num : number) : number{
  return 2 + num
  // return 'Hello'
}

function signUpUser(name: string, email: string, isPaid: boolean){
}

let loginUser = (name: string, email: string, isPaid: boolean = false)=> {}

const getHello = (s: string):string => {
  return ""
}

const heroes = ['batman','superman','bane']

heroes.map((hero): string => {
  return `hero is ${hero}`
})

function fail(msg: string): never{
throw new Error(msg)
}

loginUser('Ashray', 'ashraystan@icloud.com')

signUpUser('Ashray', 'stanashray@gmail.com', true)

addTwo(9)

export {}