export const getTasks=()=>{
    return
     JSON.parse(localStorage.getItem("tasks")) ||[]
};

export const setTasks=(tasks)=> {
    return
   localStorage.setItem("tasks",JSON.stringify(tasks))
} 

const tasks = [{ logo:"images/blog-1.jpg",name:"reply to emails", sessions:1},
               { logo:"images/blog-1.jpg",name:"organize work space", sessions:1},
               { logo:"images/blog-1.jpg",name:"fix code errors", sessions:2}]


