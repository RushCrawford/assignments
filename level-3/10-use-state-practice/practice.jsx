// // Pass in a new color of your choosing in place of the old one. 
// const [color, setColor] = useState("pink")

// setColor('yellow')


// // Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
// const [color, setColor] = useState("pink")

// setColor(prevColor => !prevColor)


// // Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.
// const [people, setPeople] = useState([
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}

// ])

// const newPerson = {
//     firstName: "Rush",
//     lastName: "Crawford"
// }


// setPeople(prevState => ({ ...prevState, newPerson }))


// // Change the following state-setting functions to use an implicit return
// 1
// const [colors, setColors] = setState(["pink", "blue"])

// setColors(prevColors => { [...prevColors, "green"] })

// 2
// const [countObject, setCountObject] = setState({
// 	count: 0
// })

// setCountObject(prevState => ({ count: prevState.count + 1 }))


// // Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.
// const [person, setPerson] = useState({
//     firstName: "John",
//     lastName: "Smith"
// })

// const updatedPerson = (prevState => ({
//     ...prevState,
//     age: 30
// }))

// setPerson(updatedPerson)


// // // What’s wrong with the following state update?
// // const [colors, setColors] = useState(["pink", "blue"])

// // setColors("green") //this overwrites the original array

// const [colors, setColors] = useState(["pink", "blue"])

// const addColor = (prevState => ([
//     ...prevState,
//     'green'
// ]))

// setColors(addColor)


