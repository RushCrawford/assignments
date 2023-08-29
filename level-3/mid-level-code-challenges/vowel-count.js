const input = 'Hello, World! Its me Rush!';

const vowelCount = (word) => {
    let stringArray = [...word];    //spread string into an array
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