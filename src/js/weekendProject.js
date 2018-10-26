const $ = require('jquery');   



$(document).ready(function(){
            $.ajax ({
              url: 'data.json',
              type: 'GET',
              dataType: 'json',
              success: function(risposta){
                for(var i = 0; i < risposta.length; i++)
              $("#another_article").append(risposta[i].text);
              }, 
              error: function(){
                console.log('error'); 
              }
            });
          
});
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
     $('.like').toggleClass("green-like");
   })

/*function myFunction() {
var element = document.getElementClassName('like');
element.classList.toggle("red");
}

$(selector).toggleClass('like',myFunction(index,currentclass),switch*/



/*$(".like").click(function(){
  $(".like").toggleClass("green-like");
});*/