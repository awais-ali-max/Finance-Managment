$(document).ready(function () {
    $("#menu-toggle").click(function () {
        $("#wrapper").toggleClass("toggled");
    });

    // Example function for exporting data
    function exportData(type) {
        // This is a placeholder for actual export functionality
        alert('Export ' + type + ' data');
    }

    window.exportData = exportData;
});
