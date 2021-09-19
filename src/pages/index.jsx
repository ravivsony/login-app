import React from "react";
import LoginComp from "../components/LoginComp";

const HomePage = () => {
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

					<LoginComp />
					<br />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
