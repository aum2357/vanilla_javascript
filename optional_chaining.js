let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin


let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

console.log( user1?.[key] ); // John