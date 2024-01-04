const { v4:uuidv4 } = require('uuid')

const data = {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4(),
}