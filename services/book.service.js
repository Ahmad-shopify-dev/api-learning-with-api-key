import { getBooks, saveBooks } from "../config/db.config.js";

// FIND BOOK BY ID
export const findBookById = (id) => {
    const books = getBooks();
    const findBook = books.find(book => book.id === Number(id));
    if(!findBook) {
        return {
            success: false,
            message: "No book found",
            book: null
        }
    }

    return {
      success: true,
      message: `Book found with id: ${id}`,
      book: findBook
    };
}

// CREATE A NEW BOOK
export const createBook = (bookdata) => {
    const books = getBooks();
    const newBook = {
        id: books.length + 1,
        ...bookdata
    }

    books.push(newBook);
    saveBooks(books);
    return {
        success: true,
        message: "Book has been created successfully.",
        book: newBook
    }
}

// UPDATE EXISTING BOOK
export const updateBook = (id, updateData) => {
    const books = getBooks();
    const findBookIndex = books.findIndex((book) => book.id === Number(id));
    if (findBookIndex === -1) {
      return {
        success: false,
        message: "Book not found",
        book: null,
      };
    }

    console.log(findBookIndex)

    books[findBookIndex] = {
        ...books[findBookIndex],
        ...updateData
    }
    console.log(books[findBookIndex], updateData)
    saveBooks(books);
    return {
        success: true,
        book: books[findBookIndex]
    }
}

// DELETE BOOK
export const deleteBookById = (id) => {
    const books = getBooks();
    const index = books.findIndex(book => book.id === Number(id));
    if(index === -1) {
        return {
            success: false,
            message: "Book not found",
            book: null
        }
    }

    const deletedBook = books.splice(index, 1);
    saveBooks(books);
    return {
      success: true,
      message: "Book deleted successfully.",
      book: deletedBook[0],
    };
}

