// functions that Return Functions

function Question(hobby){
    switch(hobby){
        case 'car':
            return function(name){
                console.log(name+ ' do you have a car?');
            }
        break;

        case 'books':
            return function(name){
                console.log(name+ ' what is your favorite book?');
            }
        break;

        case'software':
        return function(name, type){
            console.log(name+ ' are you interested '+type+' ?');
        }
        break;
        
        default:
            return function(name){
                console.log(name+ ' how are you?');
            }
    }
}

var carQuestion = Question('car');

carQuestion('çınar');

var booksQuestion = Question('books');
booksQuestion('Aaron');


var softwareQuestion =Question('software');
softwareQuestion('tuğba', 'nodejs');




























