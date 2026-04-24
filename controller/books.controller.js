import { getBooks } from "../config/db.config.js"
import { createBook, deleteBookById, findBookById, updateBook } from "../services/book.service.js";


export const getBooksController = (req, res) => {
    const books = getBooks();

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;


    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedBooks = books.slice(startIndex, endIndex);

    const booksWithLinks = paginatedBooks.map(book => ({
        ...book,
        links: [
            {
                rel: "self",
                method: "GET",
                href: `/api/books/${book.id}`
            }
        ]
    }));

    const links = [
        {
            rel: "self",
            method: "GET",
            href: `/api/books?page=${page}&limit=${limit}`
        },
        {
            rel: "create",
            method: "POST",
            href: "/api/books"
        }
    ];

    if(endIndex < books.length) {
        links.push({
          rel: "next",
          method: "GET",
          href: `/api/books?page=${page + 1}&limit=${limit}`,
        });
    }

    if(startIndex > 0) {
        links.push({
          rel: "prev",
          method: "GET",
          href: `/api/books?page=${page - 1}&limit=${limit}`,
        });
    }

    res.status(200).json({
        success: true,
        message: "Books fetched successfully.",
        page,
        limit,
        total: books.length,
        count: paginatedBooks.length,
        data: booksWithLinks,
        links: links
    })
}

// GET A SPECIFIC BOOK
export const getBookById = (req, res) => {
    const { id } = req.params;
    const result = findBookById(id);
    if(!result.success) {
        res.status(400).json({
            success: result.success,
            message: result.message,
            data: null,
            links: null
        })
    }

    res.status(200).json({
      success: result.success,
      message: result.message,
      data: {
        ...result.book,
        links: [
          {
            rel: "self",
            method: "GET",
            href: `/api/books/${result.book.id}`,
          },
          {
            rel: "update",
            method: "PUT",
            href: `/api/books/${result.book.id}`,
          },
          {
            rel: "delete",
            method: "DELETE",
            href: `/api/books/${result.book.id}`,
          },
        ],
      },
    });
}

// ADD A BOOK TO THE DB
export const addBook = (req, res) => {
    const { title, author } = req.body;

    if(!(title || author)) {
        return res.status(401).json({
            success: false,
            message: "Title and/or author is missing",
            data: null
        })
    }

    const result = createBook({ title, author });
    res.status(200).json({
      success: result.success,
      message: result.message,
      data: {
        ...result.book,
        links: [
          {
            rel: "self",
            method: "GET",
            href: `/api/books/${result.book.id}`,
          },
          {
            rel: "update",
            method: "PUT",
            href: `/api/books/${result.book.id}`,
          },
          {
            rel: "delete",
            method: "DELETE",
            href: `/api/books/${result.book.id}`,
          }
        ]
      }
    });
}

// UPDATE A BOOK
export const editBook = (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    const result = updateBook(id, req.body);
    if(!result.success) {
        return res.status(401).json({
            success: result.success,
            message: result.message,
            data: result.book
        })
    }

    res.status(200).json({
        success: result.success,
        message: result.message,
        data: {
            ...result.book,
            links: [
                {
                    rel: "self",
                    method: "GET",
                    href: `/api/books/${result.book.id}`,
                },
                {
                    rel: "update",
                    method: "PUT",
                    href: `/api/books/${result.book.id}`,
                },
                {
                    rel: "delete",
                    method: "DELETE",
                    href: `/api/books/${result.book.id}`,
                }  
            ] 
        }
    })
};

// DELETE A BOOK
export const deleteBook = (req, res) => {
    const { id } = req.params;
    const result = deleteBookById(id);
    if(!result.success) {
        return res.status(401).json({
          success: result.success,
          message: result.message,
          data: result.book,
        });
    }

    res.status(200).json({
      success: result.success,
      message: result.message,
      data: {
        ...result.book,
        links: [
          {
            rel: "self",
            method: "GET",
            href: `/api/books/${result.book.id}`,
          },
          {
            rel: "update",
            method: "PUT",
            href: `/api/books/${result.book.id}`,
          },
          {
            rel: "create",
            method: "POST",
            href: `/api/books`,
          },
        ],
      },
    });
}
