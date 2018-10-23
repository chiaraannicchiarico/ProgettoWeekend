

var vett = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var v=[];
var i;
for (i= 0; i < vett.length; i++) {
    v[i]=vett[i]*vett[i];
}


document.getElementById("vett").innerText = vett;
document.getElementById("v").innerText = v;
document.getElementById("fine").innerText = "Fine Elaborazione";