vendingmachine={
    drinks:{"fanta":{price:230, code:55324},
            "Coke":{price:250, code:51234}           
}
};
bougthitems=[];

let buttons=document.querySelectorAll(".key");


let displayContainer= document.getElementById("displaycontent");
// const drinkdisplay = document.querySelectorAll(".drinkdisplay");


let drink= Object.keys(vendingmachine.drinks);//[fanta, coke]
function checkcode(code){
    
    for (let i=0; i<drink.length; i++){
        let eachdrink= drink[i];//fanta, coke
        let drinkdata= vendingmachine.drinks[eachdrink]
        let drinkprice= drinkdata.price;
        let drinkcode = drinkdata.code;

        if (code === drinkcode){
                displayContainer.value= `${eachdrink}: # ${drinkprice}\n Insert cash`;
                return true;                           
            }

    }
       
    displayContainer.value= "Invalid code";
    return false;
     

}


buttons.forEach(button=>{
button.addEventListener("click", function(event){

// You get the value from its 'data-value' attribute.
let buttonValue = event.target.getAttribute("data-value");

if (buttonValue ==="C"){
    displayContainer.value= "";
}
else if(buttonValue === "Enter"){
    const Entercode= parseInt(displayContainer.value.trim());
    checkcode(Entercode);
    console.log(displayContainer.value);
}
else{
    displayContainer.value+=buttonValue;
}

});
});



// const drinkImages = {
//   fanta: ["images/fantaa.png", "images/fantaa.png"],
//   coke: ["images/cokee.png"]
// };

// const allDrinkHTML = Object.keys(drinkImages)
//   .map(drink =>
//     drinkImages[drink]
//       .map(url => `<img src="${url}" class="drink-img" height="70" width="30" alt="${drink}">`)
//       .join('')
//   )
//   .join('');


// drinkdisplay.forEach(div => {
//   div.innerHTML = allDrinkHTML;
// });
const drinkDisplays = document.querySelectorAll(".drinkdisplay");

const drinkImages = {
  fanta: ["images/fantaa.png", 
    "images/fantaa.png", 
    "images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",
"images/fantaa.png",],
  coke: ["images/cokee.png", "images/cokee.png", "images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png","images/cokee.png",]
};

// Get the list of drink names, e.g. ["fanta", "coke"]
const drinkNames = Object.keys(drinkImages);

// Loop through all drink display divs
drinkDisplays.forEach((div, i) => {
  // Pick a drink name using the index — cycles between fanta and coke
  const drink = drinkNames[i % drinkNames.length];

  // Build HTML for that drink’s images
  const drinkHTML = drinkImages[drink]
    .map(url => `<img src="${url}" class="drink-img" height="70" width="30" alt="${drink}">`)
    .join('');

  // Put those images into this div
  div.innerHTML = drinkHTML;
});
