$(document).ready(function(){
    $('.button').click(function(){
        if($(this).hasClass('expand')){
            $('ul').slideUp(function(){
                $('.button').removeClass('expand');
                $('.fa-solid').removeClass('expand');
            });
        }else{
            $(this).addClass('expand');
            setTimeout(function(){
                $('.fa-solid').addClass('expand');
                $('ul').stop().slideDown();
            }, 200);
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide:"true",
    grabCursor: "true",
    fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function calcular() {
    var compr = document.getElementById("compr").value;
    var altura = document.getElementById("altura").value;
    var largura = document.getElementById("largura").value;


    var litragem = (compr*largura*altura)/1000
    var aquecedor = litragem*1
    var bomba = litragem*6

    contAquece = 0
    contBomba = 0

    while (aquecedor > 0){
        aquecedor = aquecedor - 50
        contAquece += 1
    }

    aquecedor = contAquece * 50

    while (bomba > 0){
        bomba = bomba - 50
        contBomba += 1
    }

    bomba = contBomba * 50
    
    document.getElementById("resultado-litr").innerHTML = litragem + "  L"
    document.getElementById("resultado-aquece").innerHTML = aquecedor + "  W"
    document.getElementById("resultado-bomba").innerHTML = bomba + "  L/h"
}
