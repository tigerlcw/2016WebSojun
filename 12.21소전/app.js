/*let a=6;
let b=10;
let c = a+b;
console.log(c);

//디버그 실행은 F5
//디버그 할때 F11은 프로그램 코드의 흐름을 보여줌.
//자바스크립트 피보나치 수열 짜기
function fibonacci(n){
if(n<=2)
{
    return 1;
}
else
{
    return fibonacci(n-1)+fibonacci(n-2);
}

}
console.log(fibonacci(10));//피보나치 함수로 이동
*/
const net = require('net');
let client = net.connect({port:9999,host:'localhost'},()=>{
console.log('서버와 연결됨')

})

/*
const os=require("os");
console.log(os.arch());

const fs=require("fs");

fs.watch('./',(event,filename)=>{
    console.log(`event type is: ${event}`);
    if(filename){
          console.log(`filename provided: ${filename}`);

}else{
     console.log('filename not provided');

}
});


let data =fs.readFile('app.js','utf-8',(err,data)=>{
    fs.writeFile('app-reversed.js',data.split("").reverse().join(""));
//console.log(data); 파일의 문서를 보여줌(텍스트)
});
var name = "의적홍길동";
var nameReverse = name.split("").reverse().join("");
console.log(name+"<->"+nameReverse);
//동기 - fs.readFileSync
*/