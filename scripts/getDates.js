document.addEventListener("DOMContentLoaded", function() {
    
    const currentYear = new Date().getFullYear();
    
   
    document.querySelector("footer p:first-of-type span").textContent = currentYear;

    
    const lastModifiedDate = document.lastModified;

    
    document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;
});
