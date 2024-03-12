document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".image");
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            images.forEach(function(img) {
                img.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});