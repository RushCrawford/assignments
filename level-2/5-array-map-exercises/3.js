//3) Capitalize the first letter of each name and make the rest of the characters lowercase
    let names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
    let capitalizeNames = names.map(name => {
        const a = name.charAt(0).toUpperCase(); 
        const b = name.slice(1).toLocaleLowerCase(); 
        return a + b
    })
    console.log(capitalizeNames); 
