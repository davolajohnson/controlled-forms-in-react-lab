import { useState } from 'react';

const Bookshelf = () => {
  // Initial list (you can change or remove these starting examples)
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // Controlled form state
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Update controlled inputs as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit: add book, then reset fields
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = newBook.title.trim();
    const author = newBook.author.trim();
    if (!title || !author) return; // simple guard

    setBooks((prev) => [...prev, { title, author }]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="e.g., Dune"
            />
          </label>

          <label>
            Author
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              placeholder="e.g., Frank Herbert"
            />
          </label>

          <button
            type="submit"
            disabled={!newBook.title.trim() || !newBook.author.trim()}
          >
            Add to shelf
          </button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.length === 0 && <p>No books yet — add your first!</p>}
        {books.map((book, idx) => (
          <div className="bookCard" key={`${book.title}-${book.author}-${idx}`}>
            <strong>{book.title}</strong>
            <span>by {book.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
