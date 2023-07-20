let travelForm = document.travel
// let firstName = travelForm["first-name"] 
// let lastName = travelForm["last-name"] 
// let age = travelForm.age
// let gender = travelForm.gender
// document.addEventListner ("submit", (event) => {
//     event.preventDefault()
//     console.log(travelForm['first-name'].value)
//     console.log(travelForm['last-name'].value)
//     console.log(travelForm.age.value)
//     console.log(travelForm.gender.value)
//     // console.log(travelForm.)
//     // console.log(travelForm.)
//     // console.log(travelForm.)
//     // console.log(travelForm.)
// })

document.addEventListener("submit", function(event){
    event.preventDefault()
        // console.log(travelForm.gender.value)
    // console.log(travelForm['last-name'])
    const checkedInputs = []
    
    for(let i = 0; i < travelForm["dietary-restrictions"].length; i++){
        if(travelForm["dietary-restrictions"][i].checked){
            checkedInputs.push(travelForm["dietary-restrictions"][i].value)
        }
    }
console.log(checkedInputs)
console.log(travelForm.destination.value)

  });

