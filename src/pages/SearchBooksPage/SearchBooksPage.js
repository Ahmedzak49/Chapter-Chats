import { useState } from "react";
import { searchBooks } from "../../utilities/search-api";

export default function SearchBooksPage() {
  const [searchTerm, setSeearchTerm] = useState("");
  const handleClick = async () => {
    const bookResult = await searchBooks({searchTerm: searchTerm})

  };
  return (
    <div>
      <h1>Search for Books</h1>
      <input type="text" placeholder="Search for books..." value={searchTerm} onChange={(evt) => setSeearchTerm(evt.target.value)}/>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
