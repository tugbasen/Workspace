// alert("merhaba");
//  let num1= Number('5');
//  let num2= Number('10');
// let total =num1+num2;

//  console.log(total);
//  console.log(typeof total);

//  let val;
//  val=String(10)

//  val=String('true')
//  val= String (new Date().getFullYear());

//  val= String([1,2,3,4]);
//  val=(10).toString();
//  val=(false).toString();

//  val=Number(10);
//  val=Number(true);
//  val=Number(false);
//  val=Number(null);
//  val=Number('a');
//  val=parseInt('10');
//  val=parseInt('10.5');
//  val=parseFloat('10.54');

//  console.log(val);
//  console.log(typeof val);
//  console.log(val.toFixed(2));

// var customerName = 'Çınar';
// var customerLastName = 'Turan';
// var fullName = 'Çınar Turan';
// var musteriId = '1223452';
// var total = 205.6;
// var gender = false; // kadın true, erkek false

// //obect
// var address ={
//     city: 'Kocaeli',
//     district: 'İzmit',
//     body: 'Ömerağa Mahallesi'
// }

// //array
// var hobbies =['Sinema', 'Kitap', 'Spor'];

// //toplama

// var order1= Number('100');
// var order2 =Number('150');

// var totalOrder = order1 + order2;

// // tmasayı

// var order3 = parseInt('100.2');
// var order4 = parseInt('150.5');
// var totalOrder2 = order3 + order4;
// console.log(totalOrder2);

// console.log(totalOrder);

// // tam sayı
//  var order4 = parseInt('100.2');
//  var order5 = parseInt('150.5');
//  var totalOrder3 = order4+order5;
//  console.log(totalOrder3);


//  // doğum yılı yaş hesabı
//  var yearOfBirth = 1986;
//  console.log(new Date().getFullYear()-yearOfBirth);

//  // string ifade karakter sayısı

//  var course = 'Modern Javascript Kursu';
//  console.log(course.length);


// OPERATÖRLER

// aritmetik operatörler

// let val;
// const a = 10;
// const b = 5;
// let d= 3;
// const c = 5; 

// val = a + b;
// val = a - b;
// va = a * b;
// val = a / b;
// val = a%b;
// val = d++;
// val = ++d;
// val = --d;
// val = d--;

// //atamam operatörleri

// val = a;
// val+=a; // val = val + a
// val-=a; // val = val - a
// val *=a; // val = val * a
// val /=a; // val = val / a
// val %=a; // val = val % a


// // karşılaştırma operatörleri

// val = a==b;
// val = b==c;
// val = b===c; // değer kontrolü & type
// val = 5===5; // true çünkü hepsi aynı
// val = 5==='5'; // false çünkü  type farklı
// val = a!=b;
// val = a!==b;
// val = a>b;
// val = a>=b;

// // mantıksal operatörler

// //& (and)
// // true && true = true
// // true && false = false
// // false && false = false

//  val = (a>b) && (a>c);
//  val = (a<b) || (a>c);
//  val = !(a>b);

// // || (Or) 
// // true || true = true
// // true || false = true
// // false || false = false

// // ! (not)
// // !true = false
// // !false = true

// console.log(val);
// console.log(typeof val);



// // Demo : Operators

// // 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// // 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
// //  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// // 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// // 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// // 0 - 18,4: Zayıf
// // 18,5 - 24,9: Normal
// // 25,0 - 29,9: Fazla Kilolu
// // 30,0 - 34,9: Şişman (Obez)


// let IndexCan;
// let IndexAda;

// const kgCan = 60;
// const kgAda= 40;

// const heightCan = 1.70;
// const heightAda = 1.50;

// IndexAda = (kgAda) / (heightAda*heightAda);
// IndexCan = (kgCan) / (heightCan*heightCan);

// console.log(IndexAda.toFixed(2), IndexCan);

// let adaHighterIndx = IndexAda>IndexCan;
// console.log(adaHighterIndx);


// let AdaZayif = (IndexAda>=0) && (IndexAda<=18.4);
// let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
// let AdaKilolu = (IndexAda>=25) && (IndexAda<=29.9);
// let AdaSisman = (IndexAda>=30) && (IndexAda<=34.9);

// console.log( "Ada zayıf:" +AdaZayif);
// console.log("Ada normal mi:" +AdaNormal);
// console.log("Ada kilolu mu " +AdaKilolu);
// console.log("Ada şişman mı" +AdaSisman);


// Date Objec

// let d= new Date();

// let birthday = new Date(1990,1,5);






// // Set Method

// d.setFullYear(2020);
// d.setMonth(7);
// d.setDate(20);








// // Get Mothod

// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());
// console.log(d.getSeconds());


// console.log(d.getFullYear() - birthday.getFullYear());
// console.log(d.getMonth() - birthday.getMonth());








// console.log(d);
// console.log(typeof d);








// şimdiki tarih: gün-ay-yıl

// var dt = new Date();

// console.log(dt);
// console.log(dt.getMonth() + 1);
// console.log(dt.getDate());
// console.log(dt.getFullYear());

// // tarih ve saat bilgisi içeren bşr date objesi

// var dtA = new Date('8/24/2010 14:50:10');
// var dtB = new Date(2010, 7, 24, 14, 50, 10);


// console.log(dtA);
// console.log(dtB);

// 1//1/1990 tarihinden 1 gün öncesini göster

// var dtC = new Date('1/1/1999');
// var dayOfMonth = dtC.getDate();
// dtC.setDate(dayOfMonth-1);

