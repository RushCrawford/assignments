const axios = require("axios");
axios.get('https://api.vschool.io/rush/todo')
    .then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });