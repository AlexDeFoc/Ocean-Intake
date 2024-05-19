let btn = document.getElementsByClassName("shape")[0];
let score = document.getElementsByClassName("score")[0];

var amount = 0;
var factor = 100;

const units = ["ml", "L"];

btn.addEventListener("click", () => {
    if (amount < 900){
        amount = amount + factor;
        score.textContent = amount + units[0];
    }
    else{
        amount = amount + factor;
        score.textContent = amount/1000 + units[1];
    }
})

