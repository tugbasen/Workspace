// Fonksiyonlar (functions)
// function merhaba(){
//     console.log("merhaba")
// }
// merhaba();
// merhaba();
// merhaba();


// function merhaba(name,age){
//     console.log(`İsim: ${name} Yaş: ${age}`);
// }
// merhaba("tugba", 22);
// merhaba("Aslı", 23);
// merhaba("yasemin", 28);


function yasHesapla(dogumYili){
   return 2021 - dogumYili;
}

let ageSamet = yasHesapla(1990);
let ageMehmet = yasHesapla(2000);
let ageCagla = yasHesapla(2005);

// console.log(ageCagla,ageMehmet,ageSamet);

function ehliyetalabilmeDurumu(dogumYili, İsim){
    let yas = yasHesapla(dogumYili);
    let ehliyet = 18- yas;
    if (ehliyet>0){
        console.log(`${İsim} ehliyet alabilmenize ${ehliyet} yıl kaldı`);
    }else{
        console.log("Ehliyet alabilirsiniz")
    }
}

ehliyetalabilmeDurumu(1990, "esra");
ehliyetalabilmeDurumu(2010, "ali");





