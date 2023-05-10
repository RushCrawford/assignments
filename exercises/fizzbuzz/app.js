let array = []
let fizzBuzzCount = 0
let fizzCount = 0
let buzzCount = 0

for (var i = 0; i < 101; i++ ){  
   array.push(i) 
   if ((i % 3 === 0) && (i % 5 === 0)) {
    fizzBuzzCount++
    console.log('fizzbuzz')
   } else if ((i % 3 === 0) && (i % 5 != 0)) {
    fizzCount++
    console.log('fizz')
   } else if ((i % 5 === 0) && (i % 3 != 0)) {
    buzzCount++
    console.log('buzz')
   } 

}

/*for (var i = 0; i < array.length; i++){
    if (i % 3 === 0){
        console.log(i)
    }
}*/
 
