function  showSection(sectionId) {
    // Hide all sectoins
    document.querySelectorAll('main.content section').forEach(function(section) {
       section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'black';
    // check
}