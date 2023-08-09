const readline = require('readline-sync');

const randomNumber = (min, max) => {return Math.random() * (max - min) + min;}

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
        console.log(`Name: ${this.name}
Total Coins: ${this.totalCoins} 
Status: ${this.status} 
Has Star: ${this.hasStar}`)}
}
const player = new Player('Mario', 0, 'Small', false)

// While (player.stater != 'Dead'){

// }