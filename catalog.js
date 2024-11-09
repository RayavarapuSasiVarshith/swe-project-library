// // Manage Catalog Functionality
// document.getElementById('catalogForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const bookIDCatalog = document.getElementById('bookIDCatalog').value;
//     const bookTitleCatalog = document.getElementById('bookTitleCatalog').value;
//     const author = document.getElementById('author').value;
//     const publisher = document.getElementById('publisher').value;
//     const yearPublished = document.getElementById('yearPublished').value;
//     const genreCatalog = document.getElementById('genreCatalog').value;
//     const totalCopies = document.getElementById('totalCopies').value;
//     document.getElementById('catalogUpdateMessage').innerText = 
//         `Catalog Updated: ${bookTitleCatalog} by ${author}. Publisher: ${publisher}, Published: ${yearPublished}, Genre: ${genreCatalog}, Copies: ${totalCopies}.`;
// });

document.getElementById('catalogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from the form inputs
    const bookIDCatalog = document.getElementById('bookIDCatalog').value;
    const bookTitleCatalog = document.getElementById('bookTitleCatalog').value;
    const author = document.getElementById('author').value;
    const publisher = document.getElementById('publisher').value;
    const yearPublished = document.getElementById('yearPublished').value;
    const genreCatalog = document.getElementById('genreCatalog').value;
    const totalCopies = document.getElementById('totalCopies').value;

    // Display catalog update message with line breaks
    document.getElementById('catalogUpdateMessage').innerHTML = `
        <p><strong>Book ID:</strong> ${bookIDCatalog}</p>
        <p><strong>Book Title:</strong> "${bookTitleCatalog}"</p>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Publisher:</strong> ${publisher}</p>
        <p><strong>Year Published:</strong> ${yearPublished}</p>
        <p><strong>Genre:</strong> ${genreCatalog}</p>
        <p><strong>Total Copies:</strong> ${totalCopies}</p>
        <p><em>Catalog Updated Successfully!</em></p>
    `;
});