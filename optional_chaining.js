// ?.    -> with properties of objects
// ?.()  -> with methods
// ?.[]  -> with keys
// The optional chaining ?. is a safe way to access object properties,methods,keys
// even if property,method ,key doesn’t exist.

// in such cases if you access the keys,properties or methods as usual you'll get error
// but by using this you'll get undefined that's okay.
let user = {};
console.log(user?.address?.street);// undefined otherwise error

let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

console.log( user1?.[key] ); // John
console.log( user2?.[key] ); // undefined
// console.log(user2.[key]); // error