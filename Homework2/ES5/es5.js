

var abilitati = ["Chiara", "Franco", "Andrea"];
document.getElementById("verifica").addEventListener("click", function () {

    var nome = document.getElementById("nome").value;
    var i;
    var boolean = false;
    for (i = 0; i < abilitati.length; i++) {
        if (nome.toString() === abilitati[i]) {
            boolean = true
        }
    }
    if (boolean === true) {
        document.getElementById("risultato").innerText = "Sei abilitato ad accedere alla pagina";
    } else {
        document.getElementById("risultato").innerText = "Non sei abilitato ad accedere alla pagina";
    }

});
