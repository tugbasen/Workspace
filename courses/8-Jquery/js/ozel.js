
/*
    $(document).ready(function () {
        $("p").click(function () {
            $(this).hide();
        });
    });


//1.yöntem
$(document).ready(function(){
    $('div').html('udey eğitimi div içerisinde')
})
    
//2.yöntem
$().ready(function(){
    $('p').html('udey eğitimi paragraf içerisinde')
})

//3.yöntem
$(function(){
    $('b').html('udey eğitimi b etiketi içerisinde')
})
*/

//1.yöntem
/*
$(document).ready(function(){
    $('div').html('Tuğba Şen');
})
$(document).ready(function(){
    $('em').html('Tuğba şen')
})
$(document).ready(function(){
    $('i').html('tuğba şen')
})
$(document).ready(function(){
    $('small').html('tuğba şen')
})
$(document).ready(function(){
    $('strong').html('tuğba şen')
})
$(document).ready(function(){
    $('a').html('tuğba şen')
})
$(document).ready(function(){
    $('h1').html('tuğba şen')
})
$(document).ready(function(){
    $('button').click(html('tuğba şen'))
})
*/

//2.yöntem
/*
$().ready(function(){
    $('p').html('herkese selam')
})
$().ready(function(){
    $('i').html('herkese selam')
})
$().ready(function(){
    $('em').html('selam')
})
$().ready(function(){
    $('a').html('selam')
})
*/

//3.yöntem
/*
$(function(){
    $('strong').html('tuğba şen')
})
$(function(){
    $('em').html('tuğba şen')
})
$(function(){
    $('a').html('herkese selam')
})
$(function(){
    $('i').html('herkese selam')
})
$(function(){
    $('small').html('herkese selam')
})
*/

/* 
function islem(){
    $('div').html('udemy jquery eiğitimindeyim')
}

$('p').click(islem);
*/
/*
function showHide(){
    $('#advertisement').toggle();
}
*/
/*
$(document).ready(function(){
    $('p').css('color','blue')
})
*/
/*
$(document).ready(function(){
    $('#php').css('color','orange')
})
$ (document).ready(function(){
    $('.bootstrap').css('color','pink')
})

//id ve class aynı anda seçme
$ (document).ready(function(){
    $('.bootstrap,#php').css({'font-size':'30px'})
})
*/
/*
$(document).ready(function(){
    //1.yol
    //$('input').css({'width':'600px','background-color':'pink'})
    //$('input[type="text"').css({'width':'600px','background-color':'pink'})

    //2.yol
    $('input:text').css({'width':'600px','background-color':'pink'})

})
*/
/*
$(document).ready(function(){
   //$('li:first').css({'background-color':'green'})
   // $('li:last').css({'background-color':'green'})
    //$('li:odd').css({'background-color':'green'}) //tekleri seçer
    //$('li:even').css({'background-color':'red'}) //çifleri seçer
})
*/
/*
$(document).ready(function(){
    $('td:odd').css({'background-color':'pink'})
    $('td:even').css({'background-color':'yellow'})
})
*/
/*
$(document).ready(function(){
    $('.udemy p:first-child').css({'background-color':'red'})
    $('.udemy p:last-child').css({'background-color':'red'})
})
*/
/*
$(document).ready(function(){
    $('.udemy').find('b').css({'color':'red'})
})
*/
/*
$(document).ready(function(){
    $('.two').prev().css({'background-color':'red'})
    $('.two').next().css({'background-color':'blue'})
    $('.three').prev().css({'background-color':'green'})
})
*/
/*
$(document).ready(function(){
    $('.udemy li:eq(2)').css({'background-color':'orange'})
})
*/
/*
$(document).ready(function(){
    //$('div').first().css({'background-color':'yellow'})
    //$('div').last().css({'background-color':'yellow'})
    //$('div').not('.orta').css({'background-color':'yellow'})
    $('div').filter('.orta').css({'background-color':'yellow'})
})
*/
/*
$(function(){
    $('ul li').each(function(index){
        alert(index+' .eleman :'+$(this).text())
    })
})
*/
/*
$(function(){
    //$('li').slice(0).css({'background-color':'red'})
    $('li').slice(2,3).css({'background-color':'red'})
})
*/
/*
$(function(){
    if($('div').is('#udemy')){
        $('b').html('doğru')
    }
})
*/
/*
$().ready(function(){
    $('p').addClass('renk')
})
*/
/*
$().ready(function(){
    var sor=$('p').hasClass('renk')
    if(sor){
        document.write('var')
    }else{
        document.write('yok')
    }
})
*/
/*
$(function(){
    $('div').height('400px').fadeOut(2000).fadeIn(2000)
})

*/
/*
$().ready(function(){
    $('div').removeClass('renk')
})
*/
/*
$(document).ready(function(){
    $('button').click(function(){
        $('p').toggleClass('renk')
    })
})
*/
/*
$(function(){
    if($('div').hasClass('tugba')){
        alert('başardın')
    }
})
*/

