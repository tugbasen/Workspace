// Object Literals

// let val;


// let person = {
//     firstName : 'Çınar',
//     lastName : 'Turan',
//     age : 7,
//     hobbies : ['Music','game'],
//     address : {
//         city : 'Kocaeli',
//         country : 'Türkiye'
//     },
//     getBirthYear : function(){
//         return 2018-this.age;
//     }
// };

// val = person;
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.hobbies.length;
// val = person.address;
// val = person.address.city;
// val = person.address['city'];
// val = person.getBirthYear();


// console.log(val);
// console.log(typeof person);


// let people = [
//             {firstName : 'çınar', lastName: 'turan'},
//             {firstName : 'sena', lastName: 'turan'},
//             {firstName : 'seda', lastName: 'turan'},

//             ]



// val = people[0];
// val = people[2].firstName;

// for (let i =0; i<people.length;i++){
//     console.log(people[i].firstName);
// }


// console.log(val);
// console.log(typeof people);


/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/


// var aracBiilgileri = [

//     {
//         id : 'bmw116d_123',
//         model : 'bmw116d',
//         yil : 2015,
//         renk : 'beyaz',
//         servisKayitlari : [
//                 {
//                 id : 'bmw116d_123_1',
//                 tarih : '20.01.2016',
//                 km : '13000',
//                 ucret : 900,
//                 detay : [
//                         {id : 'bmw116d_123_1_1',aciklama : 'yağ değişimi',ucret :300},
//                         {id : 'bmw116d_123_1_2',aciklama : 'filtre değişimi',ucret :300},
//                         {id : 'bmw116d_123_1_3',aciklama : 'fren hidroliği',ucret :300}
//                         ]
//                 },
//                 {
//                 id : 'bmw116d_123_2',
//                 tarih : '10.01.2017',
//                 km : '28000',
//                 ucret : 1800,
//                 detay : [
//                         {id : 'bmw116d_123_2_1',aciklama : 'yağ değişimi',ucret :350},
//                         {id : 'bmw116d_123_2_2',aciklama : 'filtre değişimi',ucret :350},
//                         {id : 'bmw116d_123_2_3',aciklama : 'fren hidroliği',ucret :300},
//                         {id : 'bmw116d_123_2_3',aciklama : 'balata değişimii',ucret :800}
//                         ]
//                 },


//                         ]
//     },

//     {
//         id : 'bmw118i_123',
//         model : 'bmw118i',
//         yil : 2015,
//         renk : 'beyaz',
//         servisKayitlari : [
//                 {
//                 id : 'bmw118i_123_1',
//                 tarih : '20.01.2016',
//                 km : '13000',
//                 ucret : 900,
//                 detay : [
//                         {id : 'bmw118i_123_1_1',aciklama : 'yağ değişimi',ucret :300},
//                         {id : 'bmw118i_123_1_2',aciklama : 'filtre değişimi',ucret :300},
//                         {id : 'bmw118i_123_1_3',aciklama : 'fren hidroliği',ucret :300}
//                         ]
//                 },
//                 {
//                 id : 'bmw118i_123_2',
//                 tarih : '10.01.2017',
//                 km : '28000',
//                 ucret : 1800,
//                 detay : [
//                         {id : 'bmw118i_123_2_1',aciklama : 'yağ değişimi',ucret :350},
//                         {id : 'bmw118i_123_2_2',aciklama : 'filtre değişimi',ucret :350},
//                         {id : 'bmw118i_123_2_3',aciklama : 'fren hidroliği',ucret :300},
//                         {id : 'bmw118i_123_2_3',aciklama : 'balata değişimii',ucret :800}
//                         ]
//                 },


//                         ]
//     },

