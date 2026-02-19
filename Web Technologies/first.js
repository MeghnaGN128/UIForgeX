console.log("Hello World");
console.log("I am learning JavaScript");
console.log("I am intrested in Frontend Development");

//variables
fullName="tony stark";
age=34
price=89.0;
x=null;
y=undefined;
isActive=true;
console.log(isActive)
console.log(x);
console.log(y);
console.log(age);
console.log(price);
console.log(fullName);

//bad practice   //JS Dynamically typed variable
fullName=78;
console.log(fullName);

//4 major rules in Variables
//case sensitive in below example that makes understanding conflicts in code
fullname="manya";
fullName="radha";
console.log(fullname);
console.log(fullName);
//letter,digit,_,$ allowed space not allowed
full name="jineeta";
console.log(full name);//The declaration was marked as deprecated here.
//_,$,letters allowed in beging of variable name not digit,space or other symbol allowed
123fullName="xyz";
console.log(123fullName);//An identifier or keyword cannot immediately follow a numeric literal.
//reserved word cannot use as variable
console="pqr";
console.log(console);//console.log is not a function
Console="pqr";
console.log(Console);

var age=24;
var age=94;
var age=84;
console.log(age);

//ES6 features(ECMA Script)
let fullName="denil";
let age=45;
let totalprice=800.0;
console.log(fullName);
console.log(age);
console.log(totalprice);

let x=23;
let x=98;
let x=78;
console.log(x);//Identifier 'x' has already been declared

let x=23;
 x=98;
 x=78;
console.log(x);//write way to use let

const x=78;
x=67;
x=98;
console.log(x);//Assignment to constant variable.

const x=78;
console.log(x);//write way to use const

const pi=3.142;
console.log(pi);//write way to use const

let a;
console.log(a);//undefined

let a;
a=90;
console.log(a);

 const a;
 console.log(a);//Missing initializer in const declaration

{
    let a=5;
    let a=9;//dentifier 'a' has already been declared
    console.log(a);
}
{
    let p=9;
    console.log(p);
}

//Data Types in JS

let x=BigInt("1234");
console.log(x);//1234n

let x=BigInt("1234");
console.log(typeof x);//bigint

const product={
    productName:"soap",
    quality:"good",
    quantity:5,
    isGood:true,
    companyNumber:BigInt("1234567")
};
console.log(product);
console.log(product.quality);
console.log(product.companyNumber);
console.log(product.isGood);
console.log(product.productName);
console.log(product.quantity);
console.log(product["companyNumber"]);
console.log(product["isGood"]);
console.log(product["productName"]);
console.log(product["quality"]);
console.log(product["quantity"]);

product.productName = "pen";
console.log(product.productName);

product["isGood"] = false;
console.log(product["isGood"]);

const g=98;
g=90;
console.log(g);//Assignment to constant variable.

const product={
    productName:"Parker Jotter Standard CT Ball Pen (Black)",
    rating:4,
    isDealActive:true,
    price:270,
    offer:5
};
console.log(product);
console.log(product.rating);
console.log(product.offer);
console.log(product.isDealActive);
console.log(product.productName);
console.log(product.price);

const profile={
   fullName:"keerti",
   followers:123,
    isFollow:true,
following:123
    
};
console.log(profile);

//Operators

// Arithmetic operator
let a=9;
let b=8;
console.log(a+b);
let a=9;
let b=8;
let c=a+b;
console.log(c);
let a=9;
let b=8;
console.log("a =",a,"&b =",b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);
console.log("a % b =",a % b);
console.log("a ** b =",a ** b);
console.log("a ++ =",++a);
console.log("a -- =",a--);
console.log("++a  =",++ a);
console.log("--a =",--a);

//unary operators
let a=5;
let b=2;
console.log("a =",a,"&b =",b);
a = a+2;
a--
console.log("a++ =",a++);
console.log("a =",a);
console.log("a-- =",a--);
console.log("a =",a);
console.log("++a  =",++a);
console.log("a =",a);
console.log("--a =", --a);
console.log("a =",a);

//Assignment operators
let a=5;
let b=2;
a+=4;
a-=4;
a*=9;
a/=98;
console.log("a =",a);//9

