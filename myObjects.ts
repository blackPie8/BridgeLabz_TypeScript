const User = {
  name: 'Ashray',
  email: 'stanashray@gmail.com',
  isActive: true
}

function createUser({name: string,isPaid: boolean}){}

createUser({name: 'Ashray', isPaid: false})

// Aliases

type User = {
  name: string,
  email: string,
  isPaid: boolean
}

function createUserTwo(user: User):User{
  return {name: 'Ashray', email: 'stanashray@gmail.com', isPaid: false}
}

createUserTwo({name: 'Ashray', email: 'stanashray@gmail.com', isPaid: false})

type newUserL

export {}