// $(document).ready(function(){

//     //düz yazı olarak ekleme
//     /*$('.php').append(' append ile arkasına eklendi')
//     $('.php').prepend(' prepend ile önüne eklendi')*/

//     //html kodlar ile ekleme
//     $('.php').append('<p>append ile arkasına eklendi</p>')
//     $('.udemy').prepend('<b>prepend ile önüne eklendi</b><br>')
// })

/*
$('.liste').append('<option>jquery</option>')
$('.liste').prepend('<option>css</option>')
*/
/*
$(document).ready(function(){
    //$('a').appendTo($(' p'))
    //$('a').prependTo(' p')
    $('button').click(function(){
        $('a').appendTo('p')
        $('a').prependTo('p')
    })
})
*/

// $(document).ready(function(){
//     //li'lerin hepsinin arkasına ekler
//     //$('li').after('<li>jquery</li>')

//     //ilk li'nin arkasına ekleme
//     /*$('li:first').after('<li>jquery</li>')
//     $('li:eq(0)').after('<li>jquery</li>')
//     $('li:last').after('<li>jquery</li>')*/

//     //li'lerin hepsinin önüne ekler
//     $('li').before('<li>jquery</li>')
//     //aynı şeyler geçerli
// })
/*
$(document).ready(function(){
    $('#ekle').click(function(){
        $('input:last').before('<input type="file" name="yukle[]"><br/><br/>')
    })
})
*/
/*
$(document).ready(function(){
    $('div').clone().insertAfter('p')
    $('div').clone().insertBefore('p')
})
*/
/*
$(document).ready(function(){
    $('a').text('udemye gir')
})
*/
/*
$(document).ready(function(){
    $('button').click(function(){
        //$('p').replaceWith('<p>bootstrap kursu</p>')
        $('<p>bootstrap kursu</p>').replaceAll('p')
    })
})
*/
/*
$(document).ready(function(){
    $('button').click(function(){
        $('p').empty()
    })
})
*/
/*
$().ready(function(){
    $('a').text('emrah yüksele git')
    $('a').attr('href','www.google.com')
    $('a').attr('style','color:orange')
})
*/

/*
$(function(){
    //console.log($('.udemy').css('width'))

    //$('.udemy').css({'width':'300px'})

    $('.udemy').css({'width':'+=50px'})
})
*/
/*
$().ready(function(){
   // alert($('p').html())

   //$('p').html('içerik değişir')

    //$('b').html($('p').html())
    //alert($('div').html())
    var icerik=$('b').html();
    if(icerik=='emrah'){
        document.write('b içinde emrah va')
    }
})
*/
/*
$().ready(function(){
    //alert($('input').val())
    $('button').click(function(){
        var liste=$('select').val();
        if(liste=='php'){
            alert('php seçili')
        }
    })

})

*/
/*
$(function(){
    $('b').text($('li').length)
})
*/
/*
$(function(){
    //alert($('li').get())
    var say=$('li').get();
    $('b').text('ulaşılan eleman içeriği :'+$(say).eq(3).text());
})
*/

/*
$(function(){
    $('b').text('ulaşılan elemanın '+$('#php').index())
})
*/

// $().ready(function(){
//     /*$('button').click(function(){
//         $(this).after('<button>tıkla üret</button>')
//     })
// })
// */
//     $('body').on('click','button',function(){
//         $(this).after('<button>tıkla üret</button>')
//     })
// })
/*
$().ready(function(){

    $('body').one('click','button',function(){
        $(this).after('<button>tıkla üret</button>')
    })
})
*/
/*
$(function(){
    $('body').one('click','button',function(){
        $('button').before('<input type="file">')
    })
})
*/
/*
$(function(){
    $('body').on('click','#ekle',function(){
        $(this).after('<button id="ekle">tıkla üret</button>')
    });

    $('body').on('click','#kaldir',function(){
        $('body').off();
    })
})
*/
/*
$(function(){
    $('#btn1').click(function(){
        alert('buton 1 clicklendi')
    });
    $('#btn2').click(function(){
        $('#btn1').trigger('click')
    })
    
})
*/

