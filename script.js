document.querySelector('.vr-image-demo').addEventListener('click', function () {
    window.location.href = '/360image.html?urk=' + this.getAttribute("src");
});