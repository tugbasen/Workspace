const person = {
    firstName : 'sadık',
    lastName : 'turan',
    get fullName(){
        return `${person.firstName} ${this.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

Object.defineProperty(person,'fullName',{
    get function(){
        return `${person.firstName} ${this.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value : 50, 
    writable : true
})

person.age = 55;


//person.firstName='sena';

// person.fullName = 'çınar Turan'

// console.log(person.fullName)

console.log(person);