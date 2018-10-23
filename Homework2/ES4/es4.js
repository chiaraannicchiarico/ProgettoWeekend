

document.getElementById("quadrato").addEventListener("click", function () {

    var n = document.getElementById("num_inseriti").value;
    var i;
    var vett=[];
    for (i = 0; i < n; i++) {
        vett[i] = (i+1)*(i+1);
    }
    document.getElementById("risultato").innerText = vett;
    document.getElementById("fine").innerText = "Fine Elaborazione";
});