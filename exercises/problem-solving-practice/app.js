let arr = [4, 5, 6, 7, 8, 9, 10, 87];
temp = 0;

arr.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});

console.log(`The largest number in the array: ${temp}`);


