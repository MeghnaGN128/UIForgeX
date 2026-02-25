// async await,Promise,callback hell
// sync
 console.log("hello world");
 console.log("welcome to js");
 console.log("welcome to js in various ways");   
 
//  asyn
function display(){
    console.log("try to work with settimeout");
}

setTimeout(display, 2000);
setTimeout(display, 4000);

setTimeout(function(){
    console.log("try to work with settimeout in anonymous function");
}, 3000);


setTimeout(() => {          
    console.log("try to work with settimeout in arrow function");
}, 5000);

// callback
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(5,10,(a, b)=>{
    console.log(a+b);
});

const team=() => {
    
        console.log("team is playing");
    };

    setTimeout(team, 2000);

// callback hell
// nesting
 let age = 20;
    if(age>=18){       
        if(age>=60){
            console.log("senior");
        }else{
            console.log("middle");
            }
    }else{
            console.log("child");
        }

// nested loop
for(let i=0;i<5;i++){
    let str ="";
    for(let j=0;j<5;j++){
        console.log(i,j);
        str = str +j;
    }
    console.log(i,str);
}

function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data",dataId);
            getNextData();
        
    }, 2000);


}

getData(1,()=>{
    console.log("1 data received");
    getData(2,()=>{
        console.log("2 data received");
        getData(3,()=>{         
            console.log("3 data received");
        });
    });
});
setTimeout(() => getData(1), 3000);
setTimeout(() => getData(2), 6000);
setTimeout(() => getData(3), 9000); 

// promise
let promise = new Promise((resolve, reject) => {
    console.log("promise is pending");
    // resolve("promise is resolved");
    reject("promise is rejected..");
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("data", dataId);
            // resolve("data received");
            reject("error");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

// Usage of promise using then and catch
const getData = () => {
    return new Promise((resolve, reject) => {
       console.log("fetching data...");
       resolve("data received");
    // reject("error in fetching data");
    });
};

let promise0 = getData();
promise.then((res) => {
    console.log("promise is resolved",res);
});
promise.catch((err) => {
    console.log("promise is rejected",err);
});

// promise chaining
function asyncFunc1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("async function executed");
                resolve("data received");
        }, 9000);
    });
}

function asyncFunc2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("async function executed");
                resolve("data received");
        }, 4000);
    });
}

console.log("before calling async function");
 asyncFunc1().then((res) => {
    console.log("promise is resolved",res); 
    // return "next data";

asyncFunc2().then((res) => {
    // console.log("promise is resolved",res); 
    // return "next data";
});
});

console.log("before calling async function");
let promise9 = asyncFunc1();
promise9.then((res) => {
    console.log("promise is resolved",res); 
    // return "next data";

    let promise2 = asyncFunc2();
promise2.then((res) => {
    // console.log("promise is resolved",res); 
    // return "next data";
});
});

console.log("before calling async function");
let promise2 = asyncFunc2();
promise2.then((res) => {
    console.log("promise is resolved",res); 
    return "next data";
});


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("data received");
            // reject("error");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}


let promise1 = getData(1);
promise1.then((res) => {
    console.log("promise is resolved",res);
});


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("data received");
            // reject("error");
        }, 3000);
    });
}

getData(1).then((res) => {
    console.log("promise is resolved",res);
    getData(2).then((res) => {
        console.log("promise is resolved",res); 
    });
});

getData(1).then((res) => {
   return getData(2);
}).then((res) => {
    console.log("promise is resolved",res); 
});

getData(1).then((res) => {
   return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log("promise is resolved",res); 
});
console.log("1 data received");
getData(1).then((res) => {
    console.log("2 data received");
   return getData(2);
}).then((res) => {
    console.log("3 data received");
    return getData(3);
}).then((res) => {
    console.log("4 data received");
    console.log("promise is resolved",res); 
});

getData(1,()=>{
    console.log("1 data received");
    getData(2,()=>{
        console.log("2 data received");
        getData(3,()=>{         
            console.log("3 data received");
        });
    });
});

//async await
async function displayData(){
    console.log("before fetching data");
}//return promise automatically

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
    console.log("fetching data...");
    resolve("data received");
        }, 3000);
});};

// // await api();//wait is only valid in async functions and the top level bodies of modules
async function displayData(){
    await api();//1st call
    await api();//2nd call
    console.log("after fetching data");
}

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("data received");
            // reject("error");
        }, 3000);
    });
}

async function getDataAll() {
    console.log("1 data received");
    await getData(1);
    console.log("2 data received");
    await getData(2);
    console.log("3 data received");
    await getData(3);
    console.log("4   data received");
    await getData(4);
    console.log("5 data received");
    await getData(5);
    console.log("6 data received");
    await getData(6);
    console.log("all data received");
}

//IIFE=Immediately Invoked Function Expression
(async function getDataAll() {
    console.log("1 data received");
    await getData(1);
    console.log("2 data received");
    await getData(2);
    console.log("3 data received");
    await getData(3);
    console.log("4   data received");
    await getData(4);
    console.log("5 data received");
    await getData(5);
    console.log("6 data received");
    await getData(6);
    console.log("all data received");
})();

// beginning of new code provided by user

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
//letter,digit_,,$ ordeqrstuvwxyz :) of message truncated continue ...