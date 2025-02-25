// Function to load the header and footer
function loadTemplate(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading template:', error));
}

// Call the function to load the header and footer
window.onload = function() {
    loadTemplate('header', 'header.html',);
    loadTemplate('footer', 'footer.html');
    // loadTemplate('css', 'header.css');
};

