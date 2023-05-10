const form = document.getElementById("airline-form");
const submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];

    form.elements['vegan'].checked ? diet.push(document.getElementById('vegan').value)
    :
    form.elements['gluten'].checked ? diet.push(document.getElementById('gluten').value)
    :
    form.elements['paleo'].checked && diet.push(document.getElementById('paleo').value)
    

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);