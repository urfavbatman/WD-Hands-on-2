function changeHeroBackground(imageUrl) {
    var heroImage = document.getElementById('heroImage');
    heroImage.src = imageUrl;

    var thumbnails = document.querySelectorAll('.a-pictures a');
    thumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.a-pictures a');
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function(event) {
            event.preventDefault();
            var imageUrl = thumbnail.getAttribute('href');
            changeHeroBackground(imageUrl);

            thumbnails.forEach(function(thumb) {
                thumb.classList.remove('active');
            });
            thumbnail.classList.add('active');
        });
    });
});