import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (e) => {
        const book = {...newBook};
        book.title = e.target.form.elements.title.value;
        book.author = e.target.form.elements.author.value;

        setNewBook(book);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    }
      
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={newBook.title} name="title" onChange={handleInputChange} />
                    </label>

                    <label>
                        Author:
                        <input type="text" value={newBook.author} name="author" onChange={handleInputChange} />
                    </label>
                    
                    <button type="submit">
                        Add Book
                    </button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookshelf;