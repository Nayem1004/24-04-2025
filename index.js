function addStyle(){
    var myVar = document.querySelector("#peraId");
    myVar.style.color = "blue";
    myVar.style.fontSize = "3rem";
    myVar.style.fontWight = "bold";
    myVar.style.fonstyle = "italic";
}

function removeStyle(){
    var myVar = document.querySelector("#peraId");
    myVar.style.color = "";
    myVar.style.fontSize = "";
    myVar.style.fontWight = "";
    myVar.style.fonstyle = "";
}

function addStyle2(){
    var css = document.querySelector("#pera");
    css.classList.add("pera-style");
}
function removeStyle2(){
    var css = document.querySelector("#pera");
    css.classList.remove("pera-style");
}