/*
$(function(){
    $('html').keydown(function(){
        alert('bir tuşa basıldı')
    })
})
*/
/*
$(function(){
    $('#ad').keypress(function(event){
       //$('b').append('tuşu bırak')
       $('div').fadeIn(2000)

       $('div').animate({
        marginLeft:'+=10px'

    })
    })
})
*/
/*
$(function(){
    $('body').keydown(function(event){

        var a=event.which;
        $('div').text('basılan tuş :'+a)

        if(a==38){
            $('div').animate({
                marginTop:'-=10px'
            })
        }else if(a==37){
            $('div').animate({
                marginLeft:'-=10px'
            })
        }else if(a==39){
            $('div').animate({
                marginLeft:'+=10px'
            })
        }else if(a==40){
            $('div').animate({
                marginTop:'+=10px'
            })
        }
    })
})
*/
/*
$(function(){
    $('button').mousedown(function(event){
        $('b').text(event.which);
    })
})
*/
/*
$(function(){
    $('p').mouseup(function(){
        $('b').text('fare bırakıldı')
    })
    $('p').mousedown(function(){
        $('b').text('fareye basıldı');
    })
})
*/
/*
$(function(){
    $('p').mouseup(function(){
        $('b').text('fare bırakıldı')
    })
    $('p').mousedown(function(){
        $('b').text('fareye basıldı');
    })
    $('p').mouseout(function(){
        $('b').text('fare çıktı');
    })
    $('p').mouseenter(function(){
        $('b').text('fare geldi');
    })
})
*/
/*
$(function(){
    $('p').mousemove(function(e){
        $('b').text(e.pageX+' '+e.pageY)
    })
})
*/
/*
$(function(){
    $('button').hover(i);

    function i(){
        $('button').animate({
            marginLeft:'+=100px'
        })
        $('button').animate({
            marginTop:'+=100px'
        })
    }
    $('button').click(function(){
        alert('yakalandı')
    })
})
*/
/*
$(function(){
    $('b').click(function(){
        alert(event.currentTarget.nodeName);
    })
})
*/
/*
$(function(){
    $('li').mouseover(function(event){
        alert(event.relatedTarget.nodeName)
    })
})
*/
/*
$(function(){
    $('body').click(function(event){
        alert(event.target.nodeName)
    })
})
*/
/*
$(function(){
    $(document).mousemove(function(k){
        $('b').text('x koordinatı :'+k.pageX+' Y koordinatı :'+k.pageY)
    })

    
})
*/
/*
$(function(){
    $(document).mousemove(function(k){
        $('b').text('x koordinatı :'+k.pageX+' Y koordinatı :'+k.pageY)

        if(k.pageX<79 || k.pageY<69){
            $('b').text('yandınız')
        }

    })
})
*/
/*
$(function(){
    $(document).keydown(function(event){
        if(event.altKey){
            $('b').text('"alt"a basıldı')
        }
    })
})
*/
/*
$(function(){
    $('p').on('test.paragraf',function(event){
        alert(event.namespace)
    })

    $('button').click(function(event){
        $('p').trigger('test.paragraf')
    })

})
*/
/*
$(function(){
    $("a").click(function(event){
        event.preventDefault()

        $("b").text(event.type='click iptal edildi')
    })
})
*/
/*
$(function(){
    $("button").click(function(){
        //direct show
        //$('div').show();

        //slowmotion
        //$('div').show(1000)

        //işlem sonrası
        $('div').show(2000,function(){
            alert('div gösterildi')
        })
    })
})
*/
/*
$(function(){
    $('button').click(function(){
        //direct show
        $('div').hide()

        //slowmotion
        //$('div').show(1000)
    })
})
*/
/*
$(function(){
    $('button').click(function(){
        //direct 
        //$('div').toggle()

        //slowmotion
        $('div').toggle(1000)
    })
})
*/
/*
$(function(){
    $('button').click(function(){
        $('div').toggle(2000,function(){
            var sonuc=$('div').css('display')
            //$('b').text(sonuc)
            if(sonuc=='block'){
                $('b').text('açık')
            }else if(sonuc=='none'){
                $('b').text('kapalı')
            }
        })

    })
})
*/
/*
$(function(){
    $('button').click(function(){
        $('div').delay(1000).toggle(2000)
    })
})
*/
/*
$(function(){
    $('button').click(function(){
        $('div').slideDown(2000)
    })
})

$(function(){
    $('button').click(function(){
        $('div').slideUp(2000)
    })
})
*/
/*
$(function(){
    $('button').click(function(){
        $('div').slideToggle(2000)
    })
})
*/
/*
$(function(){
    $('button').click(function(){
        $('div').fadeIn(2000)
    })
})

$(function(){
    $('button').click(function(){
        $('div').fadeOut(2000)
    })
})
$(function(){
    $('button').click(function(){
        $('div').fadeTo('slow',0.10)
    })
})
*/
/*
$(function(){
    $("#kutu1").fadeTo('slow',0.50)
    $("#kutu2").fadeTo('slow',0.50)
    $("#kutu3").fadeTo('slow',0.50)
    $("#kutu4").fadeTo('slow',0.50)

    $('#btn1').click(function(){
        $('#kutu1').fadeTo('slow',0.1)
        alert('yanlış kutu')
    })
    $('#btn2').click(function(){
        $('#kutu2').fadeTo('slow',1)
        alert('doğru kutu')
    })
    $('#btn3').click(function(){
        $('#kutu3').fadeTo('slow',0.1)
        alert('yanlış kutu')
    })
    $('#btn4').click(function(){
        $('#kutu4').fadeTo('slow',0.1)
        alert('yanlış kutu')
    })
})
*/
/*
$(function(){
    $('button').click(function(){
        $('div').fadeToggle(1000)
    })
})
*/

