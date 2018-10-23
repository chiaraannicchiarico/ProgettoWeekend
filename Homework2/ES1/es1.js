var a=8;
var b=4;
var piu="+";
var meno="-";
var per="*";
var div="/";
var ug="=";

document.getElementById("op1_add").innerText=a;
document.getElementById("op2_add").innerText=b;
document.getElementById("add").innerText=piu;
document.getElementById("ug_add").innerText=ug;
document.getElementById("res_add").innerText=(a+b);

document.getElementById("op1_sottr").innerText=a;
document.getElementById("op2_sottr").innerText=b;
document.getElementById("sottr").innerText=meno;
document.getElementById("ug_sottr").innerText=ug;
document.getElementById("res_sottr").innerText=(a-b);

document.getElementById("op1_mult").innerText=a;
document.getElementById("op2_mult").innerText=b;
document.getElementById("mult").innerText=per;
document.getElementById("ug_mult").innerText=ug;
document.getElementById("res_mult").innerText=(a*b);

document.getElementById("op1_div").innerText=a;
document.getElementById("op2_div").innerText=b;
document.getElementById("div").innerText=div;
document.getElementById("ug_div").innerText=ug;
document.getElementById("res_div").innerText=(a/b);