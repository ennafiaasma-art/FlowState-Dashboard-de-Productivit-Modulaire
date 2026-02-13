import{header,ajouteEtTime,AddFormulaire} from'./ui.js'
import{storeTask,getTask} from'./storage.js'
import { addTask } from './todo.js';

const tasks = []
const form=document.getElementById("form1");
const inputTask = document.getElementById('addTask');

 console.log(inputTask);
 


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let tasksList = addTask(tasks,inputTask)
    storeTask(tasksList); //stockage dans local storage

    }
 )



