const $ = require('jquery');   
//const Mustache = require('Mustache');


/*$(document).ready(function(){
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
          
});*/    
/*var element = document.getElementById('here');



function closeCookie () {

document.getElementById('cookie_d').style.display="none"; 
};

element.addEventListener("click",closeCookie);*/






$('#here').on('click', () => {
  $('#cookie_d').hide(); 
});


/*

JavaScript:  modificare il colore del like al click del mouse
for (var i = 0; i <like.length;  i++) {
  like[i].addEventListener("click",function(){
    
    if (this.style.backgroundColor==="white"){
      this.style.backgroundColor="#32cd32";
      }else{
      this.style.backgroundColor="white"; 
  }
  });
} */

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

$('.btn-light').on('click', event =>{
  $(event.currentTarget).toggleClass('btn-light2');
});



   $(document).ready(function(){
    $('button').click(function(){
        $('button').toggleClass('green-like');
    });
});

/*
   $('.like').on('click', event => {
     $(event.currentTarget).toggleClass("green-like");
   });*/

/*function myFunction() {
var element = document.getElementClassName('like');
element.classList.toggle("red");
}

$(selector).toggleClass('like',myFunction(index,currentclass),switch*/



/*$(".like").click(function(){
  $(".like").toggleClass("green-like");
});*/


/*function doAjax(){
  $.ajax({
    url: 'data.json',
    method: 'GET',
    dataType: "json",
    success: function(result) {
      
      var template = $('#template').html();
      console.log(template);
      var rendered = Mustache.render(template, result);
      console.log('il renderizzato:');
        console.log(rendered);
      $('#articolo').html(rendered);
    },
    error: function(error){
      console.log("Errore insuccesso chiamata:");
      console.log(error);
    },
    complete: function() {
      $('.btn, .btn-default').on('click', event => {
          $(event.currentTarget).toggleClass("btn-success");
      });
    }
  });
};*/



$.ajax({
  url: 'data.json',
  method: "GET",
  success: function(result){
    $('#articolo1').append("<h2>" + result[0].text + "</h2>");
        $('#articolo1').append("<img src=" + result[1].text + ">");
        $('#articolo1').append("<span class="+"'label label-primary'"+">" + result[2].text + "</span>");  
        $('#articolo1').append("<p>" + result[3].text + "</p>");
        
    
    $('#articolo2').append("<h2>" + result[4].text + "</h2>");
        $('#articolo2').append("<img src=" + result[5].text + ">");
        $('#articolo2').append("<span class="+"'label label-primary'"+">" + result[6].text + "</span>");  
        $('#articolo2').append("<p>" + result[7].text + "</p>");
        

        $('#articolo3').append("<h2>" + result[8].text + "</h2>");
        $('#articolo3').append("<img src=" + result[9].text + ">");
        $('#articolo3').append("<span class="+"'label label-primary'"+">" + result[10].text + "</span>");  
        $('#articolo3').append("<p>" + result[11].text + "</p>");
        

        $('#articolo4').append("<h2>" + result[12].text + "</h2>");
        $('#articolo4').append("<img src=" + result[13].text + ">");
        $('#articolo4').append("<span class="+"'label label-primary'"+">" + result[14].text + "</span>");  
        $('#articolo4').append("<p>" + result[15].text + "</p>");
        
  },
  error: function(result){
    console.log('error');
  }
});