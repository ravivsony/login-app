import React, { useEffect, useState } from "react";

const LoginPage = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const authUser = JSON.parse(localStorage.getItem("itemsJson"));
		if (!authUser) {
			return (window.location.href = "/");
		} else {
			setUser(authUser);
		}
	}, []);
	console.log(user);
	return (
		<div className="container">
			<h1>Welcome to Login page</h1>
		</div>
	);
};

export default LoginPage;
