// Event Listeners


// const btn = document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('btnAddNewTask');

// btn.addEventListener('click', function(e){
//     console.log('btn clicked');

//     let val;

//     val = e;

//     val = e.target;
//     val = e.target.dispatchEvent;


//     console.log(val);

//     e.preventDefault();

// })


// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn.addEventListener('click',btnClick);

// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn 2 clicked');
// }





// Mouse Events

// const btn = document.querySelector('#btnDeleteAll');
// const ul = document.querySelector('#task-list');


//click event

// btn.addEventListener('click', eventHandler);
// ul.addEventListener('click', eventHandler);

// double-click
//btn.addEventListener('dblclick', eventHandler);

// mousedown
// btn.addEventListener('mousedown',eventHandler);
// //mouse up
// btn.addEventListener('mouseup',eventHandler);


// //mouseenter
// ul.addEventListener('mouseenter', eventHandler);

// //mouseleave
// ul.addEventListener('mouseleave', eventHandler);

// ///mouseover
// ul.addEventListener('mouseover', eventHandler);

// // mouseout
// ul.addEventListener('mouseout', eventHandler);

// mouse move
// const h5=document.querySelector('h5');

// ul.addEventListener('mousemove',eventHandler);


// function eventHandler(event){
//     console.log(`event type : ${event.type}`);

//     console.log(event);

//     h5.textContent=`mouse x: ${event.offsetX}
//     mouse y: ${event.offsetY}`;
// }



// Keyboard Events

// const input = document.querySelector('#txtTaskName');

// const form = document.querySelector('form');

// // input.addEventListener('keydown', eventHandler);
// // input.addEventListener('keyup', eventHandler);
// //input.addEventListener('keypress', eventHandler);
// //input.addEventListener('focus', eventHandler);
// // input.addEventListener('cut', eventHandler);
// // input.addEventListener('paste', eventHandler);
// //input.addEventListener('select', eventHandler);

// form.addEventListener('submit',eventHandler);


// function eventHandler(e) {
//     console.log('event type ' + e.type);
//     // console.log('hey code '+e.keyCode);
//     // console.log('value: '+e.target.value);

//    // e.target.style.backgroundColor = 'red';

//    e.preventDefault();

// }


// Event Bubbling

// const form = document.querySelector('form');
// const cardBody = document.querySelector('.card-body');
// const card = document.querySelector('.card');
// const container = document.querySelector('.container');

// form.addEventListener('click', function(e){
//     console.log('form');
//     e.stopPropagation();
// });

// cardBody.addEventListener('click', function(e){
//     console.log('card body');
//     e.stopPropagation();
// });

// card.addEventListener('click', function(e){
//     console.log('card');
//     e.stopPropagation();
// });

// form.addEventListener('click', function(e){
//     console.log('container');
//     e.stopPropagation();
// });

// Event Capturing

// form.addEventListener('click', function(e){
//     console.log('form');
//     e.stopPropagation();
// },true);

// cardBody.addEventListener('click', function(e){
//     console.log('card body');
//     e.stopPropagation();
// },true);

// card.addEventListener('click', function(e){
//     console.log('card');
//     e.stopPropagation();
// },true);

// container.addEventListener('click', function(e){
//     console.log('container');
//     e.stopPropagation();
// },true);


// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
//     item.addEventListener('click', function(e){
//         console.log(e.target);
//     })
// });


// const ul = document.querySelector('ul');
// ul.addEventListener('click', function(e){
//     if(e.target.className==='fas fa-times'){
//         console.log(e.target.parentElement.parentElement.remove());

//         e.preventDefault();

//     }
// });




//LOCAL STORAGE
let val;

// set item

const firstName = localStorage.setItem('firstName', 'sadık');

const lastName = localStorage.setItem('lastName', 'turan');
let hobbies = ['sinema', 'araba','gezmek'];


//get item

val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

//remove item

// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');


//clear
//localStorage.clear();

// set array to storage

localStorage.setItem('hobbies', JSON.stringify(hobbies));

val = JSON.parse(localStorage.getItem('hobbies'));



console.log(val);
console.log(localStorage);




//SESSION STORAGE

// const city = sessionStorage.setItem('city','kocaeli')

// const country = sessionStorage.setItem('country','Türkiye');




// console.log(sessionStorage);






