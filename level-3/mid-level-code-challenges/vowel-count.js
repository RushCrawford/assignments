const input = 'HEllo, World!';

//spread input string into an array
const vowelCount = (word) => {
    let stringArray = [...word.toLowerCase()];    
    let vowel = 0                   //declare counter

    //count vowels
    stringArray.map(letter => {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowel++
        } 
    })
    console.log(vowel)
}

vowelCount(input)