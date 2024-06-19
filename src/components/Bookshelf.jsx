import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        // { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        // { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (e) => {
        const {
            target: { name, value }
        } = e;

        setNewBook({ 
            ...newBook, 
            [name]: value 
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newBook.title || !newBook.author) {
            alert('Please enter a title and author');
            return;
        }

        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    }
      
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>
                        Title:
                        <input type="text" value={newBook.title} id="title" name="title" onChange={handleInputChange} />
                    </label>

                    <label htmlFor='author'>
                        Author:
                        <input type="text" value={newBook.author} id="author" name="author" onChange={handleInputChange} />
                    </label>
                    
                    <button type="submit">
                        Add Book
                    </button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.length > 0 ?
                    books.map((book, index) => (
                        <div key={index} className="bookCard">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                        </div>
                    ))
                    : <p>No books to display</p>
                }
            </div>
        </div>
    )
}

export default Bookshelf;