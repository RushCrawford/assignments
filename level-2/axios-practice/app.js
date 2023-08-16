const newTodo = {
    title: 'Find a Bubbling Candle',
    description: 'Its actually called a Babylon Candle and they are very rare.',
    imgUrl: 'https://i.pinimg.com/736x/80/41/40/8041400275c1223cb0815d8ab1535ac8.jpg'
}

axios.post('https://api.vschool.io/rush/todo', newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

axios.get('https://api.vschool.io/rush/todo')
    .then(response => {
        const {title, description} = response.data[0]
        const h1 = document.createElement('h1')
        const h1Des = document.createElement('h1')
        h1.textContent = title  
        h1Des.textContent = description
        document.body.appendChild(h1, h1Des);
        document.body.appendChild(h1Des);
  }).catch(error => {
    console.log(error)
  });

