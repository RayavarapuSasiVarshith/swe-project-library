document.getElementById('generateReportButton').addEventListener('click', function() {
    const reportType = document.getElementById('reportType').value;
    
    if (!reportType) {
        document.getElementById('reportOutput').innerHTML = '<p style="color: red;">Please select a report type.</p>';
        return; // Exit if no report type is selected
    }

    // Generate report message
    let reportMessage = `
        <p><strong>Generating Report:</strong></p>
        <p>Report Type: <strong>${reportType}</strong></p>
        <p><em>Generating your report...</em></p>
    `;
    
    document.getElementById('reportOutput').innerHTML = reportMessage;
});