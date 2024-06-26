// 1) Turn an array of numbers into a total of all the numbers
const numbers = [1,2,3]
    // const result = numbers.reduce((final, num) => final + num)
    // console.log(result)

// 2) Turn an array of numbers into a long string of all those numbers.
    // const result = numbers.reduce((final, num) => final + num,'')
    // console.log(result)

// 3) Turn an array of voter objects into a count of how many people voted
    let voters = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}
    ];
    // const result = voters.reduce((final, voter) => {voter.voted === true && final++; return final},0)
    // console.log(result)

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
    var wishlist = [
            { title: "Tesla Model S", price: 90000 },
            { title: "4 carat diamond ring", price: 45000 },     
            { title: "Fancy hacky Sack", price: 5 },
            { title: "Gold fidgit spinner", price: 2000 },
            { title: "A second Tesla Model S", price: 90000 }
        ];
    // const result = wishlist.reduce((final,wish) => final + wish.price,0)
    // console.log(result)

// 5) Given an array of arrays, flatten them into a single array
    var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ]
    // const result = arrays.reduce((final, array)=>{return final.concat(array)},[])
    // console.log(result)

// 6) Given an array of potential voters, return an object representing the results of the vote
    // const voteCount = voters.reduce(function(final, voter){
    //     if(voter.age < 26){
    //         final.numYoungPeople ++
    //     }  else if(voter.age > 25 && voter.age < 36){
    //         final.numMidPeople++
    //     } else if(voter.age > 35 && voter.age < 56){
    //         final.numOldPeople++
    //     } else {}
        
    //     if(voter.age < 26 && voter.voted === true){
    //         final.numYoungVotes++
    //     } else if(voter.age > 26 && voter.age < 36 && voter.voted === true){
    //         final.numMidVotes++
    //     } else if(voter.age > 35 && voter.age < 56 && voter.voted === true){
    //         final.numOldVotes++
    //     } else {}

    // return final
    // }, { numYoungVotes: 0,
    //     numYoungPeople: 0,
    //     numMidVotes: 0,
    //     numMidPeople: 0,
    //     numOldVotes: 0,
    //     numOldPeople: 0})

    //     console.log(voteCount)