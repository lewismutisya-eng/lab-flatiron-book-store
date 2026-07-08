const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// --- STEP 1: Update the Existing Header ---
// Select the element with the ID of 'header'
const bookStoreTitle = document.getElementById('header');

// Change its text to match the bookstore's name
bookStoreTitle.textContent = bookStore.name;


// --- STEP 2: Create New Elements for Each Book ---
// Select the element where the books will go
const bookList = document.getElementById('book-list');

// Access the array of books inside the bookStore object
const booksArray = bookStore.books;

// Loop through each book one by one using a standard beginner loop
for (let i = 0; i < booksArray.length; i++) {
    const currentBook = booksArray[i]; // Get the data for the current book

    // Create the container list item element
    const bookContainer = document.createElement('li');

    // Create the title element and set its text
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = currentBook.title;

    // Create the author element and set its text
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = currentBook.author;

    // Create the image element and set its source link
    const bookImage = document.createElement('img');
    bookImage.src = currentBook.imageUrl;

    // Glue the title, author, and image inside our container list item
    bookContainer.append(bookTitle, bookAuthor, bookImage);

    // Add the fully built book container into the main website list
    bookList.append(bookContainer);
}


// --- STEP 3: Bonus Challenge (Delete Element) ---
// Find the element with the ID 'delete-this'
const elementToDelete = document.getElementById('delete-this');

// If the element exists on the page, remove it completely
if (elementToDelete) {
    elementToDelete.remove();
}
