import { addBook } from "../../utilities/book-api";
import {useState} from "react";

const BookCard = ({ book, textButton, handleClick, loading, success }) => {
    const [added, setAdded] = useState(false)
    const [buttonText, setButtonText] = useState(textButton)
    const handleAddBook = async() => {
        setButtonText(loading)
        console.log('clicked')
        try {
            const addedBook = await handleClick(book)
            console.log('book added', addedBook);
            setAdded(true)
            setButtonText(success)
        } catch (err) {
            console.log('add book error',err)
        }
    }
    return (
        <div className="bookCard">
            <img src= {book.image} alt={book.title} />
            <h3>{book.title}: {book.subtitle}</h3>
            <div className="bookCardBottom">
            <p> Authored by:{book.authors.join(', ')}</p>
            <button onClick={handleAddBook} disabled={added}>{buttonText}</button>
            </div>
        </div>
    )
}

export default BookCard;
