// Object Literals

// let firstName = "tugba";
// let lastName = "sen";

// let firstName = "tugba";
// let lastName = "sen";

// let tugba = ["tugba", "sen", 22];
// let emre = ["esra", "ilk", 40];

let veri;
let user = {
    userName: "tugba",
    firstName: "tugba",
    lastName: "sen",
    age: 22,
    hobbies: ["spor", "kitap okumak", "yazılım"],
    address: {
        city: "istanbul",
        country: "Türkiye",
        phone: "02545252",
    }
}

veri = user;
veri=user.firstName;
veri = user.hobbies.length;
veri=user.address.city;

console.log(veri);
console.log(typeof user);

