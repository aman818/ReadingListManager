import React from 'react';

function BookCard({ book }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h3 className="text-xl font-bold">{book.title}</h3>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-sm text-gray-500">Status: {book.status}</p>
    </div>
  );
}

export default BookCard;
