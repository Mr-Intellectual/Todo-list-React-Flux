import React,{ useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Context } from "./store/appContext";


//Views
import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Table from "./views/table";
import Detials from "./views/details";


//Components
import  Navbar  from "./component/navbar";
import  Footer  from "./component/footer";
import Todo from "./views/todo";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);


	return (
		<div onClick={(e)=>actions.ranClick(e)} id="main" >
			<BrowserRouter basename={basename}>
					<Navbar />
					<div className="container-xxl hv-100 mt-3" >
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/todo" element={<Todo/>} />
						<Route path="/table" element={<Table />} />
						<Route path="/detials" element={<Detials />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					</div>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
