var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d2-0-gran-coupe'
    },

    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d2-0-gran-coupe'
    },

    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d2-0-gran-coupe'
    },

    {
        name : 'Volvo S60',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d2-0-gran-coupe'
    },

    {
        name : 'Bmw 418d',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d2-0-gran-coupe'
    },

    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d2-0-gran-coupe'
    }

];

var index = 2;
var slaytCount = models.length;
var interval;
var settings ={
    duration : '1000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){

    index--;
    showSlide(index);
    console.log(index);


});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){

    index++;
    showSlide(index);
    console.log(index);
    
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        init(settings);
    })
});


function init(settings){
    var prev;
    interval = setInterval(function(){

        if(settings.random){
            //random index
            do{
                index=Math.floor( Math.random()* slaytCount);
            }while(index==prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount==index+1){
                index =0;
            }
            showSlide(index);
            console.log(index);
            index++;
        }

        showSlide(index);

        

    },settings.duration)

}


function showSlide(i){

    index = i;

    if(i<0){
        index = slaytCount - 1;
    }
    if(i>=slaytCount){
        index=0;
    }


    document.querySelector('.card-title').textContent = models[index].name;


    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    
    
}























