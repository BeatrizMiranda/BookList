import React, {useContext, useState} from 'react';
import { BookContext } from '../Context/BookContext';


const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    
    const handdleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author}});
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={handdleSubmit}>
            <input required type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input required type="text" placeholder="Book author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="Add Book"/>
        </form>
    );
}
 
export default BookForm;
