import React, { useState, useEffect } from "react";
import Book from "./Book";
const BooksList = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch("./king-simple.json")
			.then((res) => res.json())
			.then((data) => {
				setBooks(data.books);
			})
			.catch((err) => console.log(err));
	}, []);

	console.log(books);
	return (
		// tu ma być map wsystkich książek
		<div className="books">
			<div className="status">
				<h1>All books</h1>
				<input type="text" placeholder="search book" />
			</div>
			{books.map((book, index) => (
				<Book
					key={index}
					title={book.title}
					year={book.year}
					polishTitle={book["polish title"]}
					desc={book.desc}
				/>
			))}
		</div>
	);
};

export default BooksList;