//     {
//         id : 'bmw320d_123',
//         model : 'bmw320d',
//         yil : 2015,
//         renk : 'beyaz',
//         servisKayitlari : [
//                 {
//                 id : 'bmw116d_123_1',
//                 tarih : '20.01.2016',
//                 km : '13000',
//                 ucret : 900,
//                 detay : [
//                         {id : 'bmw320d_123_1_1',aciklama : 'yağ değişimi',ucret :300},
//                         {id : 'bmw320d_123_1_2',aciklama : 'filtre değişimi',ucret :300},
//                         {id : 'bmw320d_123_1_3',aciklama : 'fren hidroliği',ucret :300}
//                         ]
//                 },
//                 {
//                 id : 'bmw320d_123_2',
//                 tarih : '10.01.2017',
//                 km : '28000',
//                 ucret : 1800,
//                 detay : [
//                         {id : 'bmw320d_123_2_1',aciklama : 'yağ değişimi',ucret :350},
//                         {id : 'bmw320d_123_2_2',aciklama : 'filtre değişimi',ucret :350},
//                         {id : 'bmw320d_123_2_3',aciklama : 'fren hidroliği',ucret :300},
//                         {id : 'bmw320d_123_2_3',aciklama : 'balata değişimii',ucret :800}
//                         ]
//                 },


//                         ]
//     },

// ]


// console.log(aracBiilgileri[0]);
// console.log(aracBiilgileri[0].id);
// console.log(aracBiilgileri[0].model);
// console.log(aracBiilgileri[0].renk);
// console.log(aracBiilgileri[0].servisKayitlari);






// // console.log(aracBiilgileri[1]);
// // console.log(aracBiilgileri[2]);


// Döngüler (Loops)

// for loop

// for(let i =0; i<10;i++){

//     if(i==3){
//         console.log('en sevdiğim rakam :'+i);
//         continue;
//     }


//     if(i==6){
//         console.log('en sevmediğim rakam : 6');
//         break;
//     }
//    }



//     console.log(i);


// while loop

// for (let i=0; i<10;i++){
//     console.log(i);
// }


// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }


// do-while loop

// let i=0;

// do{
//     console.log(i);
//     i++;
// }while(i<10)


// let sonuc=1;
// for(let i=10; i>0; i--){
//     if(i%2==0){
//         sonuc*=i;
//     }
// }
// console.log(sonuc);

// val = '\n'
// for(let i=0; i<10; i++){
//     for(let j=0; j<10;j++){
//        val +=' * ';
//     }
//     val+='\n';
// }
// console.log(val);





// Dizilerde ve objelerde loop kullanımı

let cars = ['bmw','mercedes','toyota'];
let people = [
    {firstName: 'ada',lastName:'bilgi'},
    {firstName: 'yiğit',lastName:'bilgi'},
    {firstName: 'çınar',lastName:'turan'}
];

// for(let i=0;i<cars.length;i++) {
//     console.log(cars[i]);
// }


// Arrays
// for (let i=0;i<people.length;i++){
//     console.log(people[i].firstName);
// }





// for-in loop

// for(let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }


// Arrays
// for (let i in people){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }







// foreach

// cars.forEach(function(item){
//     console.log(item);
// });



// people.forEach(function(item){
//     console.log(item.firstName);
// });



// map  : return an array

// let val = people.map(function(item){
//     return item.firstName + ' ' + item.lastName;
// });

// console.log(val);

// let numbers = [1,5,6,8,10];
// let num = numbers.map(function(n){
//     return n*n;
// });

// console.log(num);

// UGULAMA DÖNGÜLER
/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/


var hak,can;
var tahmin,sayac = 0;
var sayi = Math.floor((Math.random()*10)+1);
can = Number.(prompt('kaç kerede bileceksiniz ?'));
hak = can;
console.log(sayi);


while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`puan : ${100 - (100/can)*(sayac-1)}`);
        break;
    }else if (sayi > tahmin){
        console.log('yukarı');
    }else{
        console.log('aşağı');
    }

    if(hak==0){
        console.log('hakkınız bitti. sayı :'+sayi);
    }
}
































