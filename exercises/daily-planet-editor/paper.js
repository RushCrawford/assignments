/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins(isKryptonitePresent, enemyName)
{
if (isKryptonitePresent)
{
    return "Superman beats " +enemyName+ ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";
}
    }

for (var i = 0; i < enemies.length; i++)

    var kryptonite {
    if (i % 2 === 0) 
    {
        isKryptonitePresent = true;
    } else{
        isKryptonitePresent = false;
    }
    console.log(whoWins(isKryptonitePresent, enemies[i]));
}

function hotnessScale ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return math.floor((math.random()*10)+1);
}

consol.log( hotnessScale ()) ;

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");}}
