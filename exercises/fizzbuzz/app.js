let fizzBuzzCount = 0
let fizzCount = 0
let buzzCount = 0

for (var i = 1; i <= 100; i++ ){  

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
   console.log(i)
}


 
