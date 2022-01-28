// OPERATÖRLER
let veri;
const a=20;
const b=10;
const c=5;
let d=3;

// 1.Aritmetik Operatörler

veri = a+b;
veri= a-b;
veri= a*b;
veri= a/b;
veri= d++;
veri= ++d;
veri= d--;
veri= --d;
veri = a%b;

// 2.Atama operatörleri

veri= a;
veri += a; // veri= veri + a;
veri -=a; // veri= veri - a;
veri *=a; // veri= veri * a;
veri /=a; // veri= veri / a;
veri %=a; // veri = veri % a;


// 3.Karşılaştırma Operatörleri

veri= a==b;
veri= b==c;
veri= 5==="5"; // false çünkü 3 eşitir karakter olarak inceler. türleri farklı olduğu için ynlış. ama 2 eşittir olsaydı true olurdu.
veri= a!=b;
veri= a!==b;
veri= a>b;
veri= b<c;
veri = 5>=5;
veri= b<=c;


// 4. Mantıksal Operatörler

// &&(and)

veri= (a>b) && (a>c);


//|| (or)

veri = (b>a) || (a>c);

// ! (not)

veri= !(a<b)





console.log(veri);
console.log(typeof veri)
