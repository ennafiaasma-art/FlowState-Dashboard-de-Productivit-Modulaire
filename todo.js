const btn=document.getElementById("btn");
const form=document.querySelector("form")
const ul=document.createElement("ul");

const creat =document.getElementById("creat")
document.body.appendChild(ul);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const li=document.createElement("li");
     li.textContent=creat.value
    ul.appendChild(li)
})