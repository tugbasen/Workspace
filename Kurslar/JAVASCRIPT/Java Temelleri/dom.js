// let val;

// val = window.document;
// val = document.all;
// val = document.all[10];
// val = document.head;
// val = document.anchors;
// val = document.URL;
// val = document.forms;
// val = document.forms[0].id;

// console.log(val);


// SELECT ELEMENTS


// **Single Elements
// document.getElementById()

// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// // val = val.id;
// // val = val.className;

// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontWeight='bold';
// // val.style.display='none';
// val =document.getElementById('header').innerText='my todo ap';
// val =document.getElementById('header').innerHTML='<b>my todo ap</b>';


// console.log(val);


// // document.querySelector()

// console.log(document.querySelector('#header'));

// console.log(document.querySelector('.card-header'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('div'));
// document.querySelector('li').style.color='red';
// document.querySelector('li:last-child').style.color='blue';
// document.querySelector('li:nth-child(2)').style.color='yellow';
// document.querySelector('li:nth-child(3').textContent='task item';

// // document.querySelector('li').className=' list-group-item list-group-item-primary';
// document.querySelector('li').classList.add('active');


// **Multiple Elements

// class name
//document.getElementByClassName()

//  let val;


// val = document.getElementsByClassName('list-group-item');

// val = document.getElementsByClassName('list-group-item')[0];

//val=val[2];

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i = 0;i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }



// document.getElementByTagName()

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list');
// val = val.getElementsByTagName('a');


// document.querySelectorAll()

// val = document.querySelectorAll('li');

// val.forEach(function(item,index){
//     item.textContent=`${index} - hello`
// });

// val = document.querySelectorAll('li:nth-child(even)');


// val.forEach(function(item){
//     item.style.background='#ccc';
// });

// console.log(val);


// Creating Element

//create element

// const li = document.createElement('li');

// // add class

// li.className='list-group-item list-group-item-secondary';


// // attribute
// li.setAttribute('title', 'new item');
// li.setAttribute('data-id', '5');

// // text node

// const text = document.createTextNode('new item');
// li.appendChild(text);
// const a = document.createElement('a');
// a.setAttribute('href','#');
// a.className=('delete-item-float-right');
// a.innerHTML='<i class="fas fa-times"></i>';


// // append a to li
// li.appendChild(a);

// //append li to ul

// document.querySelector('#task-list').appendChild(li);

// console.log(li);

const tasklist = document.querySelector('#task-list');

// **removing element

// tasklist.remove();

// tasklist.childNodes[1].remove();

// tasklist.children[0].remove();

//tasklist.removeChild(tasklist.children[3]);


// ** removing attribute

// tasklist.children[0].removeAttribute('class');

// for(let i =0;i<tasklist.children.length;i++){
//     tasklist.children[i].removeAttribute('class');
// }

// ** Replacing Elements

// const cardHeader = document.querySelector('.card-header');


// console.log(cardHeader);

// // create element

// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('my list'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);



//  **Classes 

let val;


link = tasklist.children[0].children[0];

val = link.classNAme;
val = link.classList;
// val = link.classList[0];
// val = link.classList[1];


link.classList.add('new');
link.classList.remove('new');


// Attributes
val = link.getAttribute('data-id');
val = link.getAttribute('href');
val = link.setAttribute('href','http://sadikturan.com');

val = link.hasAttribute('href');




console.log(val);












console.log(tasklist);




































