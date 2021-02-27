const Books = () => {
	return (
		// tu ma być map wsystkich książek
		<div className="book">
			<img src="./public/images.newspaper.png" alt="" />
			<div className="book-info">
				<div className="titles">
					<h2>Title</h2>
					<p>(oryginal title)</p>
				</div>
				<p>opis lub współautor</p>
				<p>rok 2000</p>
			</div>
			<div className="is-read">
				<input type="checkbox" />
			</div>
		</div>
	);
};

export default Books;
