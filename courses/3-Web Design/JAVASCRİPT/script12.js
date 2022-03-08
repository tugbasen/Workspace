// Dizi ve ObjelerdeDöngü Kullanımı

let citys=["istanbul","ankara","izmir","eskişehir","bursa"];
let users=[
    {firstName: "aslı", lastName:"yılmaz"},
    {firstName: "kerem", lastName:"bilgin"},
    {firstName: "tolga", lastName:"mertoglu"},
    {firstName: "selin", lastName:"şahin"},
]

// // arrays
// for (let i=0;i<citys.length;i++){
//     console.log(citys[i]);
// }

// // for-in metodu
// for(let i in citys){
//     console.log(`index: ${i} value: ${citys[i]}`);
// }

// citys.forEach(function(item){
//     console.log(item);

// })

// for (let i=0; i<users.length; i++){
//     console.log(users[i].firstName)
// }

// for (let i in users){
//     console.log(`index: ${i} value: ${users[i].lastName}`);
// }

// // map : returns an array
// let veri = users.map(function(item){
//     return item.firstName + " "+ item.lastName;
// });
// console.log(veri);

let numbers = [1,2,3,4,5,6,12];
let num= numbers.map(function(n){
return n*n;
});
console.log(num);