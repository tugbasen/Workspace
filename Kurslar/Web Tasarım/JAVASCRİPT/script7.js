// Arrays
let names = ["arda", "kerem","aslı","mert"];
let years = [1990,2630,2000,2010];
let mix = ["arda", "yılmaz",1990,null,undefined, ["programlama","futbol"]];

console.log(names);
console.log(typeof names);
console.log(years);
console.log(mix);


// get array item

console.log(names[0]);

// set array item

names[0]="tugba";
console.log(names);

names[names.length]="mehmet"
console.log(names);

// add item

names.push("eda");
console.log(names);

names.unshift("eda");
console.log(names);

// remove item

//years.pop();
console.log(years);
years.shift();
console.log(years);

// indexOf

let index= names.indexOf("kerem");
console.log("index :" + index);

names.reverse();
console.log(names);

years.sort();
console.log(years);

names.sort();
console.log(names);

let veri = names.concat(years);
console.log(veri);

names.splice(2,0,"ahmet")
console.log(names);

names.splice(2,1,"selin")
console.log(names);