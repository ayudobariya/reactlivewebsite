import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" Component={Home} />
				<Route exact path="/about" Component={About} />
				<Route exact path="/service" Component={Service} />
				<Route exact path="/contact" element={<Contact />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</>
	)
};

export default App;