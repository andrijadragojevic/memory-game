let order = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
order.sort(() => (Math.random() > .5) ? 1 : -1);

let cards = document.querySelectorAll("img");

cardsHTML = ``;


let i = 0;
cards.forEach(card => {
    card.setAttribute("data-value",`${order[i]}`);
    i++;
})

let points = 0;
let clickCounter = 0;
let clickedCards = [];

cards.forEach(element => {
    element.addEventListener("click", function () {
        clickCounter++;
        if(clickCounter <= 2) {
            clickedCards[clickCounter] = element
            element.setAttribute("src",`img/${element.dataset.value}.png`)
        }
        if (clickCounter == 2) {
           if (clickedCards[1].dataset.value == clickedCards[2].dataset.value) {
                clickedCards[1].setAttribute("style", "pointer-events: none;");
                clickedCards[2].setAttribute("style", "pointer-events: none;");
                console.log("CORRECT");
                points++;
                clickCounter = 0;
                clickedCards = [];
            } else {
                
                setTimeout(() => {
                    clickedCards[1].setAttribute("src",`img/logo.png`);
                    clickedCards[2].setAttribute("src",`img/logo.png`);
                    clickCounter = 0;
                    clickedCards = [];  
                }, 1500);
            } 
        if (points == 8) {
            alert("YOU WON!");
        }     
        }
    })
});
