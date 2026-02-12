import{header,ajouteEtTime,AddFormulaire} from'./ui.js'
// import{getTasks,setTasks} from'./storage.js'
const container=document.getElementById("container")
container.innerHTML=`${header() } ${ajouteEtTime()} ${AddFormulaire}`
const bntajout=document.getElementById("bntajout");
bntajout.innerHTML=`${addTask()}`
