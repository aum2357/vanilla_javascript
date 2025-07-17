/*
The optional chaining ?. , ?.() , ?.[] is a safe way to access  object properties,
even if they don’t exist.
if you access them conventionally you'll get an error
 */
let user = {}; // a user without "address" property

console.log(user?.address?.street); // undefined
console.log(user.address.street); // Error!

let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method) otherwise an error

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

console.log(user1?.[key] ); // John
console.log(user2?.[key] ); // undefined ,otherwise error