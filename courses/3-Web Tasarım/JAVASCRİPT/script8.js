// Koşullu durumlar ( if-else )

const firstName="Çağla";
const userName="caglayilmaz";
const age = 18;
const isStudent= true;
const school= "university";

if(userName == "caglayilmaz"){
    console.log("Merhaba Çağla!");
}else{
    console.log("kullanıcı bulunamadı!");
}

// if (age === 20){
//     console.log("yaşınız : 20");
// }

if (isStudent){
    console.log("Hangi bölümde okuyorsun?")
}else{
    console.log("hangi mesleği yapıyorsunuz?")
}

if (age>=18){
    if(school == "university"){
        console.log("Ehliyet alabilirsin")
    }
    else{
        console.log("eğitim durumun ehliyet için yetersiz.")
    }
}else{
    console.log("yaşınız ehliyet için yetersiz.")
}

// //let id= "23563"
// if (typeof id != "undefined"){
//     console.log("id: "+ id);
// }else{
//     console.log("no id")
// }