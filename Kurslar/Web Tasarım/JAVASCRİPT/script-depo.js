// Tarayıcı Depolama Alanları


// Session Storage


// const add = document.querySelectorAll("#add");
// const del = document.querySelectorAll("£delete");
// const clear = document.querySelectorAll("#clear");


// const addkey = document.querySelectorAll("#addkey");
// const addvalue = document.querySelectorAll("#addvalue");
// const deletekey = document.querySelectorAll("#deletekey");

// add.addEventListener("click", addItem);
// del.addEventListener("click", deleteItem);
// clear.addEventListener("click", clearItem);

// function addItem(e){
//     sessionStorage.setItem(addkey.value, addvalue.value);
// }

// function deleteItem(e){
//     sessionStorage.removeItem(deletekey.value);
// }

// function clearItem(e){
//     sessionStorage.clear();
// }



// Local Stroge

// SetItem

localStorage.setItem("programlama", "javascript");
localStorage.setItem("bilgisayar", 7000)

// get Item

// const value = localStorage.getItem("bilgisayar");


// console.log(value);

// console.log(typeof value);

// clear Local stroge

// localStorage.clear();

//  console.log(localStorage.getItem("klavyye"));

if (localStorage.getItem("bilgisayar") === null) {
    ;
    console.log("sogulanan veri bulunamadı");
}else{
    console.log("sorgulanan veri bulundu");
}