document.addEventListener('DOMContentLoaded', function() {
    // Ensure the form is available
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent!');
        });
    }

    // Embed the YouTube video
    var iframe = document.createElement('iframe');
    iframe.width = "300";
    iframe.height = "200";
    iframe.src = "https://www.youtube.com/embed/Rs1mKuvl3xk?autoplay=1&loop=1&playlist=Rs1mKuvl3xk";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    var videoContainer = document.createElement('div');
    videoContainer.className = "video-container";
    videoContainer.appendChild(iframe);

    document.body.appendChild(videoContainer);
});
