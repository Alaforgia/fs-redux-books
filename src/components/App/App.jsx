import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BookList from "../BookList/BookList";
import BookForm from "../BookForm/BookForm";

import "./App.css";

function App() {
  // TODO - GET Book List from server
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBookList();
  }, []);

  const fetchBookList = () => {
    axios
      .get("/books")
      .then((response) => {
        dispatch({
          type: "SET_BOOK_LIST",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error fetchBookList", error);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Books w/ Redux!</h1>
      </header>
      <main>
        <BookForm fetchBookList={fetchBookList} />
        <BookList />
      </main>
    </div>
  );
}

export default App;
