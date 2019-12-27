import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The fear of a wise man', author: 'Patrick Rothfuss', id: 1},
        {title: 'The name of the wind', author: 'Patrick Rothfuss', id: 2},
        {title: 'The sound of silence', author: 'Patrick Rothfuss', id: 3}
    ]);

    const addBook = (title, author) => {
        console.log('chegou aqui')
        setBooks([...books, {title, author, id: uuid()}])
    } 

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider
