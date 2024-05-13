"use strict";

// function printContact(name, address, city, state, zip) {
//     let myInfo = (
//         name: "Julien Ilboudo",
//         address: "123 Main Street",
//         city: "Newark",
//         state: "NJ",
//         zip: "12345",
//     );    
//     printContact(myInfo);    
// }


let myInfo = {
    name: "Julien Ilboudo",
    address: "123 Main Street",
    city: "Newark",
    state: "New Jersey",
    zip: "12345",
};

function printContact(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city + "," , contact.state, contact.zip);
}

printContact(myInfo);