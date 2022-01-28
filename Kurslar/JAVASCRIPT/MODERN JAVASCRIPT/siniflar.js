// Classes

//ES5

var PersonES5 = function(name,job,yearOfBirth){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}


PersonES5.prototype.calculateAge = function(){
   return 2018- this.yearOfBirth;
}

var yigit = new PersonES5('yigit','student',2010)

console.log(yigit.calculateAge());
console.log(yigit);


//ES6

class PersonES6{
    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge(){
        return 2018-this.yearOfBirth;
    }


}

let emel = new PersonES6('emel', 'teacher', 1989);
console.log(emel.calculateAge());


console.log(emel);



















