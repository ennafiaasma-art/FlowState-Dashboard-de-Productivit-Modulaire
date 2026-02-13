import { AddFormulaire } from "./ui"

  
  
  const form=document.getElementById("forinput");
  let btnsave=document.getElementById("btnsave");
  let addTask = document.getElementById('addTask');
 
    let array = [];

 btnsave.onclick = function() {
    let objet = {
        input : addTask.value,
    }
    array.push(objet);
    console.log(array);
    //  afficheFormailure();
}
//   const data = [{ logo:"circle-play-regular-full.svg",name:"reply to emails", sessions:1},
//                { logo:"circle-play-regular-full.svg-1.jpg",name:"organize work space", sessions:1},
//                { logo:"circle-play-regular-full.svg-1.jpg",name:"fix code errors", sessions:2}]


// export function afficheFormailure(){
//     form.innerHTML="";
//     array.forEach=(el)=>{
//         .innerHTML=`
// <div class="bg-gray-500 p-11 rounded-xl shadow-lg 
//                     w-80 flex justify-between items-center">

            

            

           
//         </div>


        
//         `

// console.log(data);
//     }



//     afficheFormailure();
    

    

//   btnsave

    

    
    

  




// }
    
 


       

    
    
    
    
    






