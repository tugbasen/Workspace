
// //1-)global variable naming conf
// //script.js
// var name = 'sadık';

// //app.js
// var name = 'çınar';
// console.log(name);

//2-) encapsulation

// var Counter ={
//     number :0,
//     increment : function(){
//         return ++this.number;
//     },
//     decrement : function(){
//         return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number=10;
// console.log(Counter.decrement());


//IIFE (immediately invoked function expressions)


// //script.js
// (function(){

//     var name = 'sadık';
//     console.log(name);

// // })();

// // //app.js
// // (function(){

// //     var name = 'çınar';
// //     console.log(name);

// // })();

// var Module = (function(){

//     // private members

//     let number = 0;

//     let increment =function(){
//         return ++this.number;
//     }

//     console.log(increment());
//     console.log(increment());

//     return{
//         //public members
//         increment

//     }

// })();

// //console.log(number);
// console.log(Module.increment());


// var module = (function(){

//     var privateMethod = function(){

//     };

//     return{
//         publicMethod : function(){

//         }
//     }

// })();

// module.publicMethod();


const products = [
    {name:'samsung s7', price:3000},
    {name:'samsung s8', price:4000},
    {name:'samsung s9', price:5000}
];



var ProductController = (function(data){

    //private member
    var collections = data || [];

    const addProduct = function(product){
        collections.push(product);
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
            if(index>=0){
                collections.splice(index,1);
            }
        }

    const getProducts = function(){
        return collections;
    }

    //public members
    return{
        addProduct,
        removeProduct,
        getProducts
    }



})(products);



ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

ProductController.removeProduct(products[0]);
ProductController.addProduct(products[2]);

console.log(ProductController.getProducts());

//module extenting

var extended = (function(m){

    m.sayHello = function(){
        console.log('hello from extended module');
    }
    return m ;


})(ProductController || {});

extended.sayHello();
console.log(extended.getProducts());

