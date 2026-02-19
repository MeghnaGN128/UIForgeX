// //Arrays
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

//Looping over an array
 let products_names=["pen","book","laptop","phone","tablet"];
 console.log(products_names[0]);
 console.log(products_names[1]);
 console.log(products_names[2]);
 console.log(products_names[3]);
 console.log(products_names[4]);
for(let i=0;i <= products_names.length;i++){
    console.log(products_names[i]);
}
// first.js:578 book
// first.js:578 laptop
// first.js:578 phone
// first.js:578 tablet
// first.js:578 undefined
for(let i=1;i <= products_names.length;i++){
    console.log(products_names[i]);
}//it is not standard way of using for loop in array
for(let i=0;i < products_names.length;i++){
    console.log(products_names[i]);
}
//for-of loop and for-in loop can also use
//for-of loop
let products_names=["pen","book","laptop","phone","tablet"];
for(let products of products_names){
console.log(products);
}
let products_names=["pen","book","laptop","phone","tablet"];
for(let products of products_names){
console.log(products.toUpperCase());
}
//for-in loop
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

//array methods
// Push()
let prices=[250,645,300,900,50];
prices.push(89,88,90);
console.log(prices);
// Pop()
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
// toString()
let prices3=[250,645,300,900,50];
console.log(prices3.toString());
console.log(typeof prices3);
// concat()
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
