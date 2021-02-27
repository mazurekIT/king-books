const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="user">
				<img src="images/photokw.jpg" alt="" />
				<h1>Stephen King</h1>
				<p>Richard Bachman</p>
			</div>
			<div className="links">
				<div className="link">
					<img src="images/biography.png" alt="" />
					<h2>Biography</h2>
				</div>
				<div className="link">
					<img src="images/checklist.png" alt="" />
					<h2>Checklist</h2>
				</div>
				<div className="link">
					<img src="images/question-marks3.png" alt="" />
					<h2>What next!</h2>
				</div>
				<div className="link">
					<img src="images/magnifying-glass.png" alt="" />
					<input type="text" placeholder="search book" />
				</div>
			</div>

			<div className="pro">
				<h2>Join pro for more</h2>
				<img src="images/pro-key.png" alt="" />
			</div>
		</div>
	);
};

export default Dashboard;
