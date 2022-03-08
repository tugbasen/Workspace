// Switch Koşul Yapısı

let islem = 6;
// switch (islem){
//     case 1:
//         console.log("1 nolu işlem yapıldı")
//         break;

//         case 2:
//             console.log("2 nolu işlem yapıldı")
//             break;

//             case 3:
//                 console.log("3 nolu işlem yapıldı")
//                 break;

//                 default:
//                     console.log("işlem yapılmadı")
// }

// let day;
// switch (new Date().getDay()+2) {
//     case 0:
//         day = "pazar"
//         break
//     case 1:
//         day = "pazartesi"
//         break
//     case 2:
//         day = "salı"
//         break
//     case 3:
//         day = "çarşamba"
//         break
//     case 4:
//         day = "perşembe"
//         break
//     case 5:
//         day = "cuma"
//         break
//     case 6:
//         day = "cumartesi"
//         break
// }

// console.log(day);

let hour=30;
switch (true){
    case (hour >=6 && hour <=12):
        console.log("Günaydın");
        break
    case (hour >=13 && hour <=17):
        console.log("İyi günler");
        break
    case (hour >=18 && hour <=24):
        console.log("iyi akşamlar");
        break 
    default:
        console.log("Yanlış zaman");
}