jQuery(document).ready(function($){

var typed = new Typed('.typed_test', {
  strings: ["hello world",
            "welcome to my website",
            "I'm a Full Stack web Developer",
            "I'm a Full Stack web Developer",
            "What I do beside?",
            " Web Application Development",
            " Wordpress Theme Development ",
            "eCommerce Website"
           ],
  typeSpeed: 70,
    loop:true
});
	
    //    ProgressBar js
    
$('.progress-box-html').LineProgressbar({
	percentage: 80,
    fillBackgroundColor: '#39b54a',
    duration:1000

});    
$('.progress-box-css3').LineProgressbar({
	percentage: 85,
    fillBackgroundColor: '#39b54a'
});    
$('.progress-box-php').LineProgressbar({
	percentage: 70,
    fillBackgroundColor: '#39b54a'
});    
$('.progress-box-jquery').LineProgressbar({
	percentage: 75,
    fillBackgroundColor: '#39b54a'
});    
$('.progress-box-adope-photoshop').LineProgressbar({
	percentage: 90,
    fillBackgroundColor: '#39b54a'
});    
$('.progress-box-adobe-illustrator').LineProgressbar({
	percentage: 91,
    fillBackgroundColor: '#39b54a'
});    

//    owlcorousel jss
        $('.blog-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
});

});

//SHRINK NAV JS

jQuery(window).scroll(function(){if($(document).scrollTop()>50){$('nav').addClass('shrink');}else{$('nav').removeClass('shrink');}});



