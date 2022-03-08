//object Literals

// let yigit ={
//     name : 'yiğit',
//     yearOfBirth : 2010,
//     jon : 'student'
// }

// function Person(name, yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2018 - this.yearOfBirth;
//     }
// }


let Person = function (anme, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        return 2018 - this.yearOfBirth;
    }
}



let yigit = new Person('yigit', 2010, 'student');
let emel = new Person('emel', 1989, 'teacher');


console.log(yigit.name);
console.log(yigit.calculateAge());

console.log('********************');

console.log(emel.yearOfBirth);
console.log(emel.calculateAge());