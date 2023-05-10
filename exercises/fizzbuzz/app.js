let array = []
let fizzBuzzCount = 0

for (var i = 0; i < 101; i++ ){  
   array.push(i) 
   if ((i % 3 === 0) && (i % 5 === 0)) {
    fizzBuzzCount++
    console.log('fizzbuzz')
   }
}

/*for (var i = 0; i < array.length; i++){
    if (i % 3 === 0){
        console.log(i)
    }
}*/
 
