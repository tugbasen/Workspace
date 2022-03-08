

/*
// açılır menü
$(function(){
    $('#accordion').accordion()
})
*/

/*
//autocomplete bir harfe basıldığında gelecebilecek kelimeleri listeler
$(function(){

    kelimeler=[
    "javascript",
    "bootstrap4",
    "php",
    "java"
    ];

    $('#listele').autocomplete({
        source:kelimeler,
        minLength:2
    })

})
*/
/*
$(function(){
    $('#tarih-sec').datepicker({
        showButtonPanel:true,
        changeMonth:true,
        changeYear:true,
        numberOfMonths:2,
        showWeek:true,
        altField:'#ayrinti',
        altFormat:'d, MM, yy'
    })
})
*/

/*
$(function(){
    $('#ac').click(function(){
        $('#dialog').dialog();
    })
})
*/
/*
$(function(){
    $('#menu').menu()
})
*/
/*
// yüklenme imgeci gibi
$(function(){
    $('#progressbar').progressbar({
        value:70
    })
})
*/

/*
$(function(){
    $('#tabs').tabs()
})
*/
/*
//nesneyi sürükleme özelliği kazandırır
$(function(){
    $('#kare').draggable()
    $('#oynat').draggable()
    
})
*/
/*
//nesneler üst üste geldiğinde bir olay oluşturur
$(function(){
    $('#kare').droppable({

        accept:"#oynat1",

        drop:function(){
            alert('nesne geldi')
        }
    })
    $('#oynat').draggable({revert:'invalid'});
    $('#oynat1').draggable({revert:'invalid'});
    
})
*/
/*
//nesnelerii boyutlandrımamızı sağlıyor
$(function(){
    $('#kare').resizable()
})
*/
/*
//nesneleri seçmemizi sağlar
$(function(){
    $('#kurslar').selectable()
})
*/
/*
//nesneleri tutup sıralamada yer değiştirmemizi sağlar
$(function(){
    $('#kurslar').sortable()
})
*/

$(function(){
    $('textarea').keyup(function(){
        var limit=10;
        var say=$(this).val().length;
        $('b').text('girilen karakter sayısı :'+say);
        if(say>limit){
            $('b').text('limite ulaştınız')
        }
    });

    $('#gonder').click(function(){
        var limit=10;
        var say=$('textarea').val().length;
        $('b').text('girilen karakter sayısı :'+say);
        if(say>limit){
            alert('karakter sınırlaması var')
        }else{
            alert('mesajınız başarıyla gönderildi')
        }
    })

})





















