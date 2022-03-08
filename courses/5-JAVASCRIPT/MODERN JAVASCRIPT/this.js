
// 'this' keyword

//ES5
// let list ={
//     category : 'phone',
//     name :['ıphone8','samsung','iphone7'],
//     call : function(){
//         var self = this;
//         this.name.map(function(name){
//             console.log(`${self.category}+${name}`);
//         })
//     }
// }
// list.call();

// //ES6
// let list ={
//     category : 'phone',
//     name :['ıphone8','samsung','iphone7'],
//     call : function(){
//         this.name.map((name)=>{
//             console.log(`${this.category} ${name}`);
//         })
//     }
// }
// list.call();


//ES5
// function Game(){
//     this.live = 0;
//     this.addLive = function(){
//         var self = this;
//         this.OneUp = setInterval(function(){
//             console.log(++self.live);
//         },1000)
//     }
// }

//ES6
function Game(){
    this.live = 0;
    this.addLive = function(){
        this.OneUp = setInterval(()=>{
            console.log(++this.live);
        },1000)
    }
}


let player = new Game();
player.addLive();

























