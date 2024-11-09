document.getElementById('returnForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from the form inputs
    const userIDReturn = document.getElementById('userIDReturn').value;
    const bookIDReturn = document.getElementById('bookIDReturn').value;
    const returnDate = document.getElementById('returnDate').value;
    const condition = document.getElementById('condition').value;

    // Display return confirmation message with line breaks
    document.getElementById('returnConfirmation').innerHTML = `
        <br>
        <p><strong>User ID:</strong> ${userIDReturn}</p>
        <br>
        <p><strong>Book ID:</strong> ${bookIDReturn}</p>
        <br>
        <p><strong>Return Date:</strong> ${returnDate}</p>
        <br>
        <p><strong>Condition:</strong> ${condition}</p>
        <br>
        <p><em>Book Returned Successfully!</em></p>
    `;
});
