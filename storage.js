

const data = [{ logo:"images/blog-1.jpg",name:"reply to emails", sessions:1},
               { logo:"images/blog-1.jpg",name:"organize work space", sessions:1},
               { logo:"images/blog-1.jpg",name:"fix code errors", sessions:2}]

    return JSON.parse(localStorage.getItem("data"))



     localStorage.setItem("data",JSON.stringify(data))






