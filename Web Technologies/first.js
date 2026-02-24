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