//Comparison Operators
let a=5;
let b=2;
console.log("a == b",a == b);
console.log("a != b",a != b);
console.log("a === b",a === b);
console.log("a !== b",a !== b);
let a=1;
let b=true;
console.log("a == b",a == b);
console.log("a != b",a != b);
console.log("a === b",a === b);
console.log("a !== b",a !== b);
let a=1;//number
let b="1";//String->number
console.log("a == b",a == b);
console.log("a != b",a != b);
console.log("a === b",a === b);
console.log("a !== b",a !== b);
let a=1;//number
let b="9";//String->number
console.log("a == b",a == b);
console.log("a != b",a != b);
console.log("a === b",a === b);
console.log("a !== b",a !== b);
let a=1;//number
let b=9;//String->number
console.log("a == b",a == b);
console.log("a != b",a != b);
console.log("a === b",a === b);
console.log("a !== b",a !== b);
console.log("a <= b",a <= b);
console.log("a >= b",a >= b);
console.log("a < b",a < b);
console.log("a > b",a > b);

//Logical operators
//Logical AND
let a=6;
let b=3;
let cond1 = a > b;//true
let cond2 = a===6;//true
console.log("cond1 && cond2 = ",cond1 && cond2);//true
// Logical OR
let a=6;
let b=3;
let cond1 = a > b;//true
let cond2 = a===b;//flase
console.log("cond1 || cond2 = ",cond1 || cond2);//true
//Logical NOT
let a=6;
let b=3;
let cond1 = a > b;//true
let cond2 = a===b;//flase
console.log("!(a<b) = ",!(a<b));//true

//Conditional Statements
//if condition
let color;
let mode="light-mode";
if(mode === "dark-mode"){
    color = "black";
}
if(mode === "light-mode"){
    color = "white";
}
console.log(color);
let age=10;
if(age == 18){
    console.log("Eligible for Vote")
}
// //if-else condition
let mode="light-mode";
if(mode === "dark-mode"){
    color = "black";
}else{
    color = "white";
}
console.log(color);
let age=20;
if(age >= 18){
    console.log("Eligible for Vote")
}else{
    console.log("not");
}
//odd And even
let num=9;
if(num%2 ===0){
    console.log(num ,"is even");
}else{
    console.log(num, "is odd");
}
//syntax -> rules
//else-if statement
let age=28;
if(age<10){
    console.log("child");
}else if(age<=18){
    console.log("childldren");
}else if(age>=18 && age<=25){
    console.log("junior");
}else if(age>=25 && age<=40){
    console.log("senior");
}else{
    console.log("aged");
}
ternary operators
let age = 9;
let result=age>18?"adult" : "not adult";
console.log(result);
let age = 69;
age>18? console.log("adult") : console.log("not adult");//simpler,compact if-else
 
alert("hi");
prompt("ji");
let num=prompt("Enter a number:");
if(num % 5 ===0){
    console.log(num,"is multiple of 5");
}else{
    console.log(num,"is not  multiple of 5");
}
let score=50;
if(score>=80 && score<=100){
  console.log(score,"A");
 }else if(score>=70 && score<=89){
    console.log(score,"B");
  }else if(score>=60 && score<=69){
     console.log(score,"c");
   }else if(score>=50 && score<=59){
      console.log(score,"D");
     }else if(score>=0 && score<=49){
        console.log(score,"F");
      }
let score=50;
let score=prompt("enter your score (0-100):")
let grade;
if(score>=80 && score<=100){
  grade="A";
 }else if(score>=70 && score<=89){
      grade="B";
  }else if(score>=60 && score<=69){
     grade="C";
   }else if(score>=50 && score<=59){
      grade="D";
     }else if(score>=0 && score<=49){
        grade="F";
      }
console.log(grade);

//Loops
//for loop
//print 1 to 5
for(let i=1;i<=5;i++){
    console.log("Hello");
}
//Calculate sum of 1 to 5
let sum=0;
let n=200;
for(let i=1;i<=n;i++){
    sum=sum+i;
}
console.log("sum =",sum);
for(let i=1;i<=5;i++){
    console.log("i =",i);
}
console.log(i);//i is not defined
for(var i=1;i<=5;i++){
    console.log("i =",i);
 }
 console.log(i);
for(let i=1;i>=0;i++){
     console.log("i =",i);
}

// while loop
let i=1;
while(i<=5){
    console.log("i =",i);
    i++;
}
let i=9;
while(i<=5){
    console.log("i =",i);
    i++;
}

// do-while loop
let i=9;
do{
    console.log("hello");
    i++;
}while(i<=5);
let i=1;
do{
    console.log("hello");
    i++;
}while(i<=5);
let i=1;
do{
    console.log("i =",i);
    i++;
}while(i<=5);

