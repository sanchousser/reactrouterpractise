import { useEffect, useState } from 'react'
import css from './HomePage.module.css'
import fetchBooks from 'services/getApiData';

const HomePage = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks('fiction', 8)
            .then(setBooks)
            .catch(console.error)
    }, [])



    return (
        <section>
            <h1>Popular Literature</h1>
            <ul className={css.books__list}>
                {books.map((book) => (
                    <li key={book.key}>
                        {book.cover_id ? (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                                alt={book.title}
                            />
                        ) : (
                            <div>No Image</div>
                        )}
                        <p>{book.title}</p>
                        {book.authors && (
                            <p>{book.authors.map((author) => author.name).join("")}</p>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default HomePage