// Symbol is a primitive type for unique identifiers.
// Symbols are skipped by for…in
// Object.keys(user) also ignores them.
let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 123
};

for (let key in user) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log( "Direct: " + user[id] ); // Direct: 123