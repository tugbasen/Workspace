// ES5 - ES6 kullanımları
/*
let welcomeEs5=function(){
    console.log(welcomeEs5);
}

welcomeEs5();

let welcomeEs6 = () => {
    console.log('hello from Es6');
}
welcomeEs6()

let multiplyEs5= function(x,y){
    return x*y;
}
console.log(multiplyEs5(10,5));

//multiplyEs6
// let multiplyEs6=(x,y)=> {return x*y};
let multiplyEs6=(x,y)=>x*y;

console.log(multiplyEs6(5,5));

let splitEs5 = function(text){
    return text.split(' ');
}
console.log(splitEs5('modern javascript kursu'));


let splitEs6 = text => text.split(' ');
console.log(splitEs6('modern javascript kursu'))

let getProductEs5=function(id,name){
    return {
        id:id,
        name:name
    }
}
console.log(getProductEs5('1','samsung s8'));


let getProductEs6=(id,name)=>(
    {
        id:id,
        name:name
    }
)

console.log(getProductEs6('1','iphone11'));


const phones=[
    {name:'iphone 8',price:3000},
    {name:'iphone 7',price:2000},
    {name:'iphone 6',price:1000},
    {name:'iphone 5',price:2500}
]
let priceEs5=phones.map(function(phone){
    return phone.price;
});
console.log(priceEs5);


let priceEs6=phones.map(phone=>phone.price);
console.log(priceEs6);

const arr=[1,2,3,4,6,10,50,65,79];
let eventEs5=arr.filter(function(a){
    return a%2==0;
});
console.log(eventEs5);


let eventEs6=arr.filter(a=>a%1==0);
console.log(eventEs6);
*/

/*************************** */

//ES5 
/*
let list={
    category:'phone',
    names:['iphone8','samsung s8','iphone7'],
    call: function(){
        var self=this;
        this.names.map(function(name){
            console.log(`${self.category}+${name}`);
        });
    }
}

*/

//Es6
/*
let list={
    category:'phone',
    names:['iphone8','samsung s8','iphone7'],
    call: function(){
        this.names.map((name)=>{
            console.log(`${this.category} ${name}`);
        });
    }
}


list.call();
*/
//ES5
/*
function Game(){
    this.live=0;
    this.addLive=function(){
        var self=this;
        this.OneUp = setInterval(function(){
            console.log(++self.live);
        },1000);
    }
}
*/

//ES6
/*
function Game(){
    this.live=0;
    this.addLive=function(){
        this.OneUp = setInterval(()=>{
            console.log(++this.live);
        },1000);
    }
}


let player = new Game();
player.addLive();
*/

/********************* */


/*
function getTotal(a,b,c){
    return a+b+c;
}
console.log(getTotal(10,20,30));

let numbers=[10,20,30];

//ES5
console.log(getTotal.apply(null,numbers));

//ES6
console.log(getTotal(...numbers));

let arr1=['two','three'];
let arr2=['one','four','five'];
let arr3=['one',...arr1,'four','five'];

//arr1.unshift(...arr2);

console.log(arr3)

let h1=document.querySelector('h1');
let divs = document.querySelectorAll('div');

let tags=[h1,...divs];

tags.forEach(tag=>tag.style.color='red');

console.log(tags);
*/

//ES5
/*
function sumEs5(){
    let arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    let result=0;
    arr.forEach(function(item){
        result+=item;
    });
    return result;
}
console.log(sumEs5(10,20,30));

//ES6

function sumEs6(...arr){
    let result=0;
    arr.forEach(item=>result+=item);
    return result;
}
console.log(sumEs6(10,20,30))
*/
/************************* */
/*
var a,b,rest;
//a=10;
//b=20;
[a,b]= [10,20];
console.log(a);

[a,b,...rest]=[10,20,30,40,50,60];
console.log(a);
console.log(b);
console.log(rest);

({a,b}={a:10,b:20});
console.log(a,b);

({a,b,...rest}={a:10,b:20,c:30,d:40});
console.log(a,b,rest);
*/

//const arrConfig = ['localhost', '8080', '900'];
//ES5
// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeout = arrConfig[2];
//console.log(server,port,timeout)

//ES6
// const [server,port,timeout] = arrConfig;
// console.log(server,port,timeout);

/*
const objConfig={
    server:'localhost',
    port:'8080',
}
// var server=objConfig.server;
// var port=objConfig.port;
// var timeout=objConfig.timeout;

// const {server,port,timeout}=objConfig;

// console.log(server,port,server);

// let {timeout:t}=objConfig;

// console.log(t);

// let {server,port,timeout=900}=objConfig;
// console.log(server,port,timeout)

const days=['monday','tuesday','wednesday','thursday','friday'];
const [,,wed,,fri]=days;
console.log(wed,fri);
*/

