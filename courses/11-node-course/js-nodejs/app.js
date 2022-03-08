//console.log('hello world', 2 ,'');

// var data='hi everyone'
// var word='take me'

// console.log(data + word)

// const slugify = require('slugify')
// const text = "fenerbahçe üçüncü maçına çıkıyor"
// const slug = slugify(text,'*')
// console.log(slug)


// const events = require('events');
// const eventEmitter = new events.EventEmitter();

// eventEmitter.on('selamla',(isim)=>{
//     console.log(`merhaba ${isim}`)
// })

// const isim = "mehmet"
// eventEmitter.emit('selamla', isim)

//const fs = require('fs');
/*
fs.readFile('demo.txt',(error, data)=>{
    if(error)
        console.log(error);
    
    console.log(data.toString());
    console.log("dosya içeriği okundu");
});

const demoDosyasi = fs.readFileSync("demo.txt");
console.log(demoDosyasi.toString());
console.log('dosya okuma bitti')
*/

// fs.unlink('demo.text',(err)=>{
//     if(err)
//         throw err;
    
//     console.log('dosya silindi');
// });

// const http=require('http');
// const server =http.createServer((request, response)=>{
//     console.log('bir istekte bulunuldu');

//     response.write("<b>merhaba</b>dünya");
//     response.end();
// });

// server.listen(3000)

// const express = require('express');
// const app= express();

// app.set('view engine', 'pug');

// app.get('/', (req, res)=>{
//     res.render('index', {name: 'mehmet', job:'developer'});
// });

// app.get('/home', (req, res)=>{
//     res.render('home');
// });

// app.get('/contact', (req, res)=>{
//     res.render('contact');
// });

// app.listen(3000,()=>{
//     console.log('express server çalıştı');
// });


const express = require('express');
const app = express();

const signIn = require('./routes/signIn');

app.use('/', signIn);

app.listen(3000,()=>{
    console.log('express server çalışır')
});
































