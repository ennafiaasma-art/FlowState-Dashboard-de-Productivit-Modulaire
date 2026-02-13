
  
  
const listTasks=document.getElementById("container");
//   let btnsave=document.getElementById("btnsave");
//   let inputTask = document.getElementById('addTask');
 
//     let array = [];

export function addTask(tab , taskName) {
   
    let task = {
        name : taskName.value,
    }
    tab.push(task);
    console.log(tab);
    return tab
    

    //  afficheFormailure();
}
//   const data = [{ logo:"circle-play-regular-full.svg",name:"reply to emails", sessions:1},
//                { logo:"circle-play-regular-full.svg-1.jpg",name:"organize work space", sessions:1},
//                { logo:"circle-play-regular-full.svg-1.jpg",name:"fix code errors", sessions:2}]


export function afficheFormailure(tab){
    listTasks.innerHTML="";
    tab.forEach=(el)=>{
        listTasks.innerHTML=`
<div class="bg-gray-500 p-11 rounded-xl shadow-lg 
                    w-80 flex justify-between items-center">

            <h2>${el.name}</h2>
        </div>
        `

console.log(data);
    }
}



//     afficheFormailure();
    

    

//   btnsave

    

    
    

  




// }
    
 


       

    
    
    
    
    