//for-of loop
let str="hiranya";
let size = 0;
for(let i of str){
    //iterator-> characters
    console.log("i =",i);
    size++;
}
console.log("string size =",size);

//for-in loop
let student={
    name:"ganana",
    age:54,
    cgpa:9.9,
    isPass:true
};
for(let i in student){
    console.log("i =",i,"value =",student[i]);
}

//even number from 0 to 100
for(let i=0;i<=100;i++){
    // console.log("i =",i);
    if(i%2===0){
        console.log("i =",i);
    }
}
//odd
for(let i=0;i<=100;i++){
    // console.log("i =",i);
    if(i%2!==0){
        console.log("i =",i);
    }
}
let gameNum = "25";
let s = prompt("guess number:");
while(s !== gameNum){
 s=prompt("wrong number,guess number:");
}
console.log("won the game");

//Strings
let str="hello";
console.log(str);
let str='hello';
console.log(str);
let str="opps';//Invalid or unexpected token
console.log(str);
let str='hello';
 console.log(str);
console.log(str.length);
 console.log(str[4]);

//Template Literals
let obj={
    item: "laptop",
    price:40000,
};
let output =`the cost of${obj.item}is ${obj.price} rupees`//number is string part here
console.log(output);
console.log("the cost of",obj.item ,"is",obj.price, "rupees");

let sentence = `this is a template literal ${1+2+3}`;
console.log(sentence);
console.log(typeof sentence);
console.log("hello\nworld");
console.log("hello\tworld");
let str= "Hello\tWorld"
console.log(str.length);//11

//String Methods
//str.toUpperCase();
let str ="Shree Venkatesh swamy temple";
let newStr = str.toUpperCase();
console.log(newStr);
let str ="Shree Venkatesh swamy temple";
// str.toUpperCase();
console.log(str);//Shree Venkatesh swamy temple-original string cannot be change directly
let str ="Shree Venkatesh swamy temple";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);//Shree Venkatesh swamy temple
                     SHREE VENKATESH SWAMY TEMPLE
let str ="Shree Venkatesh swamy temple";
str = str.toUpperCase();
console.log(str);//SHREE VENKATESH SWAMY TEMPLE
//str.toLowerCase();
let str ="Shree Venkatesh swamy temple";
 str = str.toLowerCase();
 console.log(str);//shree venkatesh swamy temple
// str.trim()
let str ="          Shree Venkatesh swamy     temple          ";
 console.log(str.trim());//Shree Venkatesh swamy     temple-it will trim starting and end spaces
// str.slice(1,5);
let str="Upendra";
console.log(str.slice(1,5));//pend
let str="Upendra";
let result= str.slice(1,5);
console.log(result);//pend
//str1.concat(str2)
let str1="Upendra";
let str2=" is hansome"
console.log(str1.concat(str2));//Upendra is handsome
let str1="Upendra";
let str2=" is hansome"
let res = str1.concat(str2);
console.log(res);//Upendra is handsome
str1 + str2;
let str1="Upendra";
 let str2=" is hansome"
let res = str1 + str2;
console.log(res);//Upendra is handsome
let str1="Upendra";
 let str2="is hansome"
let res = "Hi good morning" + str1 + str2;
console.log(res);//Hi good morningUpendra is hansome
let str1="Upendra";
 let str2=" is hansome"
console.log(str1 + str2);//Upendra is handsome
// str1.replace("U","H");
let str1="Upendra";
let str2=" is hansome"
let res = str1.replace("U","H");
console.log(res);//Hpendra
str.replace("a","p")
let str="Upendra";
console.log(str.replace("U","o"));//opendra
let str="Upendraaaaaaaaaaa";
console.log(str.replace("a","p"));//Upendrpaaaaaaaaaa
//str.replaceAll("a","p")
let str="Upendraaaaaaaaaaa";
console.log(str.replaceAll("a","p"));//Upendrppppppppppp
//str.charAt(3)
let str = "IliketolearnJS";
let res=str.charAt(3);
console.log(res);

let str= prompt("user name");
let res= "@"+str+str.length;
console.log("username:",str,"\t","updated username:",res);

let str= prompt("user name");
console.log("Updated username:","@"+str+str.length);

