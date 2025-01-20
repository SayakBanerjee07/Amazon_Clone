document.addEventListener('DOMContentLoaded', function() {
    // Select the "Back to Top" button by its ID
    const backToTopButton = document.getElementById('backToTopButton');

    // Attach an event listener to the button
    backToTopButton.addEventListener('click', function() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});