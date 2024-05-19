let btn = document.getElementsByClassName("shape")[0];
let btn_reset = document.getElementsByClassName("shape")[1];
let score = document.getElementsByClassName("score")[0];

var amount = 0;
var factor = 100;

const units = ["ml", "L"];

if (window.localStorage.getItem('score') != null){
    if (JSON.parse(window.localStorage.getItem('score')) < 900){
        score.textContent = JSON.parse(window.localStorage.getItem('score')) + units[0];
        amount = JSON.parse(window.localStorage.getItem('score'));
        console.log("Succes reload ml");
    }
    else{
        score.textContent = JSON.parse(window.localStorage.getItem('score'))/1000 + units[1];
        amount = JSON.parse(window.localStorage.getItem('score'));
        console.log("Succes reload L");
    }
}
else{
    console.log("Fail reload, continue?");
}

btn.addEventListener("click", () => {
    if (amount < 900){
        amount = amount + factor;
        score.textContent = amount + units[0];
        window.localStorage.setItem('score', JSON.stringify(amount));
    }
    else{
        amount = amount + factor;
        score.textContent = amount/1000 + units[1];
        window.localStorage.setItem('score', JSON.stringify(amount));
    }
})


btn_reset.addEventListener("click", () => {
    if (amount !=0 ) {
        amount = 0;
        score.textContent = amount;
        window.localStorage.removeItem("score");
        console.log("Amount reset!")
    }
})
