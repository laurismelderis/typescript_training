import { Person } from './person'

export class Player implements Person {
    name: string = 'noName'
    age?: number
    highScore: number = -1

    formatName() {
        return this.name.toUpperCase()
    }
}