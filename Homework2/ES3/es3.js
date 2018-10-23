


var somma = document.getElementById("somma");
var sott = document.getElementById("sottrazione");
var mol = document.getElementById("moltiplicazione");
var div = document.getElementById("divisione");


somma.addEventListener("click", function () {
    var addendo_somma1 = parseInt(document.getElementById("operatore1").value);
    var addendo_somma2 = parseInt(document.getElementById("operatore2").value);
    var res = addendo_somma1 + addendo_somma2;
    document.getElementById("risultato").innerText = res;
});

sott.addEventListener("click", function () {
    var sottraendo_sott1 = parseInt(document.getElementById("operatore1").value);
    var sottraendo_sott2 = parseInt(document.getElementById("operatore2").value);
    var res = sottraendo_sott1 - sottraendo_sott2;
    document.getElementById("risultato").innerText = res;
});

mol.addEventListener("click", function () {
    var moltiplicando_m1 = parseInt(document.getElementById("operatore1").value);
    var moltiplicando_m2 = parseInt(document.getElementById("operatore2").value);
    var res = moltiplicando_m1 * moltiplicando_m2;
    document.getElementById("risultato").innerText = res;
});

div.addEventListener("click", function () {
    var dividendo_div1 = parseFloat(document.getElementById("operatore1").value);
    var dividendo_div2 = parseFloat(document.getElementById("operatore2").value);
    var res = dividendo_div1 / dividendo_div2;
    document.getElementById("risultato").innerText = res;
});