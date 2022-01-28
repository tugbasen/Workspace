/*

1.boşluklar dikkate alınmaz
2.türkçe karakter olmaz
3.değişken tanımlarken 'var' kullan
4. çift tırnak içinde tırnak kullanımı
"emrah yüksel ile \"udemy\" kursuna hogeldiniz"
4.1 \n bir alt satıra geçirir
5. değişkenler hrf veya _ile başlayabilir,rakamla başlayamaz, rakamla bitebilir
6. 
*/

// var a=10;
// var b=20;
// var c=30;
// var d=40;
// var e=50;

// if(a<b || d<c){
//     console.log('doğru');
// }


// var name="tuğba";
// var lastname="şen";
// var age=22;
// var school="Kocaeli";
// var phone=05312135816;

// console.log('benim adım :'+name);
// console.log('benim soyadım :'+lastname);
// console.log('yaşım :'+age);
// console.log('mezun olduğum okul :'+school);
// console.log('numaram :'+phone);



// var username="tugba1";
// var password1="tugba1";
// var password2="tugba1";

// if(password1==password2){
//     console.log('şifreler uyumlu')
// }else if(password1!==password2){
//     console.log('şifrenizi tekrar giriniz')
// }else if(username==password1){
//     console.log('şifre ve kullanıcı adı aynı olamaz')
// }

// var a=3;
// var b=5;
// var c=7;

// if(a<b && a<c && b<c){
//     console.log('tanımlanan sayıların en küçüğü :'+a);
// }


// var num = 15;

// switch (num) {
//     case 10:
//         console.log('sayı ' + num + 'dur');
//         break;

//     case 15:
//         console.log('15');
//         break;

//     case 20:
//         console.log('20');
//         break;

//     case 30:
//         console.log('30');
//         break;
// }


// var day=new Date().getDay();

// switch (day){

//     case 0:
//     console.log('pazar');
//     break;

//     case 1:
//     console.log('pazartesi');
//     break;

//     case 2:
//     console.log('salı');                                                                                               
//     break;

//     case 3:
//     console.log('çarşamba');
//     break;

//     case 4:
//     console.log('perşembe');
//     break;

//     case 5:
//     console.log('cuma');
//     break;

//     case 6:
//     console.log('cumartesi');
//     break;


// }

// document.writeln('hoşgeldiniz anam');

// promp (geri bildirim alan yer)

// prompt("bir sayı giriniz");



// for(i=1;i<=6;i++){
//     document.writeln("<h"+i+">udemye hoşgeldin</h"+i+">");
// }

// var i=0;
// for(i=1;i<=10;i++){
//     if (i%2){
//         document.write(i+"çift<br>");  
//     }else{
//         document.write(i+"tek<br>");  
//     }

// }

// var kurslar={kurs1:'php',kurs2:'bootstrap'};
// for (key in kurslar){
//     document.write(kurslar[key]+"<br>");
// }


// var i,x;
// for(x=1;x<=10;x++){

//     for(i=1;i<=10;i++){

//         document.write(x+"X"+i+"="+x*i+"<br>");

//     }


// }





// for (i=0;i<=8;i++){

//     var arr;
//     arr= new Array('php','bootstrap','javascript',1,2,3,4,5,6,);
//     document.write(arr[i]+"<br>");

// }

// var arr;
// arr= new Array('php','bootstrap','javascript',1,2,3,4,5,6,);

// for( key in arr){
//     document.write(arr[key]+"<br>");
// }


// var kurs= new Array('php','bootstrap');
// var kurslar=new Array(2);

// for(i=0;i<2;i++){
//     kurslar[i]=new Array(2);
// }

// kurslar[0][0]='emrah yüksel'
// kurslar[0][1]='23 saat'
// kurslar[0][2]='udemy'

// kurslar[1][0]='emrah yüksel'
// kurslar[1][1]='11 saat'
// kurslar[1][2]='udemy'


// for(i=0;i<2;i++){
//     document.write(kurs[i]+"<br>");

//     for( var y=0; y<=3;y++){
//         document.write(kurslar[i][y]+"<br>");
//     }

// }



// var arr = new Array('php','bootstrap','javascript');
// document.write(arr.join("$"));


// function birth(yil){
//     var yas=(2021-yil);
//     return yas;
// }
// document.write(birth(1999)+'<br>');



// function id(name,age){
//     var age=name+ ' yaşı '+(2021-age);
//     return age;
// }
// document.write(id('tuğba',1999));

// var i=0;
// var sonuc=0;
// function recursive(prm){
//     if(i<prm){
//         sonuc+=i;
//         i++;
//         document.write(i+sonuc+'<br>');
//         recursive(prm);
//     }
// }
//  recursive(5);


// var e=17.9;
// document.write(Math.floor(e));




// for(i=1;i<=10;i++){

//     document.write(Math.round(Math.random()*10)+'<br>');
//     if(i>=1 && i<=5){
//         document.write('kazandınız'+'<br>');
//     }else{
//         document.write('kaybettiniz'+'<br>');
//     }
// }



