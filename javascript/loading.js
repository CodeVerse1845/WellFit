function showLoadingAnimation() {
    document.getElementById('loading-overlay').style.opacity = '1';
    document.getElementById('content').style.opacity = '0';
    
    setTimeout(() => {
        document.getElementById('loading-overlay').style.opacity = '0';
        document.getElementById('content').style.opacity = '1';
        
        setTimeout(() => {
            document.getElementById('loading-overlay').style.display = 'none';
        }, 500);
    }, 2200);
}

// Show loading animation on initial page load
showLoadingAnimation();

// Show loading animation when navigating to a new page
document.addEventListener('click', function(event) {
    const target = event.target.closest('a');
    if (target && target.getAttribute('href')) {
        event.preventDefault();
        showLoadingAnimation();
        setTimeout(() => {
            window.location.href = target.getAttribute('href');
        }, 2200);
    }
});

// Show loading animation on page refresh
window.addEventListener('beforeunload', function() {
    showLoadingAnimation();
});

// Load header and footer
fetch('/HTML_Files/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

fetch('/HTML_Files/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });