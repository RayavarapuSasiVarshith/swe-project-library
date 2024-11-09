// // Borrow Book Functionality
// document.getElementById('borrowForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Retrieve values from the form inputs
//     const userID = document.getElementById('userID').value;
//     const userName = document.getElementById('userName').value;
//     const bookID = document.getElementById('bookID').value;
//     const bookTitle = document.getElementById('bookTitle').value;
//     const genre = document.getElementById('genre').value;
//     const borrowedBooksCount = document.getElementById('borrowedBooksCount').value;

//     // Display confirmation message
//     document.getElementById('borrowConfirmation').innerText = 
//         `User ${userName} (ID: ${userID}) has borrowed "${bookTitle}" (ID: ${bookID}), Genre: ${genre}. Total books borrowed: ${borrowedBooksCount}.`;
// });


document.getElementById('borrowForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from the form inputs
    const userID = document.getElementById('userID').value;
    const userName = document.getElementById('userName').value;
    const bookID = document.getElementById('bookID').value;
    const bookTitle = document.getElementById('bookTitle').value;
    const genre = document.getElementById('genre').value;
    const borrowedBooksCount = document.getElementById('borrowedBooksCount').value;

    // Display confirmation message with line breaks
    document.getElementById('borrowConfirmation').innerHTML = `
        <br>
        <p><strong>User ID:</strong> ${userID}</p>
        <br>
        <p><strong>User Name:</strong> ${userName}</p>
        <br>
        <p><strong>Book ID:</strong> ${bookID}</p>
        <br>
        <p><strong>Book Title:</strong> "${bookTitle}"</p>
        <br>
        <p><strong>Genre:</strong> ${genre}</p>
        <br>
        <p><strong>Total Books Borrowed:</strong> ${borrowedBooksCount}</p>
        <br>
    `;
});
