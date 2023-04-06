var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
vegetables.shift()
var oIndex = fruit.indexOf('orange')
fruit.push(oIndex)
var vLength = vegetables.length
vegetables.push(vLength)
var foods = fruit.concat(vegetables)
foods.splice(4,2)
foods.reverse()
foods.join("")



console.log(foods)
