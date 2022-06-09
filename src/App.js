import React from 'react';
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./components/routes";
import { Switch, Route, Redirect } from "react-router-dom"
import './assets/style/style.scss'



function App() {
    return (
        <>
			<Header />
			<div className="pages">
				<Switch>
					{routes.map((item) => {
						return (
							<Route
								key={item.id}
								path={item.path}
								component={item.component}
								exact
							/>
						)
					})}
					<Redirect to="/404" />
				</Switch>
			</div>
			<Footer  />
		</>
    );
}

export default App;