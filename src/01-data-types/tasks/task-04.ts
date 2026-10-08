/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
const book1: { isbn: string; title: string; author: string; totalPages: number; category: string; isAvailable: boolean } = {
  isbn: "978-0-123456-47-2",
  title: "Introduction to TypeScript",
  author: "John Doe",
  totalPages: 350,
  category: "Programming",
  isAvailable: true
};

const book2: { isbn: string; title: string; author: string; totalPages: number; category: string; isAvailable: boolean } = {
  isbn: "978-0-987654-32-1",
  title: "TypeScript Best Practices",
  author: "Jane Smith",
  totalPages: 280,
  category: "Programming",
  isAvailable: false
};

const book3: { isbn: string; title: string; author: string; totalPages: number; category: string; isAvailable: boolean } = {
  isbn: "978-1-234567-89-0",
  title: "Web Development with React",
  author: "Bob Johnson",
  totalPages: 420,
  category: "Web Development",
  isAvailable: true
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);