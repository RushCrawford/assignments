const todoForm = document.todoform
const todoList = document.getElementById('todo-list')

getData = () => {
    axios.get('https://api.vschool.io/rush/todo')
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}


listData = (todoArray) => {
    todoArray.map(todo => {
        const {title, imgUrl} = todo;

        const liTitle = document.createElement('li');
            liTitle.textContent = title;

        const img = document.createElement('img');
            img.src = imgUrl;
            img.style.height = '150px';
            img.style.width = '200px';

        todoList.appendChild(liTitle)
        todoList.appendChild(img)
    })
}

getData()


// axios.get('https://api.vschool.io/rush/todo')   //get request to display all items
//     .then(response => {
//         response.data.map(todo => { 

//             const {title, description, price, imgUrl} = todo

            // const liTitle = document.createElement('li')
            // liTitle.textContent = title  

//             const h3 = document.createElement('h3')
//             h3.textContent = description

//             const priceH3 = document.createElement('h3')
//             priceH3.textContent = price

            // const img = document.createElement('img')
            // img.src = imgUrl;
            // img.style.height = '150px';
            // img.style.width = '200px';

//             todoList.appendChild(liTitle);
//             // todoList.appendChild(h3);
//             // todoList.appendChild(priceH3);
//             img.value !== '' && todoList.appendChild(img);     //attempt at if no img dont display anything

//         })
//     })
//     .catch(error => {
//         console.log(error)
//     });

todoForm.addEventListener('submit', function(event){    //submit event to add new todo items
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price.value
    }

    axios.post('https://api.vschool.io/rush/todo', newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

        todoForm.title.value = ''
        todoForm.description.value = ''
        todoForm.imgUrl.value = ''
        todoForm.price.value = ''

})

todoForm.delete.addEventListener('submit', function(event){     //delete button
    event.preventDefault()
    axios.delete('https://api.vschool.io/rush/todo/64dc194678fe452c1149f436')   //make url dynamic
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})