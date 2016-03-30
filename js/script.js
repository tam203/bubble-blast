
document.addEventListener("DOMContentLoaded", function(event) {
    var x = document.getElementsByClassName("vr-image-demo");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener('click', function () {
            window.location.href = this.getAttribute("content-url");
        });
    }
});
