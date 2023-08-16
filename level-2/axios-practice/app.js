axios.get('https://api.vschool.io/rush/todo')   //my attempt at adding a .map
    .then(response => {
        console.log(response.data)
        response.data.map(todo => { 
            const {title, description} = todo

            const h1 = document.createElement('h1')
            h1.textContent = title  

            const h3 = document.createElement('h3')
            h3.textContent = description

            document.body.appendChild(h1);
            document.body.appendChild(h3);}
        )
    })
    .catch(error => {
        console.log(error)
});

// const newTodo = {
//     title: 'Find a Bubbling Candle',
//     description: 'Its actually called a Babylon Candle and they are very rare.',
//     imgUrl: 'https://i.pinimg.com/736x/80/41/40/8041400275c1223cb0815d8ab1535ac8.jpg'
// }

// axios.post('https://api.vschool.io/rush/todo', newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))




//   axios.delete('https://api.vschool.io/rush/todo/64dc194678fe452c1149f436')
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error))


