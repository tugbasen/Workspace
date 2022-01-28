const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req, res)=>{
    res.end('hey');
});

server.listen(3000);

const io = socketio.listen(server);

io.sockets.on('connection',(socket)=>{
    console.log('kullanıcı bağlandı');

    setTimeout(()=>{
        socket.emit('merhaba de', {country: 'türkiye'});
    },2000 );

    socket.on('selam ver', (data)=>{
        console.log(data);
    });

    socket.on('disconnect', ()=>{
        console.log('kullanıcı ayrıldı');
    });
});
















