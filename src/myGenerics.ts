const score: Array<number> = []
const names: Array<string> = []

function identityOne(val : boolean | number): boolean | number {
  return val
}

function identityTwo(val: any): any {
  return val
}

function identityThree<Type>(val: Type): Type {
  return val
}

// identityThree("8")
identityThree("Ashray")

function identityFour<T>(val: T): T {
  return val
}

interface Bottle{
  brand: string,
  type: number
}

identityFour<Bottle>({brand: 'cello', type: 181})

function getSearchProducts<T>(products: T[]): T{
  const myIndex = 3
  return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T=> {
  const myIndex = 4
  return products[myIndex]
}

interface Database {
  connection: string,
  username: string,
  password: string
}

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo
  }
}