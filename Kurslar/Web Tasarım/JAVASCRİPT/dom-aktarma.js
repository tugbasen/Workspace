// Todo ekleme

// Eleman Seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];



//load items
loadItems();


eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener("submit", addNewItem);
    //delete an item
    taskList.addEventListener("click", deleteItem);
    // delete all item
    btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems() {
    items.forEach(function(item){
        creatItem(item);
    })


}

function creatItem(text) {
    // li oluşturma
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary"
    li.appendChild(document.createTextNode(input.text));

    // a oluşturmak
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';


    li.appendChild(a);

    taskList.appendChild(li);
}


function addNewItem(e) {
    if (input.value === '') {
        alert("add new item");
        console.log("submit");
    }

    //creare item
    creatItem(input.value);


    input.value = "";





    e.preventDefault();

}

// Eleman silme
function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("silmek istediğinize emin misiniz?")) {
            //console.log(e.target);
            e.target.parentElement.parentElement.remove();



        }
    }
    e.preventDefault();


}

//tüm elemanlaı silme

function deleteAllItems(e) {
    // if(confirm("tüm elemanları silmek istediğinize emin misiniz?")){
    //     taskList.childNodes.forEach(function(item){
    //         //console.log(item);
    //         if(item.nodeType===1){
    //             item.remove();
    //         }
    //     })
    // }

    taskList.innerHTML = "";
}