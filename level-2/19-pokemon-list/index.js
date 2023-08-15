const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        handleData(data.objects[0].pokemon); 
    }
};

function handleData(data) {
        const pokemonNames = data.map( pokemon => {
            const h1 = document.createElement('h1')
            h1.textContent = pokemon.name
            document.body.appendChild(h1) 
        })
}