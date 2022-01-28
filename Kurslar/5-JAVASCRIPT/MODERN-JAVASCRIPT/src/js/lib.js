
//privat members
const PI=3.145926;

//public members
export function sum(...numbers){
    return numbers.reduce((number,total)=>total+number);
}

export function mult(...numbers){
    return numbers.reduce((number,total)=> total*number);
}

//ES6

sum(1,2,3,6);
sum(1,2,3,5,6);