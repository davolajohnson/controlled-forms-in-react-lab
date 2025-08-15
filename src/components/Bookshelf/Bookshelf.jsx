// src/components/Bookshelf/Bookshelf.jsx
import { useState } from 'react';

const Bookshelf = () => {
  // initial list
  const [books, setBooks] = useState([
    { id: 1, title: 'Waiting To Exhale', author: 'Terry McMillian' },
    { id: 2, title: 'Activate Your Greatness', author: 'Alex Toussaint' },
    { id: 2, title: 'The Coldest Winter Ever', author: 'Sister Souljah' },
  ]);

  // controlled form state
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // update controlled inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;       // name must be "title" or "author"
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  // add new book
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = newBook.title.trim();
    const author = newBook.author.trim();
    if (!title || !author) return;

    setBooks((prev) => [...prev, { id: Date.now(), title, author }]);
    setNewBook({ title: '', author: '' });  // reset form
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="e.g., Dune"
          />

          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="e.g., Frank Herbert"
          />

          <button type="submit">Add to Shelf</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book) => (
          <div key={book.id} className="bookCard">
            <h4 style={{ margin: '0 0 4px' }}>{book.title}</h4>
            <p style={{ margin: 0 }}>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
