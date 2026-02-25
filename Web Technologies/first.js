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

 async-await-callback-callbackhell-promise-promise-chaining
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

//class and objects

//Objects
//first way to write object
const student ={
    fullName : "Radha Ram",
    marks:94.48,
    printMark : function(){
        console.log("marks=",this.marks);
    },
};

//second way to write object
const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const employee1={
    calcTax1(){
        console.log("tax rate is 10%");
    },
    calcTax2 : function(){
        console.log("tax rate is 20%");
    }
};

const mahi ={
      salary:50000,
      calcTax(){
        console.log("tax rate is 20%");
    },//1st priority
};
const mahi1 ={
      salary:50000,
};
const mahi2 ={
      salary:50000,
};
const mahi3={
      salary:50000,
};
const mahi4 ={
      salary:50000,
};
const mahi5 ={
      salary:50000,
};


mahi.__proto__ = employee;//using prototype
mahi1.__proto__ = employee;
mahi2.__proto__ = employee;
mahi3.__proto__ = employee;
mahi4.__proto__ = employee;
mahi5.__proto__ = employee;

//Classes
class MarutiCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}
 let eritiga1 = new MarutiCar();
 eritiga.setBrand("Enova");
 let audio1= new MarutiCar();

 //Constructor()=reserved keyword-we will use as name constructor only in js
 //We can get constructor automatically, and also we can craete custom constructir
class MarutiCar{
    constructor(brand,engine){
        console.log("creating new  Object");
        this.brand = brand;
        this.engine = engine;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}

 let eritiga = new MarutiCar("Enova",1);
 console.log(eritiga);
  let audio= new MarutiCar("Indica",2);
  console.log(audio);

  //Inheritance in JS
 class MarutiCar{
    constructor(brand,engine){
        console.log("creating new 1 Object");
        this.brand = brand;
        this.engine = engine;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    Lambargini(){
    console.log("nice car")
   }
}

class Fortuner extends MarutiCar{
   Lambargini(){
    console.log("nice car")
   }
   constructor(brand,engine){
        console.log("creating new 2  Object");
        super(brand,engine);
        // this.color = color;
        // console.log("creating new  3 Object");
    }
}

class Gang extends MarutiCar{
   Lambargini(){
    console.log("nice Honda")
   }
}

let object = new Fortuner("blue"); 
 
let Data ="secret info";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
   
    viewData(){
        console.log("data =",Data)
    }

}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
       Data = "new value";

    }

}

let stu1 = new User("Radha","radha@gmail.com");
let stu2 = new User("Mahi","mahi@gmail.com");

let teacher1 = new User("Dean","dean@gmail.com");
let admin1 = new Admin("admin","admin@gmail.com");

//Error handling
//try-catch
let a =5;
let b = 10;
 console.log("a=",a);
 console.log("b=",b);
 console.log("a+b=",a+b);
 console.log("a-b=",a-b);
 try{
 console.log("a/b=",a/c);//error-c is not defined
 }catch(err){
    console.log(err);
 }
 console.log("a%b=",a%b);
 console.log("a*b=",a*b);
 console.log("a^b=",a^b);

//  a= 5
//  b= 10
//  a+b= 15
// a-b= -5
// ReferenceError: c is not defined
// a%b= 5
// a*b= 50
// a^b= 15
