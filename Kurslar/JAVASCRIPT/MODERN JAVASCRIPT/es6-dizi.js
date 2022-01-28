
//Arrays in ES6
const boxes = document.querySelectorAll('.box');


//ES5
 let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.array.forEach(function(box){
//     box.style.backgroundColor = 'green';
// });


//ES6
// Array.from(boxes).forEach(box=> box.style.backgroundColor = 'green');

//ES5
// for(let i=0;i<boxesES5.length;i++){
//     console.log(boxesES5[i]);
//     if(boxesES5[i].className =='box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "ı am changed";
//     boxesES5[i].style.backgroundcolor = 'green';
    
// }


//ES6

// var boxesES6=Array.from(boxes);
// console.log(boxesES6)


// for(let box of boxesES6){
//     if(box.className=='box blue'){
//         continue;
//     }box.textContent='ım changed';
//     box.style.backgroundColor='blue';
// }

// console.log(boxesES5);



//From
// let arr = Array.from('modern javascript');
// console.log(arr);


const products = [
    {name:'samsung s8',price:3000},
    {name:'samsung s8',price:3000},
    {name:'samsung s7',price:2000},
    {name:'samsung s6',price:1000},
]

console.log(Array.from(products,prd => prd.name=='samsung s8'));

console.log(products.find(prd=>prd.name='samsung s8'));

console.log(products.filter(prd=> prd.name=='samsung s8'));


console.log(products.findIndex(prd=> prd.price==2000));

let numbers = ['a','b','c'];
let entries = numbers.entries();

for(let i of entries){
    console.log(i);
}

let keys = numbers.keys();
for (let i of keys){
    console.log(i);
}

let values = numbers.values();
for(let i of values){
    console.log(i);
}


















