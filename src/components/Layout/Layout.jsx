import Header from "../Header/Header.jsx";
import Navbar from "../NavBar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import SimpleSlider from "../Carusel/SimpleSlider.jsx";
import Advertising from "../Advertising/Advertising.jsx";
import Information from "../Information/Information.jsx";
import Support from "../Support/Support.jsx";
import Footer from "../Footer/Footer.jsx";
import ImageSlider2 from "../Carusel/ImageSlider2.jsx";
import ImageSlider from "../Carusel/ImageSlider.jsx";


const Layout = () => {
	return (
		<div>
		<Header />
		<Navbar />
		<SimpleSlider />
			{/*<ImageSlider2/>*/}
		<main>
			<Outlet />
		</main>
		<Advertising />
		<Information />
		<Support />
		<Footer />
		</div>
	)
}
export default Layout;