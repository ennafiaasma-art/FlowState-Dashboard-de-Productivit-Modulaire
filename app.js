import{header,ajouteEtTime,AddFormulaire} from'./ui.js'
// import{getTasks,setTasks} from'./storage.js'
// import {fucntBtnAjout} from './ui.js'
const container=document.getElementById("container")
container.innerHTML=`${header() } ${ajouteEtTime()} ${AddFormulaire() }}`

const btnadd=document.getElementById("btnadd");
const ssss=document.getElementById("newform");
const form1=document.getElementById("form1");
btnadd.addEventListener("click",()=>{
form1.style.display='block';
    ssss.innerHTML=`${AddFormulaire()}` 
})


