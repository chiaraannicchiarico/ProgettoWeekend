const $ = require('jquery');   

/*var element = document.getElementById('here');



function closeCookie () {

document.getElementById('cookie_d').style.display="none"; 
};

element.addEventListener("click",closeCookie);*/






$('#here').on('click', () => {
  $('#cookie_d').hide();
});


	

   /* var elements=document.getElementsByClassName('like');

    for (var i = 0; i < elements.lenght; i++) { 
    	elements[i].addEventListener("click", function (){
    	if (this.style.backgroundColor === "green"){
    		this.style.color="black";
    		this.style.backgroundColor = "white";
    		
    	} else {
    		this.style.backgroundColor = "green";
    		this.style.color="white";
    	}
     });
     }	*/

$('.like').on('click', event => {
	$(event.currentTarget).toggleClass("green-like");
})

