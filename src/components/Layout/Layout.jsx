import Header from "../Header/Header.jsx";
import Navbar from "../NavBar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Carusel from "../Carusel/Carusel.jsx";
import ImageSlider from "../Carusel/ImageSlider.jsx";
import ImageSlider2 from "../Carusel/ImageSlider2.jsx";
import SimpleSlider from "../Carusel/SimpleSlider.jsx";
const Layout = () => {
    return (
        <body>
        <Header/>
        <Navbar/>
        {/*<Carusel/>*/}
        {/*<ImageSlider2/>*/}
        <SimpleSlider/>
        <main>
            <Outlet/>
        </main>
        <footer>

        </footer>
        </body>
    )
}
export default Layout;