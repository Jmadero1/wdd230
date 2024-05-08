function getLastModifiedDate() {
    var lastModified = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var formattedDate = lastModified.toLocaleDateString('en-US', options);
    return formattedDate;
}

// Update the footer with the last modified date
document.addEventListener('DOMContentLoaded', function() {
    var lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = getLastModifiedDate();
    }
});