// /*let x =1;
// console.log(x);//1
// {
//   let x=2;
// console.log(x);//2
// }
// console.log(x);//2
// //컨트롤 +d를 누르면 같은단어들을 한번에 바꿀 수 있음
//
// var x="ABC";  //리터럴 부분
// var x=`ABC`;  //리터럴 부분
// var x='ABC';  //리터럴 부분
// x = [1,2,3];  //리터럴 부분
// x = true; //리터럴 부분
// x =1;//리터럴 부분
// x = {};//리터럴 부분
//
// //Object - 객체 / 자바스크립트에서는 함수도 객체
// x = function(a, b){
// return a+b;
//
// }
//
// x = new Array(1,2,3);//동적할당 방법 - new
// x = [1,2,3];
//
// for of
//
// let a ="5";
// let b =5;
// console.log(a==b);//== true
// console.log(a===b);// ===false
// console.log(typeof(a));// string
// console.log(typeof(b));// number
// /* 공백 및 0을 설명 하는 것
// false
// 0
// null //초기화되지 않은 객체
// undefined//정의되지 않은 객체
// NaN//Not - a - number / infinity
// ""
//
// let c = new Boolean(false);
// console.log(c);
//
// let d = new Boolean(false);
// if(d){
//   console.log("d는 참 입니다.");
//
// }
// */
// //구구단 출력 코드
// /*
// for(let x=2; x<10; x++){
//   for(let y=1; y<10; y++){
// console.log(x+"x"+y+ "="+x*y);
//   }
// }
//
// //구구단 배열 출력 코드
// /*
// let numbers = [2,3,4,5,6,7,8,9];
// for(let x=0; x<numbers.length; x++){
//   for(let y=0; y<numbers.length; y++){
// console.log(numbers[x]+"x"+ numbers[y] +"="+numbers[x]*numbers[y]);
//   }
// }
//
// //구구단 배열 출력 코드(최적화)
// let numbers = [2,3,4,5,6,7,8,9];
// for(let x of numbers){
//   for(let y of numbers){
// console.log(x+"x"+y+"="+x*y);
// console.log(`${x} x ${y} = ${x * y}`); //또 다른 고급진 출력 방법
//   }
// }
//
// //log쓰고 엔터 쓰면 콘솔로그 나옴
// console.log("5"+1); //문자열로 바꿈 결과 51
// console.log("5"-1);//마이너스는 숫자로 인식하여 마이너스 결과 4
//
//
// POST``
// fn`A B C`
// function fn(["A B C"]) {
//
// }
// */
// let arr=[1,2,3]; //array leteral
// let arr2=[4,5,6];
// //console.log(arr.concat(arr2));
// //console.log(arr.copyWithin(2 ,1 ,2)); //번지 옮기기 - 배열
//
// let filtered = arr.filter((obj) => obj >1);
//
// console.log(filtered);
//
// console.log(arr.find(n=>n===2));
// /*
// let mapped = arr.map(n=>n*n);
// console.log(mapped);
//
// arr //instance
// arr.prototype == arr2.prototype
// let arr=new Array(1,2,3);
// let arr=new Array(10);
// let arr=[];
// arr.length=10;
//
// arr[0] //1
// console.log(arr);
// */
// 전체 주석 단축키 컨트롤+a 후 / - 주석해제는 또 한번 하기

/*let slime = new Object();
slime.hp = 10;
slime.name = "Hi Monster"
physics.activate(gameObject)
gameObject.body = new body();

//기본 오브젝트 Object , Array, String, Number, Boolean, Date, Math, function
let slime = {//자바스크립트 구조체
hp :10,
name: "Hi Monster"

}*/
let arr={

}

let Slime = function(){
  this.hp=10;
  this.name="Hi Monster";

// let slime = new Slime();
//
// console.log(slime.hp);//구조체 값 하나 출력
// console.log(slime["hp"]);//다른 방법 값 하나 출력
//
// var abc =10;
// console.log(window);

setInterval(()=>{ //this 문법 문제가 생길 것 같은건 화살표 => 함수 꼭써라!!!
this.hp +=10;
},1000)
}
