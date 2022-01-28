// array

let names = ['çınar', 'sena', 'ada', 'yiğit'];

let years = [2017, 1999, 1990, 2010];

let mix = ['Sadık', 'turan', 1983, null, undefined, ['sinema', 'kitap']];

// get array item

// console.log(names[0])
// console.log(names[3])


// // set array item

// names[names.length] = 'emel'

// // add item

// //years.push(1986);
// years.unshift(1986);


// // remove item

// years.pop();
// years.shift();


// // indexOf methodu
// let index = names.indexOf('ada');
// console.log('index :'+index);


// // reverse
// names.reverse();


// // sort
// years.sort();


// //concat
// let val = years.concat(names);
// console.log(val);


// splice
// console.log(names);

// names.splice(0,1,'seda');

// //find
// function over18(year){
//     let age = 2018 - year;
//     return age>=18;
// }

// // let val = years.find(over18);
// // console.log(val);  // 18 yaşından büyük ola ilk yılı bulur

// //filter
// let val = years.filter(over18);
// // 18 den büyük olan bütün yılları getirir

// console.log(val); 


// console.log(names);
// console.log(names.length);
// console.log(typeof names);

// console.log(years);
// console.log(typeof years);

// console.log(mix);
// console.log(typeof mix);


// Demo : Arrays
//bmw mercedes opel mazda liste yap

// let list = ['Bmw', 'Mercedes','Opel', 'Mazda'];
// console.log(list);

// // dizi kaç elemanlı

// console.log(list.length);

// //dizinin ilk ve son elemanları

// console.log(list[0]);
// console.log(list[3]);

// // renault ekle

// list[4] = 'renault';
// // list[list.length] = 'renault'
// console.log(list);

// // seat başa ekle

// list.push('toyota');
// list.unshift('seat');

// // seat sil
//  list.shift('seat');
//  list.pop('toyota');

//  // dizi elemanalrını ters çevir

//  list.reverse();

//  // alfabetik sıralama

//  list.sort();

//  // [1,2,5,80] sırala
//  var numbers = [1,2,5,80,15];


//  function compare(a,b){
//      if(a>b) return 1;
//      if(a==b) return 0;
//      if(a<b) return -1;
//  }

//  console.log(numbers.sort(compare));


//  // opel dizinin elemanı mı?

//  console.log(list);
//  console.log(list.indexOf('Opel'));
//  console.log(list.includes('Opel'));

//  // var str = "chevrolet,Dacia"; diziye çevir

//  var str = "chevrolet,Dacia";
// var list2 = str.split(',');
// console.log(list2);


// // oluşan iki diziyi birleştir

// var list3 = list.concat(list2);
// console.log(list3);

// // oluşan diziden son 2 elemanı sil

// // console.log(list3.pop());
// // console.log(list3.pop());

// console.log(list3.splice(5,2));

/* aşağıda verilen dizi elemanlarını bir dizide saklayın
studentA : Yiğit Bilgi 2010
studentB : Sena Turan 1999
studentC : Ahmet Turan 1998
*/

// var studentA = ['Yiğit', 'Bilgi',2010];
// var studentB = ['Sena', 'Turan',1999];
// var studentC = ['Ahmet','Turan',1998];

// var students=[studentA,studentB,studentC];

// console.log(students[0]);
// console.log(students[0][0]);
// console.log(students[0][1]);
// console.log(students[0][2]);

// console.log(students);

// if - else sattements

// const firsName = 'Sena';
// const age = 19;
// const isStudent = true;
// const school = 'university';

// // if(firsName==='Sena'){
// //     console.log('merhaba sena');
// // }
// // if(age===19){
// //     console.log('yaşınız 19');
// // }

// // if(isStudent===false){
// //     console.log('merhaba öğrenci');
// // }else{
// //     console.log('merhaba işler nasıl');
// // }

// // if (age>=18){
// //     if ((school == 'university') || (school == 'high school')) {
// //         console.log('ehliyet alabilirsin');
// //     }else{
// //         console.log('eğitim durumunuz yetesiz');
// //     }

// // } else {
// //     console.log('ehliyet alamazsınız');
// // }



// // if(age>0 && age<12){
// //     console.log(`${firsName} is a child`);
// // }else if (age>=13 && age<=19){
// //     console.log(`${firsName} is a teenager`);
// // }else{
// //     console.log(`${firsName} is a adult`);
// // }


// // undefined


// // if(typeof id!=='undefined'){
// //     console.log('id: '+id);
// // }else{
// //     console.log('no id');
// // }


// //switch statements
// // let category = 'beyaz eşya';

// // switch(category){
// //     case 'telefon':
// //         console.log('telefon kategorisi');
// //     break;

// //     case 'bilgisayar':
// //         console.log('Bilgisayar kategorisi');
// //     break;

// //     default:
// //         console.log('yanlış kategori')
// // }


// // let day;

// // console.log(new Date().getDay());

// // switch (new Date().getDay()) {
// //     case 0:
// //     case 6:
// //         day = 'Hafta Sonu';
// //         break;

// //     case 1:
// //     case 2:
// //     case 3:
// //     case 4:
// //     case 5:
// //         day = 'Hafta içi';
// //         break;
// // }

// // console.log(`${day}`);


// const age1 = 19;
// const firsName1 = 'ela';

// switch (true) {
//     case age1 >= 0 && age1 <=12:
//         console.log(`${firsName11} is a child`);
//     break;

//     case age1 >= 13 && age1 <= 19:
//         console.log(`${firsName1} is a teenager`);
//     break;

//     default:
//     console.log(`${firsName1} is a adult`);
// }

//UYGULAMA

// var trafigecikis = new Date('04/20/2016');
// trafigecikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigecikis.getTime();
// var trafiktekiGun =Math.floor(trafiktekiMs/(1000*60*60*24));

// if(trafiktekiGun<=365){
//     console.log('1.servis bakım süresi geldi');
// }else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
//     console.log('2.servis bakım süresi');
// }else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//     console.log('3.servis bakım süresi');
// }else{
//     console.log('bilinmeyen');
// }
    



// console.log(trafiktekiGun);



var result = prompt("who's there ?");


if(result=='cancel'){
    console.log('canceled');
}else if(result=='Admin'){
    console.log('welcome admin');

    var password = prompt('enter your passwprd : ');

    if(password=='cancel'){
        console.log('canceled')
    }else if(password=='1234'){
        console.log('welcome admin');
    }else{
        console.log('wrong passwprd')
    }


}else{
    console.log('i dont know')
}






















































