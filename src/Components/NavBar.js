import React, {useContext} from 'react'
import { BookContext } from '../Context/BookContext';

const NavBar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currenty you have {books.length} books</p>
        </div>
    );
}
 
export default NavBar;