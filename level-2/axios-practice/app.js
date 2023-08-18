const todoForm = document['todo-form']
const todoList = document.getElementById('todo-list')

//DISPLAYS TODO ITEMS ON PAGE
getData = () => {
    axios.get('https://api.vschool.io/rush/todo')
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}

listData = (todoArray) => {
    refreshList()
    todoArray.map(todo => {
        const {title, imgUrl} = todo;

        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';

        const liTitle = document.createElement('span');
            liTitle.textContent = title;

        const img = document.createElement('img');
            img.src = imgUrl;
            img.style.height = '150px';
            img.style.width = '200px';
  
        listItem.appendChild(checkbox)
        listItem.appendChild(liTitle)
        listItem.appendChild(img)

        todoList.appendChild(listItem)
    })
}

refreshList = () => {
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
}

getData()

//ADD NEW TODO's
todoForm.addEventListener('submit', function(event){    
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price.value
    }

    axios.post('https://api.vschool.io/rush/todo', newTodo)
        .then(res => getData())
        .catch(error => console.log(error))

        todoForm.title.value = ''
        todoForm.description.value = ''
        todoForm.imgUrl.value = ''
        todoForm.price.value = ''
})

todoForm.delete.addEventListener('submit', async function (event) {
    event.preventDefault();

    const listItemElements = todoList.getElementsByTagName('li'); // Get list items
    const checkboxes = document.querySelectorAll('.todo-checkbox'); // Get checkboxes

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            const todoId = checkboxes[i].getAttribute('data-todo-id'); // Assuming you have a data attribute for todo ID
            
            try {
                const response = await axios.delete(`https://api.vschool.io/rush/todo/${todoId}`);
                console.log(response.data);
                listItemElements[i].remove(); // Remove the list item from the DOM
            } catch (error) {
                console.log(error);
            }
        }
    }
});


// //DELETE TODO's
// todoForm.delete.addEventListener('submit', function(event){
//     event.preventDefault()

//     const removeTodo = axios.delete('https://api.vschool.io/rush/todo')
//                         .then(response => console.log(response.data))
//                         .catch(error => console.log(error))

//     //loop over list to check for checked condition true
//     todoList.map(todo => {
//     todo.checkbox === true && removeTodo    
//         } 
//     )
// })