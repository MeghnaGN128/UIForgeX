//Event handling
// let btn=document.querySelector("#btn");
// btn.onclick=()=>{
//     console.log("btn click");
//     let a=3;
//     a++;
//     console.log(a);
// }

// btn.onclick=()=>{
//     console.log("btn click1");
// }
// btn.onclick=()=>{
//     console.log("btn click2");
// }//priorityto this

//Event object
// btn.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// let box = document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("mouse on box");
// }


// let box = document.querySelector("div");
// box.onmouseover=(eve)=>{
//     console.log("mouse on box");
//      console.log(eve);
//     console.log(eve.type);
//     console.log(eve.target);
//     console.log(eve.clientX,eve.clientY);
// }

//Event Listner
//addEventListener
// btn.addEventListener("click",(e)=>{
// console.log("hi");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// });
// btn.addEventListener("click",(e)=>{
// console.log("hi 2");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// });

//removeEventListener
// btn.addEventListener("click",()=>{
// console.log("hi");
// });
// btn.addEventListener("click",()=>{
// console.log("hi1");
// });
// btn.addEventListener("click",()=>{
// console.log("hi2");
// });

// const hi3 = ()=>{
//     console.log("hi3");
// }
// btn.addEventListener("click",hi3);
// btn.removeEventListener("click",hi3);
// btn.addEventListener("click",()=>{
// console.log("hi4");
// });

//DarkMode to LightMode and LightMode to DarkMode
let btnMode= document.querySelector("#mode");
let curMode="light";
let body=document.querySelector("body");
btnMode.addEventListener("click",()=>{
    // console.log("change mode");
    if(curMode==="light"){
        curMode="dark";
      body.classList.add("dark");
      body.classList.remove("light");
    }else{
        curMode="light";
      body.classList.add("light");
       body.classList.remove("dark");
    }
    console.log(curMode);
});
