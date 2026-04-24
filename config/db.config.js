import fs from 'fs'
import path from 'path'

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

const usersPath = path.join(__dirname, '../database/users.json');
const booksPath = path.join(__dirname, '../database/books.json');

// GET ALL USERS
export const getUsers = () => {
    const data = fs.readFileSync(usersPath);
    return JSON.parse(data);
}

// SAVE ALL USERS
export const saveUsers = (users) => {
    fs.writeFileSync(usersPath, JSON.stringify(users));
}

// GET ALL BOOKS
export const getBooks = () => {
    const data = fs.readFileSync(booksPath);
    return JSON.parse(data);
}

// SAVE ALL BOOKS
export const saveBooks = (books) => {
    fs.writeFileSync(booksPath, JSON.stringify(books))
}