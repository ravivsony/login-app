import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import HomePage from "./pages";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";

const AppRoute = ({
	component: Component,
	layout: Layout,
	isAuth,
	proctected,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (proctected) {
					if (isAuth) {
						return (
							<Component {...props} />
							// <Layout>
							// 	<Component {...props} />
							// </Layout>
						);
					} else {
						return <Redirect to="/" />;
					}
				} else {
					return <Component {...props} />;
					// if you have layout
					// return (
					// 	<Layout>
					// 		<Component {...props} />
					// 	</Layout>
					// );
				}
			}}
		/>
	);
};

const Routes = ({ isAuth }) => {
	return (
		<Router>
			<Switch>
				<AppRoute proctected={false} component={HomePage} path="/" exact />
				<AppRoute proctected={false} component={LoginPage} path="/login" />
				<AppRoute
					proctected={true}
					component={ProfilePage}
					path="/profile"
					isAuth={isAuth}
				/>
			</Switch>
		</Router>
	);
};

export default Routes;
