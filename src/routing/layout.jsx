import { Outlet } from "react-router-dom";
import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";

export const Layout = () => {
    return (
        <>
            <header>
                <Header/>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer/>                
            </footer>
        </>
    );
};