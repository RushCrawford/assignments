let travelForm = document.travel

document.addEventListener("submit", function(event){
    event.preventDefault()
    const checkedInputs = []
    
    for(let i = 0; i < travelForm["dietary-restrictions"].length; i++){
        if(travelForm["dietary-restrictions"][i].checked){
            checkedInputs.push(travelForm["dietary-restrictions"][i].value)
        }
    }

    // let message = ["First Name: " + travelForm['first-name'].value, "Last Name: " + travelForm['last-name'].value, "Age: " + travelForm.age.value, "Gender: " + travelForm.gender.value, "Destination: " + travelForm.destination.value, "Dietary Restrictions: " + checkedInputs]

    let message = `First Name: ${travelForm['first-name'].value}\nLast Name: ${travelForm['last-name'].value}\nAge: ${travelForm.age.value}\nGender: ${travelForm.gender.value}\nDestination: ${travelForm.destination.value}\nDietary Restrictions: ${checkedInputs}`

    alert(
        message
        // "First Name: " + travelForm['first-name'].value,
        // "Last Name: " + travelForm['last-name'].value,
        // "Age: " + travelForm.age.value,
        // "Gender: " + travelForm.gender.value,
        // "Destination: " + travelForm.destination.value,
        // "Dietary Restrictions: " + checkedInputs,
    )
  });

