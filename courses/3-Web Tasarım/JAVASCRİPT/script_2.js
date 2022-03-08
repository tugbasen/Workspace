// // Elementleri Üzerinde Gezinme

// let value;
// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector("list-group-item:nth-child(2");
// const card = document.querySelectorAll(".card");



// value = todoListe;
// value = todo;
// value = card;


// // Child Nodes

// value = todoList.childNodes;
// value = todoList.children;
// value = todoList.children(0);
// value = todoList.children[1].textContent="değişen madde";
// value = card;
// value = card.children;

// value = card.children[1].children[0].textContent="merhaba";

// value = todoList;
// value = todoList.children[0];
// value = todoList.firstChild;
// value = todoList.children.length;
// value = todoList.childElementCount;

// value = card;
// value = card.parentElement;
// value = card.parentElement.parentElement;

// value = todo;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;


// console.log(value);



// Element Oluşturma
const li = document.createElement("li");

// add class

li.className("list-group- item list-group- item-secondary");

// attribute

li.setAttribute("title", "new item");
li.setAttribute("data-id", "5");

const text = document.createTextNode("new item");
li.appendChild(text);




console.log(li);











