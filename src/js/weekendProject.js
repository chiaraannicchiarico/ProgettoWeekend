var element = document.getElementById('here');



function closeCookie () {

document.getElementById('cookie_d').style.display="none"; 
};

element.addEventListener("click",closeCookie);









	

    var elements=document.getElementsByClassName('like');
    for (var i = 0; i < like.lenght; i++) { 
    	elements[i].addEventListener("click", function (){
    	if (this.style.backgroundColor === "white"){

    		this.style.backgroundColor = "green";
    		} else {
    		this.style.backgroundColor = "white";
     }
 } );	

}
