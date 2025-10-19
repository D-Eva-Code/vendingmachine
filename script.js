let vendingmachine = {
  drinks: {
    fanta: { price: 230, code: 55324, quantity: 10 },
    coke: { price: 250, code: 51234, quantity: 12 }
  }
};

let bougthitems = [];
let selectedDrink = null;


const buttons = document.querySelectorAll(".key");
const displayContainer = document.getElementById("displaycontent");
const drinkDisplays = document.querySelectorAll(".drinkdisplay");

// drink images for display
const drinkImages = {
  fanta: Array(15).fill("images/fantaa.png"),
  coke: Array(15).fill("images/cokee.png")
};


function updateDrinkDisplay() {
  for (let drink in vendingmachine.drinks) {
    const quantity = vendingmachine.drinks[drink].quantity;
    const drinkDiv = document.getElementById(`${drink}Display`);

    const drinkHTML = drinkImages[drink]
      .slice(0, quantity)
      .map(url => `<img src="${url}" height="70" width="30" alt="${drink}">`)
      .join('');

    drinkDiv.innerHTML = drinkHTML;
  }
}



function checkcode(code) {
 for (let name in vendingmachine.drinks) {
  const drinkdata = vendingmachine.drinks[name];


    if (code === drinkdata.code) {
      if (drinkdata.quantity <= 0) {
        displayContainer.value = `${name} is out of stock`;
        return null;
      } else {
        displayContainer.value = `${name}: ₦${drinkdata.price}\nInsert cash or press "Pay"`;
        return name;
      }
    }
  }

  displayContainer.value = "Invalid code";
  return false;
}


buttons.forEach(button => {
  button.addEventListener("click", event => {
    let buttonValue = event.target.getAttribute("data-value");

    if (buttonValue === "C") {
      displayContainer.value = "";
      selectedDrink = null;
    } 
    else if (buttonValue === "Enter") {
      const Entercode = parseInt(displayContainer.value.trim());
      selectedDrink = checkcode(Entercode);
    } 
    else if (buttonValue === "Pay") {
      if (selectedDrink) {
        const drinkdata = vendingmachine.drinks[selectedDrink];

        if (drinkdata.quantity > 0) {
          drinkdata.quantity =drinkdata.quantity- 1;
          bougthitems.push(selectedDrink);

          displayContainer.value = "Thank you for your purchase";
          updateDrinkDisplay(selectedDrink);
        } else {
          displayContainer.value = `${selectedDrink} is out of stock`;
        }
      } else {
        displayContainer.value = "Enter drink code first!";
      }
    } 
    else {
      displayContainer.value =displayContainer.value+ buttonValue;
    }
  });
});


updateDrinkDisplay();