// console.log(dtC);


// // iki tarih arası geçen zaman

// var start = new Date('1/1/1990');
// var end = new Date('1/1/1991');

// var milisecond =  end - start;
// var saniye = milisecond / 1000;
// var dakika = saniye / 60;
// var saat = dakika / 60;
// var gün = saat / 24;

// console.log('milisecond :' +milisecond);
// console.log('saniye :' +saniye);
// console.log('dakika :' +dakika);
// console.log('saat :' +saat);
// console.log('gün :' +gün);

// // yaş hesaplama

// var birthday= new Date('8/5/1985');
// var ageDifMs = Date.now() - birthday.getTime();
// var ageDate = new Date(ageDifMs);


// console.log(ageDate.getFullYear()-1970);

// console.log(birthday.getTime());
// console.log(Date.now());



// her yıl mayısın 2.haftası kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır

// var annelerGunu = new Date();
// annelerGunu.setHours(0,0,0,0);
// annelerGunu.setFullYear(2019);
// annelerGunu.setDate(1);
// annelerGunu.setMonth(4);


// while(annelerGunu.getDay() !=0){
//     annelerGunu.setDate(annelerGunu.getDate()+1)
// }
// annelerGunu.setDate(annelerGunu.getDate()+7)

// console.log(annelerGunu);

// Numbers

// let val;
// //val=Number('10');
// // val = parseInt('10.5');
// // val = parseFloat('10.5');
// // val = isNaN('10');
// // val = isNaN('a10');

// var num = 10.123456789;
// val = num.toPrecision(5);
// val = num.toFixed(5);

// val = Math.PI;
// val = Math.round(2.5);
// val = Math.ceil(2.4);
// val = Math.sqrt(64);
// val = Math.pow(2,5);
// val = Math.abs(-100);
// val = Math.min(1,2,3,5,7);
// val = Math.max(1,2,3,5,7);
// val = Math.floor(Math.random()*100+1);


// console.log(val);
// console.log(typeof val);


// var num = 15.123456789;

// // toplamda 3 basamaklı sayı kullan

// val = num.toPrecision(3);

// // ondalık basamak 3lü

// val = num.toFixed(3);

// // en yakın sayıya yuvarla

// val = Math.round(num);

// // aşağı yuvarla

// val = Math.floor(num);

// //yukarı yuvarla

// val = Math.ceil(num);

// // // 1,2,10,56,20 en büyük en küçük bul

// val = Math.min(1,2,10,56,20 );
// val = Math.max(1,2,10,56,20 );

// // // rastgele sayı

// val = Math.random();

/* bir personelin yaptığı mesaiye göre aldığı maaşı heapla
 ** brüt maaş : 3700 TL
 ** brüt mesai : 10.3 TL
 ağustos mesai toplamı 42 saat ise toplam brüt maaş?
 brüt üzerinden toplam kesinti oranı %25 ise alınacak net maaş? 
*/

// var brutMaas = 3700;
// var mesaiUcreti = 10.3;
// var mesaiSuresi = 42
// var toplamBrutMaas = brutMaas + (mesaiUcreti*mesaiSuresi);

// var toplamNetMaas = toplamBrutMaas - (toplamBrutMaas*0.25);


// console.log(toplamBrutMaas.toFixed(2),toplamNetMaas.toFixed(3));

// console.log(val);




// Strings 

// const firstName = 'Sadık';
// const lastName = "Turan";
// let hobbies = 'sinema,spor,itap,yazılım';
// const age = 35;
// let val;

// // strings concatenation (birleştirme işlemi)

// val = firstName + ' ' + lastName;
// val = 'Sadık';
// val += ' Turan';

// val = 'Benim adım ' + firstName + ' ' + lastName + ' ve yaşım' + ' ' + age;


// // strings concat

// val = firstName.concat(' ,', lastName);

// // string length
// // val =val.length;

// // string uppercase - lowercase

// val = val.toUpperCase();
// val = val.toLowerCase();

// // string replace

// val ='    '+val.replace('sadik', 'aaron')+ '     ';

// //trim

// val = val.trim();



// // //val = val[0];

// // //val = val.indexOf('d');

// // //substring

// // //val = val.substring(3,8);

// // // slice

// // val = val.slice(6);


// val = hobbies.split(',');





// console.log(val);
// console.log(typeof val);


// Template Literals - Ternary Operatör

// const fullName = 'Sena Turan';
// const city = 'Kocaeli';
// const yearOfBirth = 1999;
// let val;

// val = 'my name is ' + fullName + ' I\'m ' + (2018 - yearOfBirth) + ' years old' +
//     ' and I live in ' + city;

// val = `my name is $(fullName) I am $(2018-yearOfBirth) and I live in $(city)`;


// console.log(val);

var sentence = " Template literals or template strings is the ability Have multi-line strings without any funny buisness."

var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";


// cümle kaç karekterli

console.log(sentence.length);

// kaç kelime

console.log(sentence.trim().split(' '));

// tüm cümle küçük harf 

console.log(sentence.toLowerCase());

//cümle başındaki ve soundaki boşlukları sil

console.log(sentence.trim());

// '-' sil

console.log(sentence.replace('-', ' '));

// urldeki str çıkar
var str = 'http://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));

// url hangi protokolü kullanmaktadır (http,https)

console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url, '.com' içeeriyor mu 

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

//url'yi geçerli bi url olarak düzenleyin

console.log(url.toLowerCase()
                .replace(/ /g, '-')
                .replace(/ı/g, 'i' )
)



















