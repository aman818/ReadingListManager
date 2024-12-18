import React, { useState } from 'react';
import BookCard from '../components/BookCard';

function ReadingListPage() {
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author 1", status: "to-read" },
    { id: 2, title: "Book 2", author: "Author 2", status: "in-progress" },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Reading List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default ReadingListPage;
