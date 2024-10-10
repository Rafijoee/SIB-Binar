const createPerson = function (person){
    fs.writeFileSync('person.json', JSON.stringify(person));
    return person;
}

const sabrina = createPerson({
    name: 'Sabrina',
    age: 22,
    address: 'Jakarta'
});


