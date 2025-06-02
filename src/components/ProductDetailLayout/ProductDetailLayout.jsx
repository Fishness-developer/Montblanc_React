import React from 'react';
import Header from "../Header/Header.jsx";
import Navbar from "../NavBar/NavBar.jsx";
import SimpleSlider from "../Carusel/SimpleSlider.jsx";
import {Outlet} from "react-router-dom";
import Advertising from "../Advertising/Advertising.jsx";
import Information from "../Information/Information.jsx";
import Support from "../Support/Support.jsx";
import Footer from "../Footer/Footer.jsx";

const ProductDetailLayout = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Support />
			<Footer />
		</div>
	);
};

export default ProductDetailLayout;
