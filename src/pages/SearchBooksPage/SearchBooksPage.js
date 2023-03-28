import { useState } from "react";
import { searchBooks } from "../../utilities/search-api";
import BookCard from "../../components/BookCard/BookCard";

export default function SearchBooksPage() {
  const [searchTerm, setSeearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const handleClick = async () => {
    const bookResult = await searchBooks({searchTerm: searchTerm})
    // title, authors, summary, image, subtitle
    const formattedBooks = bookResult.map((book) => {
      return {
        title: book.volumeInfo.title,
        googleid: book.id,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail,
      }
    })
    console.log('book results', bookResult);
    setBooks(formattedBooks)
  };
  return (
    <div>
      <h1>Search for Books</h1>
      <input type="text" placeholder="Search for books..." value={searchTerm} onChange={(evt) => setSeearchTerm(evt.target.value)}/>
      <button onClick={handleClick}>Search</button>
      <div className="searchResults">
        {books.map((book) => {
          return <BookCard book={book} key={book.googleid}/>
        })}
      </div>
    </div>
  );
}
