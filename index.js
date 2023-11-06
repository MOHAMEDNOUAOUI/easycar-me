const gridCards = document.querySelectorAll(".cards");
const carsdata = JSON.parse(localStorage.getItem("carsData"));
var listButtons = document.querySelector(".list-toggle");
var gridButtons = document.querySelector(".grid-toggle");
var cardsContainer = document.querySelector("#cardsParent");

createGridItemHTML();


// Loop through the carsData array and create cards for each object
function fill () {
  carsdata.forEach((value, key) => {
    // Create a new card element
    const card = document.createElement("div");
    card.className = "carda flex-column d-flex gap-4 px-5";
  
    card.innerHTML = `
      <div class="d-flex gap-3 shadow bg-white rounded">
        <img src="${value.image}" class="w-25 card-img-top" alt="Image" style="border-radius: 7%; height: 12rem;">
        <div class="card-body">
          <h5 class="card-title">${value.name}</h5>
          <p class="card-text w-50">${value.description}</p>
          <div class="details d-flex align-items-center justify-content-between">
            <p class="card-price bold m-0">${value.price} DH</p>
            <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
          </div>
        </div>
      </div>
    `;
  
    gridCards.forEach(function(gridCard) {
      gridCard.appendChild(card.cloneNode(true));
    });
  });
}

listButtons.addEventListener("click", function () {
    cardsContainer.innerHTML = ""; // Clear the current content
    fill();
  });



 
//////////////////////////////////////////////////////////

  


 


  function createGridItemHTML() {
    gridCards.forEach(function(gridCard) {
      carsdata.forEach((value, key) => {
        // Create a new card element
         const card = document.createElement("div");
         card.className = "card col-md-3 col-lg-4 w-100";
        card.innerHTML = `<div class="col-md-3 col-lg-4 w-100">
    <img class="card-img-top" src="${value.image}" alt="Image">
    <div class="card-body">
    <h5 class="card-title">${value.name}</h5>
    <p class="card-text">${value.description}</p>
    <div class="details d-flex align-items-center justify-content-between">
    <p class="card-price bold m-0 m-0">${value.price}</p>
    <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
    </div>
    </div>
    </div>`;
  
        // Append the card to the current gridCard element
        gridCard.appendChild(card);
      });
    });
  }

 gridButtons.addEventListener("click", function () {
    cardsContainer.innerHTML = ""; // Clear the current content
    createGridItemHTML();
  });
















var cart = document.querySelector('#openCartButton');
var list = document.querySelector('.list');
var closelist = document.querySelector('#X');
var listcart = document.querySelector(".list-content");
var total = document.querySelector('.pricecounter');
var count = document.querySelector('#panelCounter');
var listcard = [];

cart.addEventListener("click", function() {
  list.classList.add("active");
});

closelist.addEventListener("click",function (){
  list.classList.remove("active");
});

function addtocart(key) {
  const carToAdd = carsdata[key];
  listcard.push(carToAdd);
  localStorage.setItem("PanelData", JSON.stringify(listcard));
  reloadcard();
}


var totalprice = 0;
var countpanier = 0;

function reloadcard() {
  listcart.innerHTML = "";
  totalprice = 0;
  countpanier = 0;

  listcard.forEach((value, key) => {
    totalprice += value.price;
    localStorage.setItem("totalprice", JSON.stringify(totalprice));
    countpanier++;
    add(value);
  });
  

  total.innerHTML = totalprice.toLocaleString() + " DH";
  count.innerHTML = countpanier;
}

function add(value) {
  if (listcart!==0) {
    let listItem = createListItem(value);
    listcart.appendChild(listItem);
  }
}



function createListItem(item, incart) {
  let newdiv = document.createElement('li');
  newdiv.incart = incart; // Use incart to set the class
  newdiv.innerHTML = `
    <div class="incart">
    <img src="${item.image}">

    <div class="intwocart">
      <div><div class="name">${item.name}</div>
      <div class="pricecart">${item.price.toLocaleString()}</div></div>
      <div class="botons d-grid gap-2 d-md-block">
      <div class="w-100">
      <button class="btn boton-rent-custom"><a href="./devis.html" style="text-decoration:none;">RENT NOW</a></button>
      <button class="btn boton-rent-custom"><a href="./customize.html" style="text-decoration:none;">CUSTOMIZE</a></button>
      </div>
      <button class="mt-1 btn boton-rent-custom w-100 " onclick="delelement(${incart})">REMOVE</button>
    </div>
    </div>
    
    </div>
  `;
  return newdiv;
}

function delelement(index) {
  listcard.splice(index, 1);
  localStorage.setItem("PanelData", JSON.stringify(listcard));
  reloadcard();
}


function loadFromLocalStorage() {
  const storedCartItems = JSON.parse(localStorage.getItem("PanelData"));
  if (storedCartItems) {
    listcard = storedCartItems;
    reloadcard();
  }
}

loadFromLocalStorage();














