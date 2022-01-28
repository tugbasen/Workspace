// STRINGS
const firstname = "tugba";
const lastname = "sen";
const age = "22"
let hobbies="formula1 sinema spor kitap yazılım"

let veri;

// String birleştirme

veri = firstname+" "+lastname
veri = "tugba";
veri += " sen"

veri = 'Benim adım ' + firstname +' '+ lastname +' yaşım '+ age +' ve istanbul\'da yaşıyorum.';

veri = firstname.concat(' ',lastname);

veri = veri.toUpperCase();
veri = veri.toLowerCase();
//veri= veri.substring(3,7);
//veri =veri.slice(1,8);

//veri = veri.indexOf("t");

//veri = veri.replace("tugba","emre")
//veri = veri.length;

veri = hobbies.split(' ')



console.log(veri);
console.log(typeof veri);