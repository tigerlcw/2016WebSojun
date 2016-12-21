const net = require('net');
let server = net.createServer((client) => {
console.log('클라이언트가 연결됨.');
});

server.listen(9999, 'localhost',()=>{
    console.log('서버 작동중!')
})