//Arrays
let marks={
    stu1:98,
    stu2:78,
};//here key value become pair but array is linear
console.log(marks);
let marks_student1=98;
let marks_student2=67;
console.log(marks_student1);
console.log(marks_student2);
let marks_students=[29,35,99,86,33.67];
console.log(marks_students);
console.log(marks_students.length);//right waay to write arrays
let products_names=["pen","book","laptop","phone","tablet","charger","bag"];
console.log(products_names);
console.log(products_names.length);
console.log(typeof products_names);
console.log(products_names[5]);

Looping over an array
 let products_names=["pen","book","laptop","phone","tablet"];
 console.log(products_names[0]);
 console.log(products_names[1]);
 console.log(products_names[2]);
 console.log(products_names[3]);
 console.log(products_names[4]);
for(let i=0;i <= products_names.length;i++){
    console.log(products_names[i]);
}
first.js:578 book
first.js:578 laptop
first.js:578 phone
first.js:578 tablet
first.js:578 undefined
for(let i=1;i <= products_names.length;i++){
    console.log(products_names[i]);
}//it is not standard way of using for loop in array
for(let i=0;i < products_names.length;i++){
    console.log(products_names[i]);
}
for-of loop and for-in loop can also use
for-of loop
let products_names=["pen","book","laptop","phone","tablet"];
for(let products of products_names){
console.log(products);
}
let products_names=["pen","book","laptop","phone","tablet"];
for(let products of products_names){
console.log(products.toUpperCase());
}
for-in loop
main
let products_names=["pen","book","laptop","phone","tablet"];
for(let p in products_names){
console.log(products_names[p].toUpperCase());
}
let arr=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
for (let x of arr){
    sum += x;
}
let avg = sum / arr.length;
console.log(`avg=${avg}`);
console.log(sum);
let prices=[250,645,300,900,50];
let i=0;
for(let val of prices){
    // console.log(`value at index ${i}=${val}`);
    let offer = val/10;
   prices[i]= prices[i]-offer;
    console.log(`value after offer=${prices[i]}`)
    console.log(prices[i]);
     i++;
}
for(let i=0;i<prices.length;i++) {
 let offer = prices[i]/10;
 prices[i]-= offer;\ 
}
  console.log(prices);

// arrays
//array methods
// Push()
let prices=[250,645,300,900,50];
prices.push(89,88,90);
console.log(prices);
// Pop()

array methods
Push()
let prices=[250,645,300,900,50];
prices.push(89,88,90);
console.log(prices);
Pop()
// main
let prices1=[250,645,300,900,50];
prices1.pop();
prices1.pop();
prices1.pop();
prices1.pop();
prices1.pop();
console.log(prices1);
let prices1=[250,645,300,900,50];
console.log(prices1.pop());
console.log(prices1);
 arrays
// toString()
let prices3=[250,645,300,900,50];
console.log(prices3.toString());
console.log(typeof prices3);
// concat()

toString()
let prices3=[250,645,300,900,50];
console.log(prices3.toString());
console.log(typeof prices3);
concat()
 main
let marvel=["thor","spiderman","ironmen"];
let dc_heroes=["suoerman","batman"];
let res=marvel.concat(dc_heroes);
console.log(res);
let marvel=["thor","spiderman","ironmen"];
let dc_heroes=["superman","batman"];
let res=marvel + dc_heroes;
console.log(res);
let marvel=["thor","spiderman","ironmen"];
let dc_heroes=[,"superman","batman"];
console.log(marvel + dc_heroes);
 arrays
// unshift()
let marvel=["thor","spiderman","ironmen"];
marvel.unshift("mgn");
// shift()
let marvel=["thor","spiderman","ironmen"];
let val=marvel.shift("mgn");
console.log(val);
// slice(s,e);
let marvel=["thor","spiderman","ironmen","superman","antman","strange"];
console.log(marvel);
console.log(marvel.slice(1,3));
// splice()
unshift()
let marvel=["thor","spiderman","ironmen"];
marvel.unshift("mgn");
shift()
let marvel=["thor","spiderman","ironmen"];
let val=marvel.shift("mgn");
console.log(val);
slice(s,e);
let marvel=["thor","spiderman","ironmen","superman","antman","strange"];
console.log(marvel);
console.log(marvel.slice(1,3));
splice()
main
let marvel=["thor","spiderman","ironmen","superman","antman","strange"];
console.log(marvel);
console.log(marvel.splice(2,2,"jay"));
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.splice(2,2,5));
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies.shift());
console.log(companies);
console.log(companies.splice(1,2,"Ola"));
console.log(companies);
console.log(companies.push("Amazon"));
console.log(companies);
