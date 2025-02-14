interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string
  // startTrial: () => string
  startTrial(): string
  getCoupon(couponname: string, value: number): number
}

interface User {         // re-opening of an interface
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const Ashray : Admin = {dbId: 22, email: "stanashray@gmail.com", userId: 2211,
  startTrial: () => {
    return "Hello!"
  },
  getCoupon: (name: 'Adidas', off: 10) => {
    return 8;
  },
  githubToken: "github",
  role: 'admin'
}
Ashray.email = "a@stan.com"
// Ashray.dbId = 43

