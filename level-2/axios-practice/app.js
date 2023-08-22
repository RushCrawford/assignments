const todoForm = document['todo-form']
const todoList = document.getElementById('todo-list')


// DISPLAYS TODO ITEMS ON PAGE
getData = () => {
    axios.get('https://api.vschool.io/rush/todo')
    .then(res => {listData(res.data);console.log(res.data)})
    .catch(err => console.log(err))
}

listData = (todoArray) => {
    refreshList();
    todoArray.map(todo => {
        const { title, imgUrl, _id, completed } = todo;

        let todoId = _id;
        let complete = completed;

        const listItem = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';

        checkbox.addEventListener('change', async () => {
            checkbox = !complete;
            await updateTodoCompletion(todoId, complete);
            refreshList();
        })

        checkbox.checked = complete;

        const liTitle = document.createElement('span');
        liTitle.textContent = title;

        const img = document.createElement('img');
        img.src = imgUrl;
        img.style.height = '150px';
        img.style.width = '200px';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTodo(todoId); // Set the onclick function correctly

        listItem.appendChild(checkbox);
        listItem.appendChild(deleteButton);
        listItem.appendChild(liTitle);
        imgUrl !== '' && listItem.appendChild(img);
        
        todoList.appendChild(listItem);
    });
};

refreshList = () => {
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
}

getData()

// ADD NEW TODO's
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

// DELETE TODO's
deleteTodo = (todoId) => {
    const removeTodo = axios.delete(`https://api.vschool.io/rush/todo/${todoId}`)
                    .then(res => getData())
                    .catch(error => console.log(error))
}

// COMPLETE TOGGLE

updateTodoCompletion = (todoId) => {
    console.log("complete")
    let update = {completed: true}
        axios.put(`https://api.vschool.io/rush/todo/${todoId}`, update)
        .then(res => getData())
        .catch(err => console.log(err))
}




// todoForm.delete.addEventListener('submit', async function (event) {
//     event.preventDefault();
//     console.log('delete button')
//     const listItemElements = todoList.getElementsByTagName('li'); // Gets list items
//     const checkboxes = document.querySelectorAll('todo-checkbox'); // Gets checkboxes

//     for (let i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             const todoId = checkboxes[i].getAttribute('data-todo-id'); // HOW TO GRAB THE ID
            
//             try {
//                 const response = await axios.delete(`https://api.vschool.io/rush/todo/${todoId}`);
//                 console.log(response.data);
//                 listItemElements[i].remove(); // Removes from the DOM
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }
// });


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