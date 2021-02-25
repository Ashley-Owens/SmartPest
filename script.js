
var generalList = [
    "Exterior and Interior Contracted Services",
    "Construction Termite Pre-treatment",
    "Spider Dewebbing",
    "Bee and Wasp Removal",
    "Specialty Roach Inspections and Treatments",
    "Scorpion Blacklight Inspections and Treatments",
    "Bed Bug Treatments & K9 Detection",
    "Carpet Beetle Treatment",
    "Flea & Tick treatments",
    "Exclusion and Remediation: bird, gopher, rodent, etc.",
    "Termite Treatment and Warranty Bonds",
    "Honeycomb Removal"]


// Sorts and displays the pest control services list.
function dispListContent(arr, id) {
    let content = document.getElementById(id);

    // Prevents list from populating every time button is pressed.
    if (content.children.length == 0) {
        arr.sort()
        arr.forEach( function (e) {
            let lst = document.createElement('li');
            lst.appendChild(document.createTextNode(e));
            content.appendChild(lst);
        });
    }
}

// Populates the list on content load.
document.addEventListener('DOMContentLoaded', (event) => {
    dispListContent(generalList, 'apartmentServices');
});

// Populates the list for different categories when button clicked.
document.getElementById("pills-comm-tab").addEventListener('click', function() {
    dispListContent(generalList, "commServices")});

document.getElementById("pills-res-tab").addEventListener('click', function() {
    dispListContent(generalList, "residentServices")});

