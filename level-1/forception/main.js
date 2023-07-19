var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
  var arrays = []

  for (var i = 0; i < people.length; i++) {
    arrays.push(people[i])
    for (var j = 0; j < alphabet.length; j++) {
      var upperCase = alphabet.toUpperCase()
      var split = upperCase.split("")
      arrays.push(split[j])
      console.log(split)
    }
  }
    console.log(arrays, "this one")
}
forception(people, alphabet)
