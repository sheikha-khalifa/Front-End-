
let userInput=prompt("Enter your GitHub UserNmae:");
const url=`https://api.github.com/users/${userInput}`;

async function loaddata(){
    let obj=await fetch(url);
    let dtt=await obj.json();
    await console.log(dtt);

    document.querySelector("#main").innerHTML = `<img src= ${dtt.avatar_url} alt="avatar">`;
}
loaddata();