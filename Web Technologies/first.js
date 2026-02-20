//DOM(Document Object Modules)
// alert("cgh");
console.log("lol")
window.console.log("kill");
window.alert("cgh");
console.log(window.document.body);
console.dir(document.body);
console.log(document.body);
document.body.style.background="pink";
document.body.childNodes[3].innerText ="abcd";
console.dir(document.body);

//Selectin with id
let heading=document.getElementById("heading");
console.dir(heading);//null

//Selectin with class
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);//HTMLCollection []
//className
let headingss = document.getElementsByClassName("myClass");
console.dir(headingss);
console.log(headingss);
//id
let button =document.getElementById("myId");
console.dir(button);
console.log(button);
//tagName
let paragraph1=document.getElementsByTagName("p");
console.dir(paragraph1);

//query selector
let elements = document.querySelector("p");//1st element
console.dir(elements);

let element = document.querySelectorAll("p");//1st element
console.dir(element);//NodeList

let firstElement= document.querySelector("#myId");
console.dir(firstElement);

console.dir(document.body.firstChild);

document.querySelector("div");  
let x=document.querySelector("div").children;
console.dir(x);
 let div=document.querySelector("div");
 console.dir(div);
 let heading2=document.querySelector("h1");
 console.dir(heading2);
heading.innerText="new heading";
heading.innerHTML="<i>new heading</i>";
 div.textContent="text";//can also change text

let h2=document.querySelector("h2");
console.dir(h2.innerText);
let ans=h2.innerText=h2.innerText + "This is My JavaScript";
console.dir(ans);

let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    console.log(div.innerText);
    div.innerText=`Box1 ${idx}`;
    idx++;
}
divs[0].innerHTML="<i>Box1</i>";
console.log(divs[0]);
let divs1=document.querySelectorAll(".box");
console.log(divs1[1]);
let divs2=document.querySelectorAll(".box");
console.log(divs2[2]);

// get and set attributes in Js
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);
let para1 = document.querySelector("p");
let pa = para1.getAttribute("class");
console.log(pa);

let para2 = document.querySelector("p");
console.log(para2.getAttribute("class"));

let para3 = document.querySelector("p");
console.log(para3.setAttribute("class","I created new class"));//<p class="I created new class"> this is a simple line</p>

// style
// node.style
let div =document.querySelector("div");
div.style.backgroundColor = "red";
div.style.backgroundColor = "pink";
div.style.backgroundColor = "green";
div.style.fontSize="20px";
div.style.visibility="hidden";

// insert elements
// node.append(el)
let newButton1= document.createElement("button");
let btn=newButton1.innerText="Click me!";
console.log(btn);
console.log(newButton1);//this will create button with text inside button in js

// append add after node
let newButton= document.createElement("button");
newButton.innerText="Click me!";
let div= document.querySelector("div");
div.append(newButton);// button can see on browser page
newButton.style.newButton = "10px";
newButton.style.backgroundColor = "red";

let p= document.querySelector("p");
p.after(newButton);

// prepend add before node
let newHeading= document.createElement("h1");
newHeading.innerText="My new Heading added in JS!";
document.querySelector("body").prepend(newHeading);//directly added head in js

let newHeading= document.createElement("h1");
newHeading.innerText="My new Heading added in JS!";
document.querySelector("body").prepend(newHeading);

//delete node
let para= document.querySelector("p");
para.remove();
let heading= document.querySelector("h1");
heading.remove();

let newBtn=document.createElement("button");
newBtn.innerText="Click me!";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn);

//classList.add("");
let paragraph=document.querySelector("p");
paragraph.classList.add("newClass");