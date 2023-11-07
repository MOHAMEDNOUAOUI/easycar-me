const storedCartItems = JSON.parse(localStorage.getItem("customizeitem"));
const PanelData = JSON.parse(localStorage.getItem("PanelData"));



var nameInfo = document.querySelector(".card-title-personalisation");
var carCategory = document.querySelector(".car-categorey");
var priceInfo = document.querySelector(".pricePersonalisation");
var imgInfo = document.querySelector(".main-img img");

const marque = document.querySelector("#marque");

// customize
nameInfo.textContent = storedCartItems.name;
carCategory.textContent = storedCartItems.category;
priceInfo.textContent = storedCartItems.price;
imgInfo.src = storedCartItems.image;







// Assuming PanelData is an array of objects representing items to display




