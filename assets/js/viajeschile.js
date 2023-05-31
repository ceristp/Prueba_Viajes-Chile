$(function () {
    $(document).scroll(function () {
        var $navbar = $(".navcolor");
        $navbar.toggleClass('scrolled', $(this).scrollTop() > 342);
    });

    $('[data-toggle="tooltip"]').tooltip()

    $('.card-title').click(function(){
    alert("Se escondera satisfactoriamente el parrafo de abajo del titulo de la tarjeta...")
    });

    $("#article1").on('dblclick', 'p', function(){
    $(this).css("color", "green");
    });

    $("#article2").on('dblclick', 'p', function(){
    $(this).css("color", "red");
    });

    $("#article3").on('dblclick', 'p', function(){
    $(this).css("color", "yellow");
    });

    $('.card-title').on("click",(function () {
    $(this).siblings('p').toggle();
    }));
});