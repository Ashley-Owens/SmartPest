// The following code is modified from W3 Schools: 
// https://www.w3schools.com/howto/howto_js_accordion.asp
var accButtons = document.getElementsByClassName("accordion");


// Adds an event listener to each accordion button.
for (let i = 0; i < accButtons.length; i++) {
    accButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        // Expands and collapses the paragraph text panel.
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            
        } 
    });
}
