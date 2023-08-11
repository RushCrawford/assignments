const readline = require('readline-sync');
const nameInput = readline.question('Would you like to play as Mario or Luigi?  ')

class Player {
    constructor (name,totalCoins,status,hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this. hasStar = hasStar
    }
    setName = (namePicked) => { this.name = namePicked ;console.log(namePicked) }

    gotHit(){
        if(this.status === 'Powered Up'){
            this.status = 'Big'
        } else if(this.status === 'Big'){
            this.status = 'Small'
        } else {this.status = 'Dead'}
    }

    gotPowerup(){
        if(this.status === 'Small'){
            this.status = 'Big'
        } else if(this.status === 'Big'){
            this.status = 'Powered Up'
        } else if(this.status === 'Powered Up'){this.hasStar = true}
    }

    addCoin = () => { return this.totalCoins++ }

    print = () => {
        console.log(`
Name: ${this.name}
Total Coins: ${this.totalCoins} 
Status: ${this.status} 
Has Star: ${this.hasStar}
`)}
}

const player = new Player(nameInput, 0, 'Big', false)

function play() { 
    const number = Math.floor(Math.random() * 3)

    if (number === 0) {
        player.gotHit()
    } else if (number === 1) {
        player.gotPowerup()
    } else {player.addCoin()}

    player.print()
    // console.log("test")
    }
function endGame(){ 
    if(player.status === 'Dead'){
    clearInterval(intervalID)
}else {
    play()
}}
const intervalID = setInterval(endGame, 2000);
