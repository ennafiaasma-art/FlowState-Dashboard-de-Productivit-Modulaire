

// const tasks = [{ logo:"images/blog-1.jpg",name:"reply to emails", sessions:1},
//                { logo:"images/blog-1.jpg",name:"organize work space", sessions:1},
//                { logo:"images/blog-1.jpg",name:"fix code errors", sessions:2}]





export function storeTask(task) {
    localStorage.setItem('data', JSON.stringify(task));
}
export function getTask(task) {
  return JSON.parse(localStorage.getItem('data'));
}


