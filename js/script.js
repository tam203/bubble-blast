$(document).ready(function(){
    var x = document.getElementsByClassName("vr-image-demo");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener('click', function () {
            $("#image-scene .image-source").attr("src", x[i].getAttribute("content-url")).show();
            $(".main-menu").fadeOut();
        });
    }
});
