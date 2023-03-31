import BookCard from "../../components/BookCard/BookCard";
import { getUserBooks, removeBook } from "../../utilities/book-api";
import { useEffect, useState } from "react";

export default function MyBookListPage() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getUserBooks()
    .then((result) => {
      setBookList(result);
    })
  }, [])
  return (
    <div>
      <h1>My Book List</h1>
    {bookList.length > 0 ? (
      <div className="bookListContainer">
      {bookList.map((book) => <BookCard book={book} key={book.googleid} textButton="DELETE" handleClick={removeBook} loading="removing..." success="removed"/>)}
      </div>
    ) : <p>no books Added</p>}
    </div>
  );
}
