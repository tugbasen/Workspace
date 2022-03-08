// Döngüler (Loops)

// while loop

// let i=0;
// while(i<10){  // sonsuz döngü
//     console.log(i);
//     i++; //i+=1
// }

// let i = 10;

// while (i>0){
//     console.log(i);
//     i--;
// }

// break ve continue

// let i = 0;
// while (i<10){
//     console.log(i);
//     if (i==15){
//         break
//     }
//     i++;
// }

// let i =0;
// while (i<10){
//     if (i==3){
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// do while loop

// let i =0;
//  do{
//      console.log(i);
//      i++;
//  }while(i<10);


// for loop

// for (let i=0; i<10; i++){
//     console.log(i);
// }

// for (let i=0; i<10; i++){
//     if (i==3){
//         console.log("seçilen rakam:" +i)
//         break
//     }
//     console.log(i);
// }


// let toplam=0;
// for (let i=1; i<10; i++){
//     toplam+=i;
// }
// console.log(toplam);


let sonuc =1;
for (let i=1; i<10; i++){
    sonuc*=i;
}
console.log(sonuc);