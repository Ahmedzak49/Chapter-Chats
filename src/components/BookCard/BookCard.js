const BookCard = ({ book }) => {
    return (
        <div className="bookCard">
            <img src= {book.image} alt={book.title} />
            <h2>{book.title}: {book.subtitle}</h2>
            <p> Authored by:{book.authors.join(', ')}</p>
        </div>
    )
}

export default BookCard;
