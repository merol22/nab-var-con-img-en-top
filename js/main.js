$(document).ready(function() {
	"use strict";
	


var height = $(window).height();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > height) {
      jQuery('.navbar-default').addClass('navbar-fixed-top');
  } else {
      jQuery('.navbar-default').removeClass('navbar-fixed-top');
}
});
	
		$('.navbar-collapse a').on('click',function() {
$('.navbar-collapse').removeClass('in');
});
   
		$(window).scroll(function(){
		var scroll= $(window).scrollTop();
		if (scroll >= 300) {
			nav.removeClass('normal').addClass('efecto');
		} else{
			nav.removeClass('efecto').addClass('normal');
		}
	});
		$('section#pantallas a').on('click',function() {
  $('#modal img').attr('src', $(this).attr('data-image-url'));
		}); 
		
		
		$('section#app .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInUp');
    },{
        offset:'60%'
    });
		
		
		$('section#app .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInUp');
    },{
        offset:'60%'
    });
		
		$('section#app .anima3').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInUp');
    },{
        offset:'60%'
    });

$('section#principal #appPrincipal').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInDownBig');
    },{
        offset:'60%'
    });

	$('section#caracteristicas #appCentral').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInDownBig');
    },{
        offset:'60%'
    });
	
	$('section#caracteristicas .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInLeft');
    },{
        offset:'60%'
    });
	
	
	$('section#caracteristicas .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInLeft');
    },{
        offset:'60%'
    });
	

	$('section#pantallas .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });

	$('section#pantallas .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });
	

	$('section#pantallas .anima3').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });


	$('section#descargar .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });


	$('section#descargar .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });

	$('section#descargar .anima3').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });

$('#soporteForm').bootstrapValidator({
	message:"Esto no es válido",
	feedbackIcons:{
		valid: 'glyphicon glyphicon-ok',
		invalid:'glyphicon glyphicon-remove',
		validating:'glyphicon glyphicon-refresh'
	},
	fields:{
		nombre:{
			validators:{
				notEmpty:{
					message: "Este es un campo obligatorio"
					},
				}
		
		},
		email:{
			validators:{
				notEmpty:{
					message: "Este es un campo obligatorio"
					},
					emailAddress:{
						message: "Eso no parece un correo electrónico"
						}
				}
		},
		mensaje:{
			validators:{
				notEmpty:{
					message: "El mensaje no puede ir vacio. Quien manda un mensaje vacio?"
					}
				}
		
		}
	}

}).on('success.form.bv', function(e){
	e.preventDefault();
	var $form =$(e.target);
	var bv =$form.data('bootstrapValidator');
	
	$.post($form.attr('action'), $form.serialize(), function(result){
		$('#correcto').fadeIn();
		console.log(result);
	},'json');
});


});


// inicio de smooth scroll
smoothScroll.init({
    speed: 700, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutQuad', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
    callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
});