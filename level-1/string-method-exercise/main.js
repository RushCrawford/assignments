//Write a function that takes a string as a parameter and returns the 
//same string in all capital letters followed by all lowercase letters.

let string = "hello"
    /*function cases (string){

    let upperCase = string.toUpperCase()
    console.log(upperCase,string)
    }
        cases(string)*/

//Write a function that takes a string as a parameter and returns a number 
//that is half the string's length, rounded down.

        /*let cut = string.slice(0,2.5)
        console.log(cut.length)*/
   
//Write a function that uses slice() and the other functions you've 
//written to return the first half of the given string.

    /*let slice = string.slice(0,3)
    console.log(slice)*/

    //Write a function that takes a string as a parameter and returns that 
    //string where the first half is capitalized, and the second half is lowercase.

    let frontSlice = string.slice(0,3)
    let upperCase = frontSlice.toUpperCase()
    let backSlice = string.slice(3)
    console.log(upperCase,backSlice)