//functions                                   
// function myFunction(){
//     console.log("i am a girl");
//     console.log("my name is xyz");
//     console.log("i am a girl");
//     console.log("my name is xyz");
// }
// myFunction();
// myFunction();
// function myFunction(msg,n){
//     //parameter->msg
//     console.log(msg*n);
// }
// myFunction("Hello World!",700);//argument
// function myFunction(msg,n){
//     //parameter->msg
//     console.log(msg*n);
// }
// myFunction("Hello World!",700);//arguments NaN-not a number
// function sum(p,q)//local variables =>parameters{
//     sum=p+q;
//     console.log("before return");
//     return sum;
//     //  console.log("after return");//after return nothing will run in block
// }
// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let res = sum(num1, num2);
// console.log(res);

//arrow functions
// function sum(a, b){
//     return a+b;
// }
//Modern JS
// const mySum = (a,b)=>{
//     console.log(a+b);
// }
// const mySum = (a,b)=>{
//     return a+b;
// };
// const printHi=()=>{
//     console.log("hi");
// };//more prefferable
// const printHi=()=>console.log("hi");

// function countVowels(str){
//     let count=0;
//     for(let char of str){
//         // console.log(char);
//           if(char==="a" ||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++
//         }
//     }
   
// return count;
// }

// const countVow=(str)=>{
//     let count=0;
//     for(let char of str){
//         // console.log(char);
//           if(char==="a" ||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++
//         }
//     }
   
// return count;
// }
// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// });
// let arr=["Jamkhandi","Mudho","Mangalore","Bangalore"];
// arr.forEach((val)=>{
//     console.log(val);
// });
// let arr=["Jamkhandi","Mudho","Mangalore","Bangalore"];
// arr.forEach((val,idx)=>{
//     console.log(val,idx);
// });
// let arr=["Jamkhandi","Mudho","Mangalore","Bangalore"];
// arr.forEach((val,idx)=>{
//     console.log(val.toLowerCase(),idx);
// });
// let arr=["Jamkhandi","Mudho","Mangalore","Bangalore"];
// arr.forEach((val,idx)=>{
//     console.log(val.toUpperCase(),idx);
// });
// let arr=["Jamkhandi","Mudho","Mangalore","Bangalore"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// });

// let arr=[1,2,3,4,5];
// let calcSquare=(val)=>{
//     console.log(val*val);
// };
// arr.forEach(calcSquare);

//More methods in array
//Map method
// let arr=[1,2,3,4,5];
// let mapExample=arr.map((val)=>{
//     return val;
// });
// console.log(mapExample);

// let arr=[1,2,3,4,5];
// let mapExample=arr.map((val)=>{
//     return val*val;
// });
// console.log(mapExample);

// let arr=[1,2,3,4,5];
// let mapExample=arr.map((val)=>{
//     return val*2;
// });
// console.log(mapExample);

//filter method
//even
// let arr=[1,2,3,4,5,6,7];
// let num=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(num);
//odd
// let arr=[1,2,3,4,5,6,7];
// let num=arr.filter((val)=>{
//     return val % 2 !== 0;
// });
// console.log(num);
// let arr=[1,2,3,4,5,6,7];
// let num=arr.filter((val)=>{
//     return val>5;
// });
// console.log(num);

//arr.reduce()
// let arr=[1,2,3,4,5,6,7];
// let ans=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(ans);
//max element/large
// let arr=[4,3,1,2,5];
// let ans=arr.reduce((res,curr)=>{
//     return res>curr?res:curr;
// });
// console.log(ans);//5
//min/small
// let arr=[4,3,1,2,5];
// let ans=arr.reduce((res,curr)=>{
//     return res<curr?res:curr;
// });
// console.log(ans);//5

//  let arr=[87,93,64,99,86];
// let num=arr.filter((val)=>{
//     return val>90;
// });
// console.log(num);

let n=prompt("Enter a number:")
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;//1(0),2(1),3(2)......
}
console.log(arr);
let ans=arr.reduce((res,curr)=>{
    return res+curr;
});

console.log(arr);
let ans1=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(ans);
console.log(ans1);