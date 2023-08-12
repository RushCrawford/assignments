const xhr = new XMLHttpRequest;

xhr.open("GET", "https://api.vschool.io/pokemon",true)
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState === 400 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        return data

    }
}