const readline = require('readline-sync');

const randomNumber = (min, max) => {return Math.random() * (max - min) + min;}

class Player {
    constructor (name,totalCoins,status,hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this. hasStar = hasStar
    }
    setName = (namePicked) => {namePicked = this.name}

    // gotHit = () => {this.status === 'Powered Up' ? this.status = 'Big': this.status === 'Big' ? this.status = 'Small': this.status 'Dead'}

    gotHit(){
        if(this.status === 'Powered Up'){
            this.status = 'Big'
        } else if(this.status === 'Big'){
            this.status = 'Small'
        } else {this.status = 'Dead'}
    }

}
const player = new Player('Mario', 10, 'Powered Up', true)
console.log(player.gotHit())
        // statuses.map(status => {
        //     return [status]
        // })
// - Create a class for a player that has the following properties:
// - `name` of type `String`
// - `totalCoins` of type `Number`
// - `status` of type `String` (options are `Powered Up`, `Big`,`Small`, and `Dead`)
// - `hasStar` of type `Boolean` (Is a star active?)
// - `setName` of type `function` - Has a parameter called `namePicked` where you pass in "Mario" or "Luigi". Sets `name` to "Mario" or "Luigi".


// - `gotHit` of type `function` - this is called whenever the player is hit by an enemy. `gotHit()` will set the `status` property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)


// - `gotPowerup` of type `function` - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
// - `addCoin` of `function` - adds a coin to totalCoins
// - `print` of type `function` - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
//     - Name: Luigi,
//     - Status: Small, etc, etc