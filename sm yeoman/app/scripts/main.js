$(document).ready(function(){

    function toggleUl(){
        $("ul").slideToggle();
        $("#x-btn").toggleClass("active-hamburger");
    }

    $("#x-btn").click(function(){
        toggleUl()
    })

    function goToSec(navName, navSec){
        navName.click(function(event){
            event.preventDefault();
            $('body,html').animate({ scrollTop: navSec.offset().top}, 500);
            toggleUl()
        })
    }

    $(window).scroll(function(){
        if($(window).scrollTop()>400){
        $(".goToTop")[0].style.display = "block"
        }else{
            $(".goToTop")[0].style.display = "none"
        }
    })
    
    goToSec($('#about-nav'),$('#biography'));
    goToSec($('#service-nav'),$('#services'));
    goToSec($('#price-nav'),$('#pricing'));

    $('.goToTop').click(function(event){
        event.preventDefault();
        $('body,html').animate({ scrollTop: $('body').offset().top}, 500);
    })
});