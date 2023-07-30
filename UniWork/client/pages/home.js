import React, { useEffect, useState } from 'react';

function Home() {
	const [backendData, setBackendData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/users')
			.then((response) => response.json())
			.then((data) => {
				setBackendData(data);
			})
			.catch((error) => {
				console.error('Error fetching API:', error);
			});
	}, []);
	return (
		<div>
			{typeof backendData.user === 'undefined' ? (
				<p>Loading...</p>
			) : (
				backendData.user.map((u, i) => <p key={i}>{u}</p>)
			)}
		</div>
	);
}

export default Home;
