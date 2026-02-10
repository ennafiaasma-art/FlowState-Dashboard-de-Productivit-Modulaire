const btn=document.getElementById("btn");
const form=document.querySelector("form")
const ul=document.createElement("ul");
const deletbtn=document.getElementById("deletbtn")

const creat =document.getElementById("creat")
document.body.appendChild(ul);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const li=document.createElement("li");
     li.textContent=creat.value
    ul.appendChild(li)
    ul.innerHTML=`<form>  <form >


        <div class="py-5 px-5 d-flex justify-between" >
            <img src="" alt="">
            <h1></h1>
            <p>${}</p>
            

        </div>
    </form>
    
    
    
    
    
    </form>`
    

})


