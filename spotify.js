// JAVASCRIPT


let bt =document.querySelector(".abc");
let bt2 =document.querySelector(".def");
let main=document.querySelector(".main");

let login = document.querySelector(".log");
let ca = document.querySelector(".ca")

bt.addEventListener("click",function(){
    main.style.filter="blur(5px)";
    login.style.display="block";
})

bt2.addEventListener("click",function(){
    main.style.filter="blur(5px)";
    ca.style.display="block";
})

let cross1=document.querySelector(".cross1");
let cross2=document.querySelector(".cross2");

cross1.addEventListener("click",function(){
    login.style.display="none";
    main.style.filter="blur(0px)";

})

cross2.addEventListener("click",function(){
    ca.style.display="none";
    main.style.filter="blur(0px)";
    
})

let form1=document.querySelector("#one");
let w1=document.querySelector("#w1");
let w2=document.querySelector("#w2");
let input=document.querySelector("#user");
let passwd=document.querySelector("#passwd");

form1.addEventListener("submit",(e)=>{
    let regex1=/^[a-zA-Z0-9_]{1,15}$/;
    let regex2=/^[0-9]{6}$/;

    if ((input.value.trim()==="") || (passwd.value.trim()==="")){
        e.preventDefault();
        w1.style.display="block";
        w2.style.display="block";
        input.style.border= "2px solid white";
        input.style.boxShadow= "0 0 10px white";

    }
    if ((regex1.test(input.value.trim()))){
        w1.style.display="none";
        input.style.border= "2px solid white";
        input.style.boxShadow= "0 0 10px white";
    }

    if (regex2.test(passwd.value.trim())){
        w2.style.display="none";
        passwd.style.border= "2px solid white";
        passwd.style.boxShadow= "0 0 10px white";
    }
    if ((regex2.test(passwd.value.trim())) && (regex1.test(input.value.trim()))){
        alert("Succesfully Log - In !!!");
    }
    if(!regex1.test(input.value.trim())) {
        w1.style.display="block";
        input.style.border= "2px solid red";
        input.style.boxShadow= "0 0 10px red";
        e.preventDefault();
        
    }

    if (!regex2.test(passwd.value.trim())){
        w2.style.display="block";
        passwd.style.border= "2px solid red";
        passwd.style.boxShadow= "0 0 10px red";
        e.preventDefault();
        
    }
});

let form2=document.querySelector("#two");
let w3=document.querySelector("#w3");
let w4=document.querySelector("#w4");
let input1=document.querySelector("#input1");
let passwd1=document.querySelector("#passwd1");

form2.addEventListener("submit",(f)=>{
    let regex1=/^[a-zA-Z0-9_]{1,15}$/;
    let regex2=/^[0-9]{6}$/;

    if ((input1.value.trim()==="") || (passwd1.value.trim()==="")){
        f.preventDefault();
        w3.style.display="block";
        w4.style.display="block";
        input1.style.border= "2px solid white";
        input1.style.boxShadow= "0 0 10px white";

    }
    if (regex1.test(input1.value.trim())){
        w3.style.display="none";
        input1.style.border= "2px solid white";
        input1.style.boxShadow= "0 0 10px white";
    }

    if (regex2.test(passwd1.value.trim())){
        w4.style.display="none";
        passwd1.style.border= "2px solid white";
        passwd1.style.boxShadow= "0 0 10px white";
    }
    
    if(!regex1.test(input1.value.trim())) {
        w3.style.display="block";
        input1.style.border= "2px solid red";
        input1.style.boxShadow= "0 0 10px red";
        f.preventDefault();
        
    }

    if (!regex2.test(passwd1.value.trim())){
        w4.style.display="block";
        passwd1.style.border= "2px solid red";
        passwd1.style.boxShadow= "0 0 10px red";
        f.preventDefault();  
    }

    if ((regex2.test(passwd1.value.trim())) && (regex1.test(input1.value.trim()))){
        alert("Succesfully Created Account !!!");
    }
});



// MENU

let menu= document.querySelector(".menu");
let active=document.querySelector(".com");


menu.addEventListener("click",()=>{
    active.classList.toggle("active");
    main.classList.toggle("blur");
});