// function say(){
//     alert(document.getElementsByTagName("li").length+"eleman bulunmaktadır");
// }



// function islem(){
//     document.getElementById('udemy').style.backgroundColor='red';
// }




// function islem(){
//     document.getElementById("udemy").setAttribute("href","https://www.udemy.com");

//     var e = document.getElementById("udemy").attributes;
//     console.log(e);

// }


// function targetEkle(){
//     var y= document.getElementById('udemy');
//     console.log(y);

//     if(!y.hasAttribute("target")){
//         y.setAttribute("target","_blank")
//     };
// }

// function ekle(){
//     var y=document.createElement('LI');
//     var x=document.createTextNode('phyton');
//     y.appendChild(x);
//     document.getElementById('udemy').appendChild(y);
// }






// function islem(){
//     var a = parseInt(document.getElementById('input1').value);
//     var b = parseInt(document.getElementById('input2').value);

//     document.getElementById('sonuc').innerHTML=a+b;
// }



// function tikla(){

//     x=event.detail;
//     if(x==1){
//         document.getElementById('kaybol').style.display='none';
//         document.getElementById('sonuc').innerHTML='buton yok oldu';
//     }

// }


// function islem(event) {
//     var x = event.clientX;
//     var y = event.clientY;

//     document.getElementById('sonuc').innerHTML = 'x koordinatı ' + ' - ' + x + ' y koordinatı ' + y;


//     if((x<-209 && x>-258) && (y>203 && y<263)) {
//         document.getElementById('sonuc').innerHTML = "pencere bulundu koordinatları :"
//         'x koordinatı ' + ' - ' + x + ' y koordinatı ' + y;
//     }
// }


// i=0;
// function islem(){

//     i+=1;

//     document.getElementById('sonuc').innerHTML=i;

//     if(i>=50){
//         document.getElementById('sonuc').innerHTML=i+' karakter aşımı';
//     }

// }


// function kontrol(){

//     var e=document.getElementById('input').value;
//     var say=e.length;

//     if(say<6){
//         document.getElementById('sonuc').innerHTML='adınız en az 6 karakter olmalı, şu an '+say+' karakter';
//     }

// }


// function islem(){
//     var x=document.getElementById('udemy').value;

//     document.getElementById('sonuc').innerHTML='seçtiğiniz kurs :'+x;
// }


// function islem(x){
//     x.style.backgroundColor='blue';
//     x.style.color='yellow';
// }

// function kaybet(y){
//     var y=document.getElementById('sec');
//     y.value=y.value.toUpperCase();
// }


// var yeniPencere;

// function islem(){


//     var say1= document.getElementById('say1').value;
//     var say2= document.getElementById('say2').value;
//     var topla=parseInt(say1)+parseInt(say2);


//     yeniPencere=window.open("","yeniPencere","width=250,height=500");
//     yeniPencere.document.write("<h1> toplama işlemi sonucu :"+topla+"</h1>")
// }

// function kapat(){


//     if(yeniPencere){
//         yeniPencere.close();
//         document.getElementById('sonuc').innerHTML='kapatıldı';
//     }else{
//         document.getElementById('sonuc').innerHTML='zaten kapalı';
//     }

// }

// var xhttp = new XMLHttpRequest();
// console.log(xhttp);

// // if(window.XMLHttpRequest){
// //     alert('sorun yok')
// // }

// xhttp.open('GET', 'test.html', true);
// xhttp.send();

// xhttp.onreadystatechange = function () {


//     if (this.readyState == 4 && this.status == 200) {

//         document.getElementById('sonuc').innerHTML = this.responseText;
//         document.getElementById('sonuc').innerHTML = this.responseText;

//     }

// }


// var xhttp = new XMLHttpRequest();
// console.log(xhttp);

// // if(window.XMLHttpRequest){
// //     alert('sorun yok')
// // }

// xhttp.open('GET', 'veri.php?', true);
// xhttp.send();

// xhttp.onreadystatechange = function () {


//     if (this.readyState == 4 && this.status == 200) {

//         document.getElementById('sonuc').innerHTML = this.responseText;
//         document.getElementById('sonuc').innerHTML = this.responseText;

//     }

// }




// var obj,obj1,e;
// obj={
//     "ad": "emrah",
//     "soyad":"yüksel",
//     "il":"istanbul",
//     "kurum":"udemy"
// }


// console.log(obj);

// obj1={
//     ad: "emrah",
//     soyad:"yüksel",
//     il:"istanbul",
//     kurum:"udemy"
// }

// console.log(obj1);
// console.log(obj1.ad);
// console.log(obj1.soyad);
// console.log(obj1["ad"]);
// console.log(obj1['kurum']);


// for(key in obj1){
//     console.log(obj1[key]);
// }



// function gonder(){

//     var veriler={
//         ad:"emrah",
//         soyad:"yüksel",
//         kurum:"udemy"
//     }

//     var hazir=JSON.stringify(veriler);
//     window.location="json-oku.php?veri="+hazir;

// }


























