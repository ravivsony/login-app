import React, { useState } from "react";
const user = {
	email: "email@email.com",
	password: "test1234",
};

const LoginComp = () => {
	const [info, setInfo] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { value, name } = e.target;
		setInfo({
			...info,
			[name]: value,
		});
	};

	const submit = (e) => {
		e.preventDefault();
		if (!info.email && !info.password) {
			alert("Please enter the email and password!");
		} else {
			const newEntry = { email: info.email, password: info.password };
			console.log(newEntry);
			if (info.email !== user.email && info.password !== user.password) {
				return alert("Invalid credentials");
			}

			localStorage.setItem("itemsJson", JSON.stringify(newEntry));
			setInfo({
				email: "",
				password: "",
			});
			window.location.href = "/profile";
		}
	};
	return (
		<form className="my-4 w-50 " onSubmit={submit}>
			<div
				className="text-primary rounded pt-1 pb-1"
				style={{ backgroundColor: "lightblue", zIndex: 2 }}
			>
				Use account <b>admin@demo.com</b> and password <b>demo</b> to continue.
			</div>
			<br />
			<div className="form-group">
				<input
					type="email"
					name="email"
					className="form-control"
					placeholder="admin@demo.com"
					value={info.email}
					onChange={handleChange}
				/>
			</div>
			<br />
			<div className="form-group">
				<input
					type="password"
					className="form-control"
					placeholder="********"
					name="password"
					value={info.password}
					onChange={handleChange}
				/>
				<br />
				<small className="text-muted">Forget Password? </small>
			</div>
			<br />

			<button type="submit" className="btn btn-success">
				Sign In
			</button>
		</form>
	);
};

export default LoginComp;
