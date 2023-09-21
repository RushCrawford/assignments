// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers[j]]
            }
        }
    }
    return []
}

console.log(findSumOfTwo([7, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]