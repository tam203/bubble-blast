var x = document.getElementsByClassName("vr-image-demo");
var i;
for (i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function () {
        alert(1);
        window.location.href = '/360image.html?urk=' + this.getAttribute("src");
    });
}