import { Player } from './player'
import { Game } from './game'
import * as Helpers from './utility'

let newGame: Game

document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player()
    player.name = Helpers.getValue('playername')

    const problemCount: number = Number(Helpers.getValue('problemCount'))
    const factor: number = Number(Helpers.getValue('factor'))

    newGame = new Game(player, problemCount, factor)
    newGame.displayGame()
})

document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore()
})

// Previous code. Read comments for useful information

// function startGame(): void {
//     // const playerName: string | undefined = getInputValue('playername')

//     // logPlayer(playerName)
//     // postScore(80, playerName)
// }

// function postScore(score: number, playerName: string = 'MultiMath Player'): void {
//     const scoreElement: HTMLElement | null = document.getElementById('postedScores')
//     scoreElement!.innerText = `${score} - ${playerName}`
// }

// function logPlayer(name: string = 'MultiMath Player', surname?: string): void { // with ? you add optionality to variable
//     console.log(`New game starting for player: ${name}`)
// }

// function sendGreeting(greeting: string = 'Good morning!'): void { // assigning default value makes the variable optional
//     console.log(greeting)
// }

// document.getElementById('startGame')!.addEventListener('click', startGame)

// const logMessage = (message: string): void => console.log(message)

// const firstPlayer: Player = new Player()
// firstPlayer.name = 'Lauris'
// console.log(firstPlayer.formatName())