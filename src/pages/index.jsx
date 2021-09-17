import React, { useState } from "react";
const user = {
	email: "email@email.com",
	password: "test1234",
};

const HomePage = () => {
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

	function submit(e) {
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
			window.location.href = "/login";
		}
	}
	return (
		<div className="container-fluid ">
			<div className="row min-vh-100 ">
				<div className="colo-1 col-12 col-lg-4 ">
					<div
						className="d-flex flex-column justify-content-center align-items-center  "
						id="welcomee"
					>
						<h3 className="welcome text-center">Welcome to Login Page! </h3>{" "}
						<p className="text-center">
							This project is created by using React and Bootstrap for Login
							Verification.
						</p>
					</div>
				</div>

				<div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center min-vh-100 logiin">
					<h1 className="text-center ">Login Account</h1>
					<h6 className="text-center text-muted">
						Enter your username and password
					</h6>

					<form className="my-4 w-50 " onSubmit={submit}>
						<div
							className="text-primary rounded pt-1 pb-1"
							style={{ backgroundColor: "lightblue", zIndex: 2 }}
						>
							Use account <b>admin@demo.com</b> and password <b>demo</b> to
							continue.
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
					<br />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
