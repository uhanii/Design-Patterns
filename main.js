// import { printName } from './user.js'
import User, {printName as printUserName, printAge} from '/user.js'

const user = new User('Bob', 10)
console.log(user)
printUserName(user)
printAge(user)