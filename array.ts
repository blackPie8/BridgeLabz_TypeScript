const superHeroes: string[] = []

// const heroPower: number[] = []
const heroPower: Array<number> = []

type User = {
  name: string
  isActive: boolean
}

const allUsers: User[] = []

allUsers.push({name: 'Ashray', isActive: true}, {name: 'Stan', isActive: false})

const MLModels : number[][] = [
  [12,34,23],
  [11]
]


// readonly array

const names: ReadonlyArray<string> = ['Ashray','Stan']
// names.pop()
// names[1] = 'pop'

superHeroes.push('Ashray')
heroPower.push(8)

export {}