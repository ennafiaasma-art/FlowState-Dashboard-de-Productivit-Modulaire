const addBtn = document.getElementById("add");
const from1 = document.getElementById("form1");

addBtn.onclick= function() {
    from1.classList.remove('hidden');
     firstPage.classList.add("hidden");
};

// function createTitle() {
//     const title = document.createElement("h1");
//     title.textContent = "Reste focus. 25 minutes peuvent tout changer.";
//     title.className = "font-bold text-pink-500 mb-8";
//     return title;
// };
// function createCircle() {
//     const circle = document.createElement("div");
//     circle.className = "rounded-full h-64 w-64 flex items-center justify-center border-4 border-blue-700 mb-8";

//     const timer = document.createElement("h2");
//     timer.textContent = "25:00";
//     timer.className = "font-bold text-2xl";

//     circle.appendChild(timer);

//     return circle;
// }
// function createCard() {
//     const card = document.createElement("div");
//     card.className = "bg-gray-500 p-11 rounded-xl shadow-lg w-80 flex justify-between items-center";

//     const img = document.createElement("img");
//     img.src = "circle-play-regular-full.svg";
//     img.width = 16;

//     const title = document.createElement("h1");
//     title.textContent = "learning java";
//     title.className = "text-white font-bold text-2xl";

//     const number = document.createElement("p");
//     number.textContent = "#3";
//     number.className = "text-white text-2xl";

//     card.append(img, title, number);

//     return card;
// }
// function createButton() {
//     const button = document.createElement("button");
//     button.textContent = "add list";
//     button.type = "button";
//     button.id = "add";
//     button.className = "bg-blue-800 text-white rounded-full py-2 px-9 mt-4";

//     return button;
// }











