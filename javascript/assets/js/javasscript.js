//console.log(document.getElementsByTagName("div"));
let elements=document.getElementsByTagName("div");//html collection
console.log(elements[2]);
elements[1].innerHTML+="<h1> this is from inner html</h1>";
elements[1].textContent+="<h1> this is from inner html</h1>";
let h1=document.getElementById("uni");
console.log(h1);
h1.style.backgroundColor="coral;"

h1.addEventListener("click",()=>{
h1.style.backgroundColor="purple";
h1.style.width="500px";
})

let username=document.getElementById("username");
username.addEventListener("change",(e)=>{
console.log(e.target);
    console.log(e.target);
    console.log(username.Value);
})
