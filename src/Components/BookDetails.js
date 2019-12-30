import React, {useContext} from 'react'
import { BookContext } from '../Context/BookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return (
        <li className="book" key={book.id} >
            <div className="infos">
                <div className="title">{book.title}</div>
                <div className="author">{book.author}</div>
            </div>
            <div className="trash" onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id })}>
                
            </div>
        </li>
    );
}
 
export default BookDetails;