//Es5

// const boxes = document.querySelectorAll('.box');

// let boxesEs5 = Array.prototype.slice.call(boxes);
/*
boxesEs5.forEach(function(box){
    box.style.backgroundColor='green';
});
*/

//Es6

//Array.from(boxes).forEach(box=>box.style.backgroundColor='purple');
/*
//Es5
for (let i = 0; i < boxesEs5.length; i++) {
    console.log(boxesEs5[i]);
    if (boxesEs5[i].className == 'box blue') {
        break;
    }
    boxesEs5[i].textContent = 'i am changed';
    boxesEs5[i].style.backgroundColor = 'blue';

}
*/

//Es6
/*
var boxesEs6=Array.from(boxes);

for(let box of boxesEs6){
    if(box.className=='box blue'){
        continue;
    }
    box.textContent='i am changed';
    box.style.backgroundColor='blue'
}
*/


//let arr= Array.from('modern javascript');

/*
const products=[
    {name:'samsung s8',price:3000},
    {name:'samsung s7',price:2000},
    {name:'samsung s6',price:1000},
]

console.log(Array.from(products,prd=>prd.price))
console.log(Array.from(products,prd=>prd.name=='samsung s8'));
console.log(products.find(prd=>prd.name=='samsung s8'));
console.log(products.filter(prd=>prd.name=='samsung s8'));

let numbers=['a','b','c'];
let entires=numbers.entries();

for(let i of entires){
    console.log(i);
}

let keys=numbers.keys();
for(let i of keys){
    console.log(i)
}

let values=numbers.values();
for(let i of values){
    console.log(i)
}
*/
/*
let val;

const numbers = new Map();
numbers.set(1, 'one');
numbers.set('2', 'two');
numbers.set(3, 'three');
numbers.set('four', 'four');

val = numbers;
val = numbers.get(1)
val = numbers.get('2')
val = numbers.get('four')
val = numbers.size;
val = numbers.has(1);
val = numbers.has(4);
val = numbers.has(3);
val = numbers.delete('four')
val = numbers.has('four')
//numbers.clear();


console.log(val);

for (var [key, value] of numbers.entries()) {
    console.log(key + ' = ' + value);
}

for (var key of numbers.keys()) {
    console.log(key);
}

for (var value of numbers.values()) {
    console.log(value);
}

numbers.forEach(function (key, value) {
    console.log(key + ' - ' + value)
})


var first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

var second = new Map([
    [4, 'four'],
    [5, 'five'],
]);

var merged = new Map([...first,...second]);

console.log(merged)
*/

/**************************** */
/*
let val;
var mySet=new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add('iki');
mySet.add('2');
mySet.add({a:1,b:2});

console.log(mySet);
*/

/*************** */
//Es5
/*
var PersonEs5= function(name,job,yearOfBirth){
    this.name=name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
}

PersonEs5.prototype.calculateAge=function(){
   return 2018-this.yearOfBirth;
}

var yigit= new PersonEs5('yiğit','student',2010);

console.log(yigit.calculateAge());
console.log(yigit)

//Es6
class PersonEs6{
    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job=job;
        this.yearOfBirth=yearOfBirth
    }

    calculateAge(){
        return 2018-this.yearOfBirth;
    }

    static sayHi(){
        console.log('hello there');
    }
}

let emel=new PersonEs6('emel','teacher',1989);
console.log(emel.calculateAge())
console.log(emel)
PersonEs6.sayHi();
*/
/*
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    static distance(a,b){
        const dx=a.x - b.x;
        const dy= a.y - b.y;

        return Math.hypot(dx,dy);
    }
}

const d1= new Point(10,10);
const d2= new Point(20,20);
console.log(Point.distance(d1,d2));
*/

/************************* */

//Es5
function PersonEs5(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

PersonEs5.prototype.sayHi=function(){
    return `hello there! i  am ${this.firstName} ${this.lastName}`
}

function CustomerEs5(firstName,lastName,phone,username){
    PersonEs5.call(this,firstName,lastName);
    this.phone=phone;
    this.username=username;
}

CustomerEs5.prototype=Object.create(PersonEs5.prototype);

var customer = new CustomerEs5('sena','turan','1346','senaturan');
console.log(customer.sayHi());

//Es6

class PersonEs6{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    sayHi(){
        return `hello i am ${this.firstName} ${this.lastName}`
    }
}

class CustomerEs6 extends PersonEs6{
    constructor(firstName,lastName,phone,username){
        super(firstName,lastName);
        this.phone=phone;
        this.username=username;
    }

    static getTotal(){
        return 1000;
    }
}

let customer1= new CustomerEs6('tuğba','şen','152302152','tugbasen');
console.log(customer1.sayHi())
console.log(CustomerEs6.getTotal())

