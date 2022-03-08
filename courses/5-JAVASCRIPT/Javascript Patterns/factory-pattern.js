
// Factory PAttern
function Factory(){


    this.createEmployee = function(type){

        var empyloyee;

        if(type==='fulltime'){
            empyloyee = new FullTime();
        }else if(type==='parttime'){
            empyloyee = new PartTime();
        }else if(type==='temporary'){
            empyloyee = new Temporary();
        }
        empyloyee.type = type;
        empyloyee.say = function(){
            console.log(this.type + ' : saatlik ücreti : '+this.hourly);
        }
        return empyloyee;


    }

}

var FullTime = function(){
    this.hourly = '30tl';
}

var PartTime = function(){
    this.hourly = '20tl';
}

var Temporary = function(){
    this.hourly = '15tl';
}

var factory = new Factory();

var empyloyees=[];
empyloyees.push(factory.createEmployee('fulltime'));
empyloyees.push(factory.createEmployee('parttime'));
empyloyees.push(factory.createEmployee('parttime'));
empyloyees.push(factory.createEmployee('temporary'));
empyloyees.push(factory.createEmployee('temporary'));
empyloyees.push(factory.createEmployee('fulltime'));


empyloyees.forEach(function(emp){
    emp.say();
});




