//animate
/*
$(function(){
    $('button').click(function(){
        $('div').animate({
            width:'500px',
            height:'50px',
        })
    })
})
*/
/*
$(function(){
    $('#left').click(function(){
        $('div').animate({
            marginLeft:'-=20px'
        })
    });

    $('#right').click(function(){
        $('div').animate({
            marginLeft:'+=20px'
        })
    });
    $('#up').click(function(){
        $('div').animate({
            marginTop:'-=20px'
        })
    });
    $('#down').click(function(){
        $('div').animate({
            marginTop:'+=20px'
        })
    });
})
*/
/*
$(function(){
    $('#islem').click(function(){
        
        $('div').fadeIn(5000)
        $('div').animate({
            width:'+=100px'
        })
    });

    $('#stop').click(function(){
        //$('div').stop()
        $('div').finish()
    })
})
*/
/*
$(function(){
    $('#oynat').click(function(){
        $('div').animate({
            marginLeft:'-20px'
        });
        $('div').animate({
            marginLeft:'+500px',
        }).queue(function(){
            alert('işlem durdu');
            $(this).dequeue();
            $('div').clearQueue();
 
        });
        $('div').animate({
            marginTop:'+20px',
        });
        $('div').animate({
            marginTop:'-20px',
        })
    })
})
*/
/*
$(function(){
    $('#islem').blur(function(){
        $('b').text('doğru alan');
    })
})

$(function(){
    $('#islem').change(function(){
        var e=$('#islem').val();
        $('b').text(e.length)
    })
})
*/
/*
$('#islem').focus(function(){
    $('b').text('giriş')
})
*/
/*
$(function(){
    $('#islem').select(function(){
        $('b').text('seçildi');
        if(document.execCommand('copy')){
            alert('kopyalama başarılı');
        }
    })
});
*/
/*
$(function(){
    $('form').submit(function(event){
        if($('#islem').val()!='4'){
            alert('sadece 4 girebilirsin');
            event.preventDefault();
        }
    })
})
*/
/*
$(function(){
    $('form').submit(function(event){
        if(($('#ad') && $('#soyad')).val().length<6){
            alert('en az 5 karakter');
            event.preventDefault();
        }
    })
})
*/
/*
$(function(){
    $('div').height(30);
    $('div').width(600)

    $('button').click(function(){
        alert($('.emrah').height())
    })
})
*/

/*
$().ready(function(){
    $('.udemy').scrollLeft(0);
    $('.udemy').scrollTop(275);

    $('html').scrollTop(50)
})
*/

//AAX Post & Get

















