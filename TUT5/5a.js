const obj = {
    name: "Mykhailo",
    surname: 'Romanchuk',
    age: 20,
    changeName: (string) => obj.name = string,
    showFullName: () => `${obj.name} ${obj.surname}`,
    showAge: () => obj.age++
}

const showProperties = obj => Object.keys(obj).forEach(element => console.log(`Name ${element}, type : ${typeof (obj[element])}`));
showProperties(obj);