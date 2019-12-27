import React from "react";
import BookContextProvider from "./Context/BookContext";
import NavBar from "./Components/NavBar";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";

function App() {
    return (
        <div className="App">
            <BookContextProvider>
              <NavBar/>
              <BookList/>
              <BookForm />
            </BookContextProvider>
        </div>
    );
}

export default App;
