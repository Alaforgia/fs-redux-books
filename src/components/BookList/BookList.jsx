import axios from "axios";
import { useSelector } from "react-redux";

function BookList() {
  const bookList = useSelector((store) => store.bookList);

  // make the async request
  // axios.get("/stuff").then((response) => {
  //   // then when the response comes back, update redux
  //   dispatch({
  //     type: SET_STUFF,
  //     payload: response.data,
  //   });
  // });

  return (
    <section>
      <h2>All Books</h2>
      <ul>
        {bookList.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookList;
