var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

const deletePerson = (name) => {
    return people.filter(value => name.toLowerCase() !== value.toLowerCase());
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
