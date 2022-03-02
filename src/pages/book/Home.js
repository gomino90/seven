import { useEffect, useState } from "react";
import BookItem from "../../components/BookItem";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/bookall")
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      });
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
