const Book = ({ title, polishTitle, year, desc }) => {
	return (
		<div className="book">
			<img src="images/newspaper.png" alt="" />
			<div className="book-info">
				<div className="titles">
					{polishTitle ? (
						<h2>{`${polishTitle} `}</h2>
					) : (
						<h2>{title}</h2>
					)}
					{polishTitle ? <h2>{`-[${title}]`}</h2> : ""}
				</div>
				<p>{desc}</p>
				<p>{year}</p>
			</div>
			<div className="is-read">
				<input type="checkbox" />
			</div>
		</div>
	);
};

export default Book;
