//Function Declarations

// function sum(a, b) {
//     var c = a + b;
//     return c;
// }
// console.log(sum(10, 20));

// Function Expressions

// const sum = function (a, b) {

//     if (typeof a === 'undefined'){a=0;}

//     if (typeof b === 'undefined'){ b=0;}

//     var c = a + b;
//     return c;

// }


//ES6 Default Parameters

// const sum = function (a=0, b=0) {

//     var c = a + b;
//     return c;

// }

// function sumAll(){
//     var total = 0;
//     for(let i=0;i<arguments.length;i++){
//         total+=arguments[i];
//     }
//     return total;
// }


// console.log(sum(10,30));
// console.log(sum(10));  //NaN
// console.log(sum(10,30,40,50));
// console.log(sumAll(10,20,30,10,30));



// Demo : Function

// var hesapA = {
//     ad : 'sena turan',
//     hesapNo : '123456789',
//     bakiye : 2000,
//     ekHesap : 1000
// }

// var hesapB = {
//     ad : 'emel turan',
//     hesapNo : '1234567',
//     bakiye : 3000,
//     ekHesap : 2000
// }

// function paraCek(hesap,miktar){
//     console.log(`merhaba ${hesap.ad}`);

//     if (hesap.bakiye>=miktar){
//         hesap.bakiye = hesap.bakiye -miktar;
//         console.log('paranızı alabilirsiniz');

//         var bakiye = hesap.bakiye;
//         var ekHesap = miktar - bakiye;
//         hesap.bakiye = 0;
//         hesap.ekHesap = hesap.ekHesap - ekHesap;

//     }else{
//         var toplam = hesap.bakiye + hesap.ekHesap;
//         if(toplam>=miktar){
//             if(confirm('ek hesabınızı kullanmak istiyor musunuz?')){
//                 console.log('paranızı alabilirsiniz');
//             }else{
//                 console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamakta`);
//             }
//         }else{
//             console.log('bakiye yetersiz');
//         }
//     }

// }

// paraCek(hesapA,2000);
// paraCek(hesapB,1000);
// //paraCek(hesapB,2000);




// Window object

let val;
var a =10;
function abc(){
    return ;
}

val = window;

// alert10
// alert('merhaba');


// prompt
// var b = prompt('bir sayı giriniz');
// console.log(b);


// confirm
// val = confirm('emin misiniz?');

// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }



//scroll
// val = window.scrollX;
// val = window.scrollY;


// //location
// val = window.location;
// val = window.location.href;
// val = window.location.hostname;


// // window.location.href='http://youtube.com';

// // window.location.reload();


// console.log(val);


// Scopes

// **Global Scopes

var name = 'çınar';
var age = 25;

function logName(){
    var name = 'ada';
    var age = '12';
    console.log('function scope ',name);
}

if(true){
    var age = 30;
    console.log(name);
}
console.log(age);


logName();
console.log('block scope',name, age);

// **Local Scopes

// fonsksiyonlar kendi scoplarını oluşturur
//**blocklar yeni scope oluşturmaz
// ES& ile let ve const block dışından ulaşılmaz

console.log('******************');


if (true){
    var model = 'opel';
    let year = 2016;
    const color = 'white'

}
console.log(model);
// console.log(color);


var i = 1;

for(let i=0;i<10;i++){
    console.log('i',i);
}

console.log(i);







