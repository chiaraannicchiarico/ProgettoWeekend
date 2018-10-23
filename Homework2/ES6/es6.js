

var color = ["orange", "green", "blue","pink","yellow"];
var i = 0;
var tempo;
var ricomincia;

document.getElementById("principale").onload = function () {
    tempo=window.setInterval(funzione, 15000);
};


function funzione() {
    if (i === color.length) {
        i = 0;
        document.getElementById("principale").style.backgroundColor = color[i];
    } else {
        document.getElementById("principale").style.backgroundColor = color[i];
        i++;
    }
}

document.getElementById("stop").addEventListener("click", function () {
    clearInterval(tempo);
    var temp = document.getElementById("principale").style.backgroundColor;
    document.getElementById("principale").style.backgroundColor = temp;
ricomincia=i;
});

document.getElementById("continua").addEventListener("click", function () {
    tempo=window.setInterval(funzione, 15000);
});