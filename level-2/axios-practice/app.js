const todoForm = document.todoform

axios.get('https://api.vschool.io/rush/todo')   //get request to display all items
    .then(response => {
        response.data.map(todo => { 
            const {title, description, price, imgUrl} = todo

            const h1 = document.createElement('h1')
            h1.textContent = title  

            const h3 = document.createElement('h3')
            h3.textContent = description

            const priceH3 = document.createElement('h3')
            priceH3.textContent = price

            const img = document.createElement('img')
            img.src = imgUrl;
            img.style.height = '150px';
            img.style.width = '200px';

            document.body.appendChild(h1);
            document.body.appendChild(h3);
            document.body.appendChild(img);
            document.body.appendChild(priceH3);
        })
    })
    .catch(error => {
        console.log(error)
    });

todoForm.addEventListener('submit', function(event){    //submit event to add new todo items
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post('https://api.vschool.io/rush/todo', newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})

todoForm.delete.addEventListener('submit', function(event){
    event.preventDefault()
    axios.delete('https://api.vschool.io/rush/todo/64dc194678fe452c1149f436')   //make url dynamic
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})