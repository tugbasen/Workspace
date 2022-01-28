// Arrows Functions
let welcomeEs5 = function(){
    console.log('hello from ES5');
}

welcomeEs5();

// ES6

let welcomeES6 = ( ) =>{
    console.log('hello from ES6')
};

welcomeES6();


// with parametres 
let mutliplyES5 = function(x,y){
    return x*y;
}

console.log(mutliplyES5(10,5));

//Es6

// let mutliplyES6 = (x,y) => {return x*y};
 let mutliplyES6 = (x,y) =>  x*y;

console.log(mutliplyES6(5,6));

// Es5
let splitES5 = function(text){
    return text.split(' ');
}

console.log(splitES5('modern java'));

//Es6 
let splitES6 = text => text.split(' ');
console.log(splitES6('modern java'));

// object literals
let getProductEs5 = function(id,name){
    return{
        id : id,
        name : name,
    }
}

console.log(getProductEs5('1','samsung'))

//ES6

let getProductEs6 = (id,name) => (
    {
        id :id,
        name : name,
    }
);

console.log(getProductEs6('1','iphone'));


const phones =[
    {name : 'iphone 8', price:3000},
    {name : 'iphone 7', price:2000},
    {name : 'iphone 6', price:1000},
    {name : 'iphone 5', price:2500}
]


//Es5
let pricesES5 = phones.map(function(phone){
    return phone.price;
});

console.log(pricesES5);

//ES6

let pricesES6 = phones.map(phone => phone.price);
console.log(pricesES6);

//Es5

const arr =[1,2,3,6,10,20,30,50,55,61,79];
let evenES5 = arr.filter(function(a){
    return a%2==0;
});
console.log(evenES5);


// ES6

let evenEs6 = arr.filter(a=>a%2==0);
console.log(evenEs6);












