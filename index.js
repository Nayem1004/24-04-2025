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


var photos = ["image/1.jpg", "image/2.jpg", "image/man-2.jpg", "image/man1.png"];
var imgTag = document.getElementById("slide");
var count = 0;

// function next(){
//     count++;
//     if(count>=photos.length){
//         count=0;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }

// }

// function prev(){
//     count--;
//     if(count < 0){
//         count = photos.length -1;
//         imgTag.src=photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
    
// }



function slider(direction) {
    if (direction === 'next') {
        count++;
        if (count >= photos.length) {
            count = 0;
        }
    } else if (direction === 'prev') {
        count--;
        if (count < 0) {
            count = photos.length - 1;
        }
    }
    imgTag.src = photos[